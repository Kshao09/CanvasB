// ─────────────────────────────────────────────────────────────────────────────
//  components.js  –  Shared DOM rendering components
// ─────────────────────────────────────────────────────────────────────────────

const Components = (() => {

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g,  "&lt;")
      .replace(/>/g,  "&gt;")
      .replace(/"/g,  "&quot;")
      .replace(/'/g,  "&#039;");
  }

  const icons = {
    reply:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 00-4-4H4"/></svg>`,
    replyAll: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="7 17 2 12 7 7"/><polyline points="13 17 8 12 13 7"/><path d="M22 18v-2a4 4 0 00-4-4H8"/></svg>`,
    more:     `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>`,
    delete:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>`,
    archive:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`,
    check:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    forward:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 7 20 12 15 17"/><path d="M4 18v-2a4 4 0 014-4h12"/></svg>`,
  };

  const TYPE_LABELS = {
    "submission_comment": "Submission",
    "announcement": "Announcement",
    "message": ""
  };

  function folderBadge(m) {
    if (m.folder === "deleted")  return `<span class="folder-badge deleted">Deleted</span>`;
    if (m.folder === "sent")     return `<span class="folder-badge sent">Sent</span>`;
    if (m.archived || m.folder === "archived") return `<span class="folder-badge archived">Archived</span>`;
    if (m.type !== "message")    return `<span class="folder-badge ${m.type.replace("_","-")}">${TYPE_LABELS[m.type] || ""}</span>`;
    return "";
  }

  function renderRowActions(m) {
    const starLabel = m.starred ? "★ Starred" : "☆ Star";

    return `
      <div class="row-actions">
        <button
          class="row-action-btn star-action${m.starred ? " active" : ""}"
          data-action="star"
          data-id="${esc(m.id)}"
          type="button"
          aria-label="${m.starred ? "Unstar" : "Star"} message"
          title="${m.starred ? "Unstar" : "Star"}"
        >${starLabel}</button>

        ${m.folder !== "deleted" ? `
          <button
            class="row-action-btn delete-action"
            data-action="delete"
            data-id="${esc(m.id)}"
            type="button"
            aria-label="Delete message"
            title="Delete"
          >Delete</button>
        ` : `
          <button
            class="row-action-btn restore-action"
            data-action="restore"
            data-id="${esc(m.id)}"
            type="button"
            aria-label="Restore message"
            title="Restore"
          >Restore</button>
        `}
      </div>
    `;
  }

  function renderListRow(m, isActive, searchQuery) {
    const subjectHtml = searchQuery
      ? highlightText(esc(m.subject), searchQuery)
      : esc(m.subject);

    const senderHtml = searchQuery
      ? highlightText(esc(m.senderDisplay), searchQuery)
      : esc(m.senderDisplay);

    const previewHtml = searchQuery
      ? highlightText(esc(m.preview), searchQuery)
      : esc(m.preview);

    return `
      <div
        class="msg-row${isActive ? " active" : ""}${m.unread ? " unread" : ""}${m.starred ? " is-starred" : ""}${m.folder === "deleted" ? " is-deleted" : ""}"
        data-id="${esc(m.id)}"
        role="option"
        aria-selected="${isActive}"
        tabindex="0"
      >
        <input
          type="checkbox"
          class="msg-check"
          ${m.checked ? "checked" : ""}
          data-id="${esc(m.id)}"
          aria-label="Select message"
        />
        <div class="msg-dot" aria-hidden="true"></div>

        <div class="msg-body-wrap">
          <div class="msg-row-top">
            <span class="msg-sender" title="${esc(m.senderDisplay)}">${senderHtml}</span>
            <span class="msg-date">${esc(m.displayDate)}</span>
          </div>

          <div class="msg-subject-line">
            <span class="msg-subject" title="${esc(m.subject)}">${subjectHtml}</span>
            ${m.badge > 1 ? `<span class="msg-badge">${m.badge}</span>` : ""}
          </div>

          <div class="msg-preview-row">
            <span class="msg-preview">${previewHtml}</span>
            ${folderBadge(m)}
          </div>

          <div class="msg-actions-row">
            ${renderRowActions(m)}
          </div>
        </div>
      </div>
    `;
  }

  function renderDetail(m) {
    if (!m) {
      return `<div class="empty-detail">
        <div class="empty-icon">✉️</div>
        <div>Select a conversation to read</div>
      </div>`;
    }

    const tags = (m.courses || [])
      .map(c => `<span class="course-tag">${esc(c)}</span>`)
      .join("");

    const bodyHtml = esc(m.body).replace(/\n/g, "<br>");

    return `
      <div class="detail-msg">
        <div class="detail-msg-header">
          <div class="detail-avatar" style="background:${esc(m.avatarColor)}">
            ${esc(m.initials)}
          </div>
          <div class="detail-meta">
            <div class="detail-from-row">
              <span class="detail-from">${esc(m.senderDisplay)}</span>
              <div class="detail-from-actions">
                <button class="icon-btn" title="Reply" data-action="reply" type="button">${icons.reply}</button>
                <button class="icon-btn" title="Reply All" data-action="replyAll" type="button">${icons.replyAll}</button>
                <button class="icon-btn" title="More" data-action="more" type="button">${icons.more}</button>
              </div>
            </div>
            <div class="detail-course-tags">${tags}</div>
            <div class="detail-timestamp">${esc(m.timestamp)}</div>
            <div class="detail-status-row">
              ${m.starred ? `<span class="detail-status-pill starred">★ Starred</span>` : ""}
              ${m.folder === "deleted" ? `<span class="detail-status-pill deleted">Deleted</span>` : ""}
              ${(m.archived || m.folder === "archived") ? `<span class="detail-status-pill archived">Archived</span>` : ""}
            </div>
          </div>
        </div>
        <div class="detail-body-text">${bodyHtml}</div>
      </div>
    `;
  }

  function highlightText(escapedText, query) {
    if (!query) return escapedText;
    const safeQ = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(${safeQ})`, "gi");
    return escapedText.replace(re, "<mark>$1</mark>");
  }

  function renderEmpty(msg = "No messages") {
    return `<div class="list-empty">${esc(msg)}</div>`;
  }

  function renderSuggestionItem(s, query, idx) {
    const labelHtml = highlightText(esc(s.label), query);
    const typeLabel = {
      course: "Course",
      professor: "Professor",
      subject: "Subject"
    }[s.type] || "";

    return `
      <div class="suggestion-item" data-idx="${idx}" role="option" tabindex="-1">
        <span class="suggestion-icon">${s.icon}</span>
        <span class="suggestion-label">${labelHtml}</span>
        <span class="suggestion-type">${typeLabel}</span>
      </div>
    `;
  }

  return {
    esc,
    icons,
    renderListRow,
    renderDetail,
    renderEmpty,
    renderSuggestionItem,
    highlightText
  };

})();

window.Components = Components;