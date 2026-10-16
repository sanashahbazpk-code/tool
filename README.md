# SEO, AEO & GEO Auditor (React + TypeScript + Vite)

A modern, high-performance web application rewritten in **React, TypeScript, and Tailwind CSS** that audits websites for:
- **SEO** (Search Engine Optimisation — Google rankings readiness)
- **AEO** (Answer Engine Optimisation — Featured snippets, People Also Ask, and voice search)
- **GEO** (Generative Engine Optimisation — AI citability in ChatGPT, Perplexity, Gemini, and AI Overviews)

It compares your site against competitors, explains **why they rank**, highlights keyword autocomplete ideas, profiles backlinks, and prioritizes actionable fixes.

---

## Features

- **Multi-Vector Scoring:** Instant calculation of SEO, AEO, GEO, and composite Overall scores with letter grades (A–F) and progress indicators.
- **Priority Action Plan ("Do these first"):** Categorized roadmap (P0 High Impact, P1 Quick Wins, P2 Nice to Have) with clear problem statements and direct fix instructions.
- **Factor-by-Factor Analysis ("Why they rank"):** Evidence-backed comparisons on Content Depth, Citations/Sourcing, Winning Page Format, and Off-site Authority.
- **Side-by-Side Competitor Benchmarking:** Direct comparative matrix (word counts, FAQ schemas, AEO/GEO proxies, response times, and JS-rendering status).
- **Google Autocomplete Keyword Discovery:** Real-time intent-grouped keyword ideas with single-click and bulk copy.
- **Backlink Profile & AI Visibility:** Anchor distribution warning system, dofollow/nofollow ratios, top domain ratings, and Common Crawl AI corpus presence.
- **Itemized Checks Audit:** Searchable and filterable list of 60+ checks with category and status toggles (PASS, WARN, FAIL, INFO, SKIP).
- **Dual Language Support:** Instant English and Urdu (اردو) localization switch with full layout and text translation.
- **Deep Linking & Persistence:** URL parameter synchronization (`?job=<domain>&view=<tab>`) matching the original specification.
- **Multi-Format Reports Export:** One-click downloads for standalone HTML reports, Markdown documentation, JSON raw schemas, and CSV spreadsheets.

---

## Running the Application

```bash
# Install dependencies
npm install

# Start development server on port 3000
npm run dev

# Build for production
npm run build
```

---

## Tech Stack

- **Framework:** React 19 + Vite 6
- **Language:** TypeScript 5.7
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
