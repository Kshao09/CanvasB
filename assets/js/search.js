// ─────────────────────────────────────────────────────────────────────────────
//  search.js  –  Fuzzy search engine + autocomplete for Canvas Inbox
// ─────────────────────────────────────────────────────────────────────────────

class InboxSearch {
  constructor(data) {
    this.data = Array.isArray(data) ? data : [];
    this.index = this._buildIndex(this.data);
  }

  _buildIndex(data) {
    const courses = new Set();
    const senders = new Set();
    const subjects = new Set();
    const keywords = new Set();

    data.forEach(m => {
      (m.courses || []).forEach(c => courses.add(String(c || "").trim()));

      (m.senderList || []).forEach(s => {
        const name = String(s || "").trim();
        if (name && name !== "You") senders.add(name);
      });

      String(m.subject || "")
        .split(/[\s\-–→]+/)
        .forEach(w => {
          const clean = w.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
          if (clean.length > 3) keywords.add(clean);
        });

      const words = String(m.subject || "").split(" ").filter(w => w.length > 2);
      for (let i = 0; i < words.length - 1; i++) {
        subjects.add(words.slice(i, i + 2).join(" "));
      }
    });

    return {
      courses: [...courses].filter(Boolean).sort(),
      senders: [...senders].filter(Boolean).sort(),
      subjects: [...subjects].filter(Boolean),
      keywords: [...keywords].filter(Boolean)
    };
  }

  _levenshtein(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;

    const dp = [];
    for (let i = 0; i <= a.length; i++) dp[i] = [i];
    for (let j = 0; j <= b.length; j++) dp[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        dp[i][j] = a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }

    return dp[a.length][b.length];
  }

  _scoreField(query, text, weight = 1.0) {
    if (!text) return 0;

    const q = String(query).toLowerCase().trim();
    const t = String(text).toLowerCase();

    if (!q) return 0;

    if (t.includes(q)) return 100 * weight;

    const qTokens = q.split(/\s+/);
    let tokenHits = 0;
    qTokens.forEach(tok => {
      if (t.includes(tok)) tokenHits++;
    });
    if (tokenHits > 0) return (60 * (tokenHits / qTokens.length)) * weight;

    const tTokens = t.split(/\s+/);
    let maxFuzzy = 0;

    qTokens.forEach(qt => {
      tTokens.forEach(tt => {
        const maxLen = Math.max(qt.length, tt.length);
        if (maxLen < 3) return;
        const dist = this._levenshtein(qt, tt);
        const similarity = 1 - dist / maxLen;
        if (similarity > 0.65) maxFuzzy = Math.max(maxFuzzy, similarity);
      });
    });

    return maxFuzzy > 0 ? maxFuzzy * 40 * weight : 0;
  }

  search(query) {
    if (!query || !query.trim()) return [...this.data];

    const results = this.data
      .map(m => {
        const score = Math.max(
          this._scoreField(query, m.subject, 1.0),
          this._scoreField(query, m.senderDisplay, 0.9),
          this._scoreField(query, (m.senderList || []).join(" "), 0.9),
          this._scoreField(query, (m.courses || []).join(" "), 0.85),
          this._scoreField(query, m.preview, 0.6),
          this._scoreField(query, m.body, 0.4)
        );
        return { msg: m, score };
      })
      .filter(r => r.score > 5);

    results.sort((a, b) => b.score - a.score);
    return results.map(r => r.msg);
  }

  _esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  highlight(query, text) {
    if (!query || !text) return this._esc(text);
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return this._esc(text).replace(
      new RegExp(`(${escaped})`, "gi"),
      "<mark>$1</mark>"
    );
  }

  getSuggestions(query) {
    if (!query || query.trim().length < 1) return [];
    const q = query.toLowerCase().trim();
    const suggestions = [];

    const courseMatches = this.index.courses.filter(c => {
      const cl = c.toLowerCase();
      if (cl.includes(q)) return true;
      return q.split(" ").some(qt =>
        cl.split(/\s+/).some(cw => {
          const maxLen = Math.max(qt.length, cw.length);
          return maxLen > 2 && this._levenshtein(qt, cw) / maxLen < 0.4;
        })
      );
    }).slice(0, 3);

    courseMatches.forEach(c => {
      suggestions.push({ type: "course", label: c, icon: "📚" });
    });

    const senderMatches = this.index.senders.filter(s => {
      const sl = s.toLowerCase();
      if (sl.includes(q)) return true;
      return q.split(" ").some(qt =>
        sl.split(/\s+/).some(sw => {
          const maxLen = Math.max(qt.length, sw.length);
          return maxLen > 2 && this._levenshtein(qt, sw) / maxLen < 0.38;
        })
      );
    }).slice(0, 3);

    senderMatches.forEach(s => {
      suggestions.push({ type: "professor", label: s, icon: "👤" });
    });

    const subjectMatches = this.index.subjects.filter(ph => {
      return ph.toLowerCase().includes(q);
    }).slice(0, 3);

    subjectMatches.forEach(ph => {
      suggestions.push({ type: "subject", label: ph, icon: "✉️" });
    });

    return suggestions.slice(0, 8);
  }
}

window.InboxSearch = InboxSearch;