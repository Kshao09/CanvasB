// ─────────────────────────────────────────────────────────────────────────────
//  search.js  –  Fuzzy search engine + autocomplete for Canvas Inbox
// ─────────────────────────────────────────────────────────────────────────────

class InboxSearch {
  constructor(data) {
    this.data = data;
    this.index = this._buildIndex(data);
  }

  // ── Index Building ──────────────────────────────────────────────────────
  _buildIndex(data) {
    const courses   = new Set();
    const senders   = new Set();
    const subjects  = new Set();
    const keywords  = new Set();

    data.forEach(m => {
      // Courses
      m.courses.forEach(c => courses.add(c.trim()));

      // Individual sender names (split by comma)
      m.senderList.forEach(s => {
        const name = s.trim();
        if (name && name !== "You") senders.add(name);
      });

      // Subject words (meaningful ones)
      m.subject.split(/[\s\-–→]+/).forEach(w => {
        const clean = w.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        if (clean.length > 3) keywords.add(clean);
      });

      // Subject phrases (up to 3 words)
      const words = m.subject.split(" ").filter(w => w.length > 2);
      for (let i = 0; i < words.length - 1; i++) {
        subjects.add(words.slice(i, i + 2).join(" "));
      }
    });

    return {
      courses:  [...courses].sort(),
      senders:  [...senders].sort(),
      subjects: [...subjects],
      keywords: [...keywords]
    };
  }

  // ── Levenshtein Distance ─────────────────────────────────────────────────
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

  // ── Fuzzy Match Score (0–100) ────────────────────────────────────────────
  _scoreField(query, text, weight = 1.0) {
    if (!text) return 0;
    const q = query.toLowerCase().trim();
    const t = text.toLowerCase();

    if (!q) return 0;

    // Exact substring → highest score
    if (t.includes(q)) return 100 * weight;

    // Token-level partial match
    const qTokens = q.split(/\s+/);
    let tokenHits = 0;
    qTokens.forEach(tok => {
      if (t.includes(tok)) tokenHits++;
    });
    if (tokenHits > 0) return (60 * (tokenHits / qTokens.length)) * weight;

    // Fuzzy token match (Levenshtein per word pair)
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

  // ── Search Messages ──────────────────────────────────────────────────────
  search(query) {
    if (!query || !query.trim()) return [...this.data];

    const results = this.data.map(m => {
      const score = Math.max(
        this._scoreField(query, m.subject,                    1.0),
        this._scoreField(query, m.senderDisplay,              0.9),
        this._scoreField(query, m.senderList.join(" "),       0.9),
        this._scoreField(query, m.courses.join(" "),          0.85),
        this._scoreField(query, m.preview,                    0.6),
        this._scoreField(query, m.body,                       0.4)
      );
      return { msg: m, score };
    }).filter(r => r.score > 5);

    results.sort((a, b) => b.score - a.score);
    return results.map(r => r.msg);
  }

  // ── Highlight match in a string ──────────────────────────────────────────
  highlight(query, text) {
    if (!query || !text) return this._esc(text);
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "gi");
    return this._esc(text).replace(
      new RegExp(`(${this._esc(query)})`, "gi"),
      (_, m) => `<mark>${m}</mark>`
    );
  }

  _esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ── Autocomplete Suggestions ─────────────────────────────────────────────
  getSuggestions(query) {
    if (!query || query.trim().length < 1) return [];
    const q = query.toLowerCase().trim();
    const suggestions = [];

    // ── Courses ────────────────────────────────────────────────────────────
    const courseMatches = this.index.courses.filter(c => {
      const cl = c.toLowerCase();
      if (cl.includes(q)) return true;
      // Fuzzy: check each word of course against query tokens
      return q.split(" ").some(qt =>
        cl.split(/\s+/).some(cw => {
          const maxLen = Math.max(qt.length, cw.length);
          return maxLen > 2 && this._levenshtein(qt, cw) / maxLen < 0.4;
        })
      );
    }).slice(0, 3);

    courseMatches.forEach(c =>
      suggestions.push({ type: "course", label: c, icon: "📚" })
    );

    // ── Professors / Senders ───────────────────────────────────────────────
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

    senderMatches.forEach(s =>
      suggestions.push({ type: "professor", label: s, icon: "👤" })
    );

    // ── Subject keywords / phrases ─────────────────────────────────────────
    const subjectMatches = this.index.subjects.filter(ph => {
      return ph.toLowerCase().includes(q);
    }).slice(0, 3);

    subjectMatches.forEach(ph =>
      suggestions.push({ type: "subject", label: ph, icon: "✉️" })
    );

    return suggestions.slice(0, 8);
  }
}

// Export to global
window.InboxSearch = InboxSearch;