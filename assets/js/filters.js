// ─────────────────────────────────────────────────────────────────────────────
//  filters.js  –  Course, folder, and search filter logic
// ─────────────────────────────────────────────────────────────────────────────

const Filters = (() => {

  // ── Build course list from data ───────────────────────────────────────────
  function getCourseOptions(data) {
    const courses = new Set();
    data.forEach(m => m.courses.forEach(c => courses.add(c.trim())));
    return ["All Courses", ...Array.from(courses).sort()];
  }

  // ── Build folder/inbox options ────────────────────────────────────────────
  function getFolderOptions() {
    return [
      { value: "inbox",       label: "Inbox"                },
      { value: "unread",      label: "Unread"               },
      { value: "starred",     label: "Starred"              },
      { value: "sent",        label: "Sent"                 },
      { value: "archived",    label: "Archived"             },
      { value: "submission",  label: "Submission Comments"  },
    ];
  }

  // ── Apply all active filters ──────────────────────────────────────────────
  function apply({ data, course, folder, searchResults }) {
    // Start from search results (already filtered & sorted by relevance)
    let arr = searchResults !== null ? searchResults : [...data];

    // ── Course filter ────────────────────────────────────────────────────
    if (course && course !== "All Courses") {
      arr = arr.filter(m =>
        m.courses.some(c => c.trim() === course.trim())
      );
    }

    // ── Folder / inbox filter ────────────────────────────────────────────
    switch (folder) {
      case "inbox":
        arr = arr.filter(m => m.folder === "inbox");
        break;
      case "unread":
        arr = arr.filter(m => m.unread);
        break;
      case "starred":
        arr = arr.filter(m => m.starred);
        break;
      case "sent":
        arr = arr.filter(m => m.folder === "sent");
        break;
      case "archived":
        arr = arr.filter(m => m.archived);
        break;
      case "submission":
        arr = arr.filter(m => m.type === "submission_comment");
        break;
      default:
        arr = arr.filter(m => m.folder === "inbox");
    }

    // ── Always sort chronologically (most recent first) when not searching ──
    // When searching, relevance order is preserved from InboxSearch.search()
    if (searchResults === null) {
      arr = sortByDate(arr);
    }

    return arr;
  }

  // ── Sort by ISO date descending ──────────────────────────────────────────
  function sortByDate(arr) {
    return [...arr].sort((a, b) =>
      new Date(b.isoDate) - new Date(a.isoDate)
    );
  }

  return { getCourseOptions, getFolderOptions, apply, sortByDate };

})();

window.Filters = Filters;