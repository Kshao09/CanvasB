// ─────────────────────────────────────────────────────────────────────────────
//  filters.js  –  Course, folder, and search filter logic
// ─────────────────────────────────────────────────────────────────────────────

const Filters = (() => {

  function getCourseOptions(data) {
    const courses = new Set();
    data.forEach(m => (m.courses || []).forEach(c => courses.add(c.trim())));
    return ["All Courses", ...Array.from(courses).sort((a, b) => a.localeCompare(b))];
  }

  function getFolderOptions() {
    return [
      { value: "inbox",      label: "Inbox" },
      { value: "unread",     label: "Unread" },
      { value: "starred",    label: "Starred" },
      { value: "sent",       label: "Sent" },
      { value: "archived",   label: "Archived" },
      { value: "deleted",    label: "Deleted" },
      { value: "submission", label: "Submission Comments" },
    ];
  }

  function apply({ data, course, folder, searchResults }) {
    let arr = searchResults !== null ? [...searchResults] : [...data];

    if (course && course !== "All Courses") {
      arr = arr.filter(m =>
        (m.courses || []).some(c => c.trim() === course.trim())
      );
    }

    switch (folder) {
      case "inbox":
        arr = arr.filter(m => m.folder === "inbox");
        break;

      case "unread":
        arr = arr.filter(m => m.unread && m.folder !== "deleted");
        break;

      case "starred":
        arr = arr.filter(m => m.starred && m.folder !== "deleted");
        break;

      case "sent":
        arr = arr.filter(m => m.folder === "sent");
        break;

      case "archived":
        arr = arr.filter(m => m.archived || m.folder === "archived");
        break;

      case "deleted":
        arr = arr.filter(m => m.folder === "deleted");
        break;

      case "submission":
        arr = arr.filter(m => m.type === "submission_comment" && m.folder !== "deleted");
        break;

      default:
        break;
    }

    if (searchResults === null) {
      arr = sortByDate(arr);
    }

    return arr;
  }

  function sortByDate(arr) {
    return [...arr].sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));
  }

  return {
    getCourseOptions,
    getFolderOptions,
    apply,
    sortByDate
  };

})();

window.Filters = Filters;