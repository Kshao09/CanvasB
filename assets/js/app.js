(function () {
  const messages = (window.CONVERSATIONS_DATA || []).map(m => ({ ...m }));

  // State
  let activeId = messages[0]?.id ?? null;
  let activeFilter = "all";
  let searchTerm = "";

  // DOM helpers
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const listEl = $("#list");
  const searchEl = $("#search");

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getVisibleMessages() {
    let arr = [...messages];

    if (activeFilter === "unread") arr = arr.filter(m => m.unread);
    if (activeFilter === "starred") arr = arr.filter(m => m.starred);

    const q = searchTerm.trim().toLowerCase();
    if (q) arr = arr.filter(m => m.subject.toLowerCase().includes(q));

    return arr;
  }

  function setActive(id) {
    const visible = getVisibleMessages();
    const exists = visible.some(m => m.id === id);
    activeId = exists ? id : (visible[0]?.id ?? null);
    render();
  }

  function renderList() {
    const visible = getVisibleMessages();
    listEl.innerHTML = "";

    if (visible.length === 0) {
      const empty = document.createElement("div");
      empty.className = "item";
      empty.style.cursor = "default";
      empty.innerHTML = `<span class="muted">No messages</span>`;
      listEl.appendChild(empty);
      return;
    }

    for (const m of visible) {
      const row = document.createElement("div");
      row.className =
        "item" +
        (m.id === activeId ? " active" : "") +
        (m.unread ? " unread" : "") +
        (m.starred ? " starred" : "");

      row.setAttribute("role", "option");
      row.setAttribute("aria-selected", m.id === activeId ? "true" : "false");

      row.innerHTML = `
        <span class="dot" aria-hidden="true"></span>
        <span class="subject">${escapeHtml(m.subject)}</span>
      `;

      row.addEventListener("click", () => setActive(m.id));
      listEl.appendChild(row);
    }
  }

  function renderDetail() {
    const m = messages.find(x => x.id === activeId);

    if (!m) {
      $("#detailTitle").textContent = "Select a message";
      $("#bigStar").textContent = "☆";
      $("#starLabel").textContent = "Not starred";
      $("#sentValue").textContent = "—";
      $("#readValue").textContent = "—";
      $("#body").textContent = "—";
      return;
    }

    $("#detailTitle").textContent = m.subject;
    $("#bigStar").textContent = m.starred ? "★" : "☆";
    $("#starLabel").textContent = m.starred ? "Starred" : "Not starred";

    $("#sentValue").textContent = m.sent;

    if (m.unread) {
      $("#readValue").textContent = "Unread";
    } else {
      $("#readValue").textContent = m.lastRead ? `Read ${m.lastRead} ago` : "Read";
    }

    $("#body").textContent = m.body;
  }

  function wireDetailActions() {
    const m = messages.find(x => x.id === activeId);

    $("#toggleRead").onclick = () => {
      if (!m) return;
      m.unread = !m.unread;
      m.lastRead = m.unread ? null : "just now";
      render();
    };

    const toggleStar = () => {
      if (!m) return;
      m.starred = !m.starred;
      render();
    };

    $("#toggleStar").onclick = toggleStar;

    const bigStar = $("#bigStar");
    bigStar.onclick = toggleStar;
    bigStar.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleStar();
      }
    };
  }

  function render() {
    renderList();
    renderDetail();
    wireDetailActions();
  }

  function initFilters() {
    $$(".pill").forEach(btn => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;

        // UI state for pills
        $$(".pill").forEach(b => {
          const isActive = b.dataset.filter === activeFilter;
          b.classList.toggle("active", isActive);
          b.setAttribute("aria-selected", isActive ? "true" : "false");
        });

        // Keep active selection valid under the new filter
        const visible = getVisibleMessages();
        if (!visible.some(m => m.id === activeId)) {
          activeId = visible[0]?.id ?? null;
        }
        render();
      });
    });
  }

  function initSearch() {
    searchEl.addEventListener("input", (e) => {
      searchTerm = e.target.value || "";
      const visible = getVisibleMessages();
      if (!visible.some(m => m.id === activeId)) {
        activeId = visible[0]?.id ?? null;
      }
      render();
    });
  }

  function initNav() {
    $$(".nav a").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        $$(".nav a").forEach(a => a.classList.remove("active"));
        link.classList.add("active");
      });
    });
  }

  // Start
  initNav();
  initFilters();
  initSearch();
  render();
})();
