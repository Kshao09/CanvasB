// ─────────────────────────────────────────────────────────────────────────────
//  app.js  –  Main application: state, event wiring, render loop
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  "use strict";

  const messages = (window.MESSAGES_DATA || []).map(m => ({ ...m }));

  const state = {
    activeId: messages[0]?.id ?? null,
    activeCourse: "All Courses",
    activeFolder: "inbox",
    searchQuery: "",
    searchResults: null,
    suggestionIdx: -1,
    lastDeleted: null,
    undoTimer: null,
  };

  const searcher = new window.InboxSearch(messages);

  const msgListEl = document.getElementById("msgList");
  const detailBodyEl = document.getElementById("detailBody");
  const detailHeaderEl = document.getElementById("detailHeader");
  const detailSubjectEl = document.getElementById("detailSubject");
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const suggestionBox = document.getElementById("suggestionBox");
  const courseSelect = document.getElementById("courseSelect");
  const folderSelect = document.getElementById("folderSelect");

  function initSelects() {
    courseSelect.innerHTML = "";
    folderSelect.innerHTML = "";

    const courseOpts = window.Filters.getCourseOptions(messages);
    courseOpts.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      courseSelect.appendChild(opt);
    });

    window.Filters.getFolderOptions().forEach(f => {
      const opt = document.createElement("option");
      opt.value = f.value;
      opt.textContent = f.label;
      folderSelect.appendChild(opt);
    });
  }

  function getVisible() {
    return window.Filters.apply({
      data: messages,
      course: state.activeCourse,
      folder: state.activeFolder,
      searchResults: state.searchResults,
    });
  }

  function clampActive(visible) {
    if (!visible.some(m => m.id === state.activeId)) {
      state.activeId = visible[0]?.id ?? null;
    }
  }

  function renderList() {
    const visible = getVisible();
    clampActive(visible);

    if (visible.length === 0) {
      msgListEl.innerHTML = window.Components.renderEmpty(
        state.searchQuery ? `No results for "${state.searchQuery}"` : "No messages"
      );
      return;
    }

    msgListEl.innerHTML = visible
      .map(m => window.Components.renderListRow(m, m.id === state.activeId, state.searchQuery))
      .join("");

    msgListEl.querySelectorAll(".msg-row").forEach(row => {
      const id = row.dataset.id;

      row.addEventListener("click", e => {
        if (e.target.classList.contains("msg-check")) return;
        if (e.target.closest(".row-action-btn")) return;

        const msg = messages.find(x => x.id === id);
        if (msg && msg.folder !== "deleted") {
          msg.unread = false;
        }

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

    msgListEl.querySelectorAll(".row-action-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();

        const action = btn.dataset.action;
        const id = btn.dataset.id;

        if (action === "star") toggleStar(id);
        if (action === "delete") deleteMessage(id);
        if (action === "restore") restoreMessage(id);
      });
    });

    msgListEl.querySelectorAll(".msg-check").forEach(chk => {
      chk.addEventListener("change", e => {
        e.stopPropagation();
        const id = chk.dataset.id;
        const msg = messages.find(x => x.id === id);
        if (msg) msg.checked = chk.checked;
      });
    });
  }

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

  function render() {
    renderList();
    renderDetail();
  }

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
    searchInput.value = "";
    state.searchQuery = "";
    state.searchResults = null;
    searchClear.style.display = "none";
    hideSuggestions();
    render();
    searchInput.focus();
  }

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
      state.activeCourse = s.label;
      courseSelect.value = s.label;
      searchInput.value = "";
      state.searchQuery = "";
      state.searchResults = null;
      searchClear.style.display = "none";
    } else {
      searchInput.value = s.label;
      state.searchQuery = s.label;
      state.searchResults = searcher.search(s.label);
      searchClear.style.display = "block";
    }

    hideSuggestions();
    const visible = getVisible();
    clampActive(visible);
    render();
  }

  function onSearchKeydown(e) {
    if (currentSuggestions.length === 0) {
      if (e.key === "Escape") {
        hideSuggestions();
        searchInput.blur();
      }
      return;
    }

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

  function toggleStar(id) {
    const msg = messages.find(x => x.id === id);
    if (!msg) return;
    msg.starred = !msg.starred;
    render();
  }

  function deleteMessage(id) {
    const msg = messages.find(x => x.id === id);
    if (!msg) return;

    const ok = window.confirm("Are you sure you want to delete this email?");
    if (!ok) return;

    state.lastDeleted = {
      id: msg.id,
      previousFolder: msg.folder,
      previousArchived: !!msg.archived,
    };

    msg.folder = "deleted";
    msg.archived = false;
    msg.unread = false;

    if (state.activeId === id) {
      const visibleAfterDelete = getVisible();
      state.activeId = visibleAfterDelete.find(m => m.id !== id)?.id ?? visibleAfterDelete[0]?.id ?? null;
    }

    showUndoToast();
    render();
  }

  function restoreMessage(id) {
    const msg = messages.find(x => x.id === id);
    if (!msg) return;

    msg.folder = "inbox";
    msg.archived = false;
    state.activeId = msg.id;
    render();
  }

  function undoDelete() {
    if (!state.lastDeleted) return;

    const msg = messages.find(x => x.id === state.lastDeleted.id);
    if (!msg) return;

    msg.folder = state.lastDeleted.previousFolder || "inbox";
    msg.archived = !!state.lastDeleted.previousArchived;

    state.activeId = msg.id;
    state.lastDeleted = null;

    removeUndoToast();
    render();
  }

  function removeUndoToast() {
    const toast = document.getElementById("undoToast");
    if (toast) toast.remove();

    if (state.undoTimer) {
      clearTimeout(state.undoTimer);
      state.undoTimer = null;
    }
  }

  function showUndoToast() {
    removeUndoToast();

    const toast = document.createElement("div");
    toast.id = "undoToast";
    toast.className = "undo-toast";
    toast.innerHTML = `
      <span>Email moved to Deleted.</span>
      <button type="button" class="undo-toast-btn" id="undoDeleteBtn">Undo</button>
    `;

    document.body.appendChild(toast);

    document.getElementById("undoDeleteBtn")?.addEventListener("click", () => {
      undoDelete();
    });

    state.undoTimer = setTimeout(() => {
      state.lastDeleted = null;
      removeUndoToast();
    }, 5000);
  }

  function archiveActiveMessage() {
    const msg = messages.find(x => x.id === state.activeId);
    if (!msg) return;
    msg.archived = true;
    msg.folder = "archived";
    render();
  }

  function deleteActiveMessage() {
    if (!state.activeId) return;
    deleteMessage(state.activeId);
  }

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
      archiveActiveMessage();
    });

    document.getElementById("deleteBtn")?.addEventListener("click", () => {
      deleteActiveMessage();
    });

    document.getElementById("composeBtn")?.addEventListener("click", () => {
      alert("Compose new message (stub)");
    });
  }

  function wireNav() {
    document.querySelectorAll(".nav-item").forEach(a => {
      a.addEventListener("click", e => {
        e.preventDefault();
        document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
        a.classList.add("active");
      });
    });
  }

  document.addEventListener("click", e => {
    if (!e.target.closest(".search-wrap") && !e.target.closest("#suggestionBox")) {
      hideSuggestions();
    }
  });

  function init() {
    initSelects();
    folderSelect.value = "inbox";

    searchInput.addEventListener("input", onSearchInput);
    searchInput.addEventListener("keydown", onSearchKeydown);
    searchInput.addEventListener("focus", () => {
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