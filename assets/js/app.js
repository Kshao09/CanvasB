// ─────────────────────────────────────────────────────────────────────────────
//  app.js  –  Main application: state, event wiring, render loop
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  "use strict";

  // ── Mutable message state (cloned from data) ────────────────────────────
  const messages = (window.MESSAGES_DATA || []).map(m => ({ ...m }));

  // ── App State ────────────────────────────────────────────────────────────
  const state = {
    activeId:      messages[0]?.id ?? null,
    activeCourse:  "All Courses",
    activeFolder:  "inbox",
    searchQuery:   "",
    searchResults: null,   // null = not searching; array = search active
    suggestionIdx: -1,     // keyboard nav in autocomplete
  };

  // ── Engine instances ─────────────────────────────────────────────────────
  const searcher = new window.InboxSearch(messages);

  // ── DOM refs ─────────────────────────────────────────────────────────────
  const msgListEl       = document.getElementById("msgList");
  const detailBodyEl    = document.getElementById("detailBody");
  const detailHeaderEl  = document.getElementById("detailHeader");
  const detailSubjectEl = document.getElementById("detailSubject");
  const searchInput     = document.getElementById("searchInput");
  const searchClear     = document.getElementById("searchClear");
  const suggestionBox   = document.getElementById("suggestionBox");
  const courseSelect    = document.getElementById("courseSelect");
  const folderSelect    = document.getElementById("folderSelect");

  // ── Populate selects ─────────────────────────────────────────────────────
  function initSelects() {
    // Course options
    const courseOpts = window.Filters.getCourseOptions(messages);
    courseOpts.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      courseSelect.appendChild(opt);
    });

    // Folder options
    window.Filters.getFolderOptions().forEach(f => {
      const opt = document.createElement("option");
      opt.value  = f.value;
      opt.textContent = f.label;
      folderSelect.appendChild(opt);
    });
  }

  // ── Get currently visible messages ───────────────────────────────────────
  function getVisible() {
    return window.Filters.apply({
      data:          messages,
      course:        state.activeCourse,
      folder:        state.activeFolder,
      searchResults: state.searchResults,
    });
  }

  // ── Ensure activeId is in visible set ────────────────────────────────────
  function clampActive(visible) {
    if (!visible.some(m => m.id === state.activeId)) {
      state.activeId = visible[0]?.id ?? null;
    }
  }

  // ── Render List ───────────────────────────────────────────────────────────
  function renderList() {
    const visible = getVisible();
    clampActive(visible);

    if (visible.length === 0) {
      msgListEl.innerHTML = window.Components.renderEmpty(
        state.searchQuery
          ? `No results for "${state.searchQuery}"`
          : "No messages"
      );
      return;
    }

    msgListEl.innerHTML = visible
      .map(m => window.Components.renderListRow(m, m.id === state.activeId, state.searchQuery))
      .join("");

    // Row click & keyboard
    msgListEl.querySelectorAll(".msg-row").forEach(row => {
      const id = row.dataset.id;

      row.addEventListener("click", e => {
        if (e.target.classList.contains("msg-check")) return;
        if (e.target.closest("[data-star]")) return;
        const msg = messages.find(x => x.id === id);
        if (msg) { msg.unread = false; }
        state.activeId = id;
        render();
      });

      row.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          row.click();
        }
      });
    });

    // Star buttons
    msgListEl.querySelectorAll("[data-star]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const id = btn.dataset.star;
        const msg = messages.find(x => x.id === id);
        if (msg) { msg.starred = !msg.starred; }
        render();
      });
    });

    // Checkboxes
    msgListEl.querySelectorAll(".msg-check").forEach(chk => {
      chk.addEventListener("change", e => {
        e.stopPropagation();
        const id = chk.dataset.id;
        const msg = messages.find(x => x.id === id);
        if (msg) { msg.checked = chk.checked; }
      });
    });
  }

  // ── Render Detail ─────────────────────────────────────────────────────────
  function renderDetail() {
    const m = messages.find(x => x.id === state.activeId) ?? null;

    if (!m) {
      detailHeaderEl.style.display = "none";
      detailBodyEl.innerHTML = window.Components.renderDetail(null);
      return;
    }

    detailHeaderEl.style.display = "flex";
    detailSubjectEl.textContent = m.subject;
    detailBodyEl.innerHTML = window.Components.renderDetail(m);
  }

  // ── Full Render ───────────────────────────────────────────────────────────
  function render() {
    renderList();
    renderDetail();
  }

  // ── Search Handling ───────────────────────────────────────────────────────
  function onSearchInput() {
    const q = searchInput.value.trim();
    state.searchQuery = q;

    if (q) {
      state.searchResults = searcher.search(q);
      searchClear.style.display = "block";
      showSuggestions(q);
    } else {
      state.searchResults = null;
      searchClear.style.display = "none";
      hideSuggestions();
    }

    const visible = getVisible();
    clampActive(visible);
    render();
  }

  function clearSearch() {
    searchInput.value  = "";
    state.searchQuery  = "";
    state.searchResults = null;
    searchClear.style.display = "none";
    hideSuggestions();
    render();
    searchInput.focus();
  }

  // ── Autocomplete ─────────────────────────────────────────────────────────
  let currentSuggestions = [];

  function showSuggestions(query) {
    currentSuggestions = searcher.getSuggestions(query);
    state.suggestionIdx = -1;

    if (currentSuggestions.length === 0) {
      hideSuggestions();
      return;
    }

    suggestionBox.innerHTML = currentSuggestions
      .map((s, i) => window.Components.renderSuggestionItem(s, query, i))
      .join("");

    suggestionBox.style.display = "block";
    suggestionBox.setAttribute("aria-expanded", "true");

    // Click on suggestion
    suggestionBox.querySelectorAll(".suggestion-item").forEach(item => {
      item.addEventListener("mousedown", e => {
        e.preventDefault();
        const idx = parseInt(item.dataset.idx, 10);
        applySuggestion(currentSuggestions[idx]);
      });
    });
  }

  function hideSuggestions() {
    suggestionBox.style.display = "none";
    suggestionBox.setAttribute("aria-expanded", "false");
    currentSuggestions = [];
    state.suggestionIdx = -1;
  }

  function applySuggestion(s) {
    if (!s) return;

    if (s.type === "course") {
      // Switch course filter
      state.activeCourse = s.label;
      courseSelect.value = s.label;
      searchInput.value  = "";
      state.searchQuery  = "";
      state.searchResults = null;
      searchClear.style.display = "none";
    } else {
      // Fill search bar with the suggestion label
      searchInput.value   = s.label;
      state.searchQuery   = s.label;
      state.searchResults = searcher.search(s.label);
      searchClear.style.display = "block";
    }

    hideSuggestions();
    const visible = getVisible();
    clampActive(visible);
    render();
  }

  function onSearchKeydown(e) {
    if (currentSuggestions.length === 0) return;

    const items = suggestionBox.querySelectorAll(".suggestion-item");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      state.suggestionIdx = Math.min(state.suggestionIdx + 1, items.length - 1);
      updateSuggestionHighlight(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      state.suggestionIdx = Math.max(state.suggestionIdx - 1, -1);
      updateSuggestionHighlight(items);
    } else if (e.key === "Enter") {
      if (state.suggestionIdx >= 0) {
        e.preventDefault();
        applySuggestion(currentSuggestions[state.suggestionIdx]);
      } else {
        hideSuggestions();
      }
    } else if (e.key === "Escape") {
      hideSuggestions();
      searchInput.blur();
    }
  }

  function updateSuggestionHighlight(items) {
    items.forEach((el, i) => {
      el.classList.toggle("highlighted", i === state.suggestionIdx);
    });
    if (state.suggestionIdx >= 0) {
      items[state.suggestionIdx]?.scrollIntoView({ block: "nearest" });
    }
  }

  // ── Toolbar action buttons ────────────────────────────────────────────────
  function wireToolbarButtons() {
    document.getElementById("replyBtn")?.addEventListener("click", () => {
      if (!state.activeId) return;
      alert("Reply (stub) – message id: " + state.activeId);
    });
    document.getElementById("replyAllBtn")?.addEventListener("click", () => {
      if (!state.activeId) return;
      alert("Reply All (stub) – message id: " + state.activeId);
    });
    document.getElementById("archiveBtn")?.addEventListener("click", () => {
      const msg = messages.find(x => x.id === state.activeId);
      if (!msg) return;
      msg.archived = true;
      msg.folder   = "archived";
      render();
    });
    document.getElementById("deleteBtn")?.addEventListener("click", () => {
      const idx = messages.findIndex(x => x.id === state.activeId);
      if (idx === -1) return;
      messages.splice(idx, 1);
      state.activeId = getVisible()[0]?.id ?? null;
      render();
    });
    document.getElementById("composeBtn")?.addEventListener("click", () => {
      alert("Compose new message (stub)");
    });
  }

  // ── Nav link active state ────────────────────────────────────────────────
  function wireNav() {
    document.querySelectorAll(".nav-item").forEach(a => {
      a.addEventListener("click", e => {
        e.preventDefault();
        document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
        a.classList.add("active");
      });
    });
  }

  // ── Close suggestions on outside click ───────────────────────────────────
  document.addEventListener("click", e => {
    if (!e.target.closest(".search-wrap") && !e.target.closest("#suggestionBox")) {
      hideSuggestions();
    }
  });

  // ── Initialise ────────────────────────────────────────────────────────────
  function init() {
    initSelects();

    // Set inbox as default in folder select
    folderSelect.value = "inbox";

    searchInput.addEventListener("input",   onSearchInput);
    searchInput.addEventListener("keydown", onSearchKeydown);
    searchInput.addEventListener("focus",   () => {
      if (state.searchQuery) showSuggestions(state.searchQuery);
    });

    searchClear.addEventListener("click", clearSearch);

    courseSelect.addEventListener("change", e => {
      state.activeCourse = e.target.value;
      const visible = getVisible();
      clampActive(visible);
      render();
    });

    folderSelect.addEventListener("change", e => {
      state.activeFolder = e.target.value;
      const visible = getVisible();
      clampActive(visible);
      render();
    });

    wireToolbarButtons();
    wireNav();
    render();
  }

  init();

})();