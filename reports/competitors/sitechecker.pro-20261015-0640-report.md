# SEO / AEO / GEO Research Report

**Target:** https://sitechecker.pro/  
**Generated:** 2026-10-15 13:40 UTC  
**Tool:** seo-tool (SEO + AEO + GEO auditor)

---

## 1. Scoreboard

| Discipline | Score | Grade | What it covers |
|---|---|---|---|
| **SEO** — Search Engine Optimisation | 78.1/100 | C | Ranking pages on Google: keywords, on-page, technical, internal links |
| **AEO** — Answer Engine Optimisation | 37.2/100 | F | Featured snippets, People Also Ask, voice answers |
| **GEO** — Generative Engine Optimisation | 83.3/100 | B | Being cited or summarised by ChatGPT, Perplexity, Gemini, AI Overviews |
| **Overall** | **66.2/100** | **D** |  |

Checks run: **66** — 35 pass, 15 warnings, 7 failures, 8 informational, 1 skipped.

## 2. Executive summary

**Top problems, highest impact first:**

- **[AEO] FAQPage schema** — No FAQPage schema
  - *Fix:* Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change.
- **[AEO] Question-form headings** — No question headings (1 questions)
  - *Fix:* Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
- **[AEO] Answers are 40-60 words** — Answers are the wrong length (0.0% of answers)
  - *Fix:* Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot.
- **[SEO] Image alt text** — Most images missing alt (35.4% missing)
  - *Fix:* Write descriptive alt text for every image — it feeds image search, accessibility and AI understanding.
- **[AEO] Sentence length** — Sentences too long (39.38 words/sentence)
  - *Fix:* Split long sentences. Answers get quoted when they are short and self-contained.
- **[GEO] Quotable sentence length** — Too long to quote (39.38 words/sentence)
  - *Fix:* Keep sentences under 22 words. AI engines quote self-contained sentences, not sprawling ones.
- **[CONTENT] Text-to-HTML ratio** — Very low (code-heavy page) (1.1%)
  - *Fix:* Reduce markup around the content: fewer wrapper divs, less inline CSS/JS.

## 3. Why they rank — factor by factor

_No competitor comparison was possible (no competitor pages were fetched)._

## 4. Competitors

_No competitors discovered. Pass `--competitors a.com,b.com` or provide a SERP API key._

## 5. Keyword ideas

_Autocomplete returned nothing. Check network access, or supply seeds with `--seeds`._

## 6. Backlinks and off-site authority

**No backlink API key available.** This report cannot tell you how many referring domains the site or its competitors have. That is a gap, not a zero.

| What you can do | Cost | What you get |
|---|---|---|
| Google Search Console → Links (your own site) | Free | Real backlinks and top linking sites, straight from Google |
| Bing Webmaster Tools → Backlinks | Free | Second opinion on your own backlinks |
| Ahrefs Webmaster Tools | Free | DR and referring domains for your own verified site |
| Export a competitor's backlinks from any tool, then `--backlinks-csv file.csv` | Depends | Full anchor, follow/nofollow and risk analysis by this tool |
| Semrush or Ahrefs API key in an env var | Paid | Automatic referring-domain counts, sitewide |


## 7. Action plan

### P0 — High impact failures

These are failing checks with heavy weight. Fix these first.

1. **[AEO] FAQPage schema**
   - Problem: No FAQPage schema
   - Do this: Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change.
2. **[AEO] Answers are 40-60 words**
   - Problem: Answers are the wrong length (0.0% of answers)
   - Do this: Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot.
3. **[AEO] Question-form headings**
   - Problem: No question headings (1 questions)
   - Do this: Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.

### P1 — Quick wins

Low effort, clear payoff, mostly on-page markup and copy edits.

1. **[GEO] Quantitative facts**
   - Problem: Few numbers (1.59 stats/100 words)
   - Do this: Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives.
2. **[GEO] Named author**
   - Problem: No author byline found
   - Do this: Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh.
3. **[GEO] Publish / update dates**
   - Problem: No datePublished / dateModified found
   - Do this: Add visible and machine-readable publish and last-updated dates.
4. **[SEO] Keyword alignment**
   - Problem: 'visibility' only appears in: H1
   - Do this: Put the primary keyword in the title, the H1, the URL slug and the first 100 words.
5. **[SEO] Title tag length**
   - Problem: Slightly long (61 chars)
   - Do this: Keep titles 30-60 characters so they are not truncated in the SERP. Front-load the primary keyword.
6. **[SEO] Trust pages exist**
   - Problem: Found: About page, Contact page, Privacy policy, Terms of service, Blog / news section, Shipping policy, FAQ page | Missing: Returns / refund policy
   - Do this: Add the remaining policy/FAQ pages.
7. **[CONTENT] Content depth**
   - Problem: Thin-ish (315 words)
   - Do this: Expand to at least 600 words of genuinely useful detail. Cover the questions a buyer asks before purchasing.
8. **[AEO] Sentence length**
   - Problem: Sentences too long (39.38 words/sentence)
   - Do this: Split long sentences. Answers get quoted when they are short and self-contained.
9. **[GEO] Quotable sentence length**
   - Problem: Too long to quote (39.38 words/sentence)
   - Do this: Keep sentences under 22 words. AI engines quote self-contained sentences, not sprawling ones.
10. **[SEO] Image alt text**
   - Problem: Most images missing alt (35.4% missing)
   - Do this: Write descriptive alt text for every image — it feeds image search, accessibility and AI understanding.
11. **[CONTENT] Text-to-HTML ratio**
   - Problem: Very low (code-heavy page) (1.1%)
   - Do this: Reduce markup around the content: fewer wrapper divs, less inline CSS/JS.

### P2 — Nice to have

Do these after P0 and P1.

1. **[AEO] Answer-first intro**
   - Problem: First paragraph is 6 words
   - Do this: Open with a 40-60 word paragraph that directly answers the page's main question, then expand.
2. **[AEO] Definition-style openers**
   - Problem: No answer opens with a definition
   - Do this: Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern.
3. **[AEO] Tables for comparison**
   - Problem: No tables on the page
   - Do this: Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.
4. **[SEO] Heading hierarchy**
   - Problem: 1 level jump(s), e.g. H2 -> H4
   - Do this: Do not skip heading levels. Outline the page H1 > H2 > H3 so search engines and AI can parse the structure.
5. **[AEO] HowTo schema**
   - Problem: No HowTo schema (only needed if you publish step-by-step guides)
   - Do this: For any process/installation/guide page, add HowTo JSON-LD with numbered steps.
6. **[GEO] Semantic HTML landmarks**
   - Problem: Only found: main
   - Do this: Wrap content in <main> and <article> and use <nav>. Landmarks help extraction pipelines isolate the real content from the chrome.
7. **[TECHNICAL] Cache headers**
   - Problem: No cache-control header on the HTML response
   - Do this: Add Cache-Control and an ETag so repeat visits and crawls are cheap.
8. **[TECHNICAL] Render-blocking head resources**
   - Problem: Several (11 files)
   - Do this: Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint.

## 8. All checks in detail

### SEO — Search Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Page is indexable | ✅ PASS | meta robots: 'index,follow' | — |
| Canonical tag | ✅ PASS | https://sitechecker.pro/ (self-referencing site) | — |
| Title tag length | ⚠️ WARN | Slightly long (61 chars) | Keep titles 30-60 characters so they are not truncated in the SERP. Front-load the primary keyword. |
| Meta description length | ✅ PASS | Good length (134 chars) | — |
| Exactly one H1 | ✅ PASS | H1: SEO & AI visibility analyticsfor agencies | — |
| Heading hierarchy | ⚠️ WARN | 1 level jump(s), e.g. H2 -> H4 | Do not skip heading levels. Outline the page H1 > H2 > H3 so search engines and AI can parse the structure. |
| Keyword alignment | ⚠️ WARN | 'visibility' only appears in: H1 | Put the primary keyword in the title, the H1, the URL slug and the first 100 words. |
| Internal links in body | ✅ PASS | Good internal linking (79 links) | — |
| Navigational links | ℹ️ INFO | 27 links inside <nav>/<header> | — |
| Outbound links | ✅ PASS | 12 external links, 5 nofollow | — |
| Image alt text | ❌ FAIL | Most images missing alt (35.4% missing) | Write descriptive alt text for every image — it feeds image search, accessibility and AI understanding. |
| Open Graph tags | ✅ PASS | og:title, og:description, og:image present | — |
| Structured data present | ✅ PASS | 8 type(s): AggregateRating, Organization, Person, Product, Rating, Review, SearchAction, WebSite | — |
| URL structure | ✅ PASS | Clean, lowercase, descriptive | — |
| Resolved URL | ℹ️ INFO | https://sitechecker.pro/ | — |
| Trust pages exist | ⚠️ WARN | Found: About page, Contact page, Privacy policy, Terms of service, Blog / news section, Shipping policy, FAQ page \| Missing: Returns / refund policy | Add the remaining policy/FAQ pages. |
| hreflang tags | ℹ️ INFO | 17 alternate language versions declared | — |

### Technical SEO

| Check | Status | Detail | Fix |
|---|---|---|---|
| HTTPS enabled | ✅ PASS | Served over HTTPS from sitechecker.pro | — |
| http redirects to https | ✅ PASS | http:// -> https://sitechecker.pro/ | — |
| One canonical hostname | ✅ PASS | https://www.sitechecker.pro/ -> https://sitechecker.pro (good) | — |
| Server response time | ✅ PASS | Fast (0.7s) | — |
| HTML page weight | ✅ PASS | Lean (25.7 KB) | — |
| Text compression | ✅ PASS | content-encoding: gzip | — |
| Render-blocking head resources | ⚠️ WARN | Several (11 files) | Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint. |
| Cache headers | ⚠️ WARN | No cache-control header on the HTML response | Add Cache-Control and an ETag so repeat visits and crawls are cheap. |
| Content present in the served HTML | ✅ PASS | 315 words of visible text are in the HTML response | — |
| robots.txt present | ✅ PASS | HTTP 200, 13 sitemap directive(s) | — |
| XML sitemap | ✅ PASS | https://sitechecker.pro/sitemap_index.xml — 1083 URLs across 3 child sitemaps | — |
| Mobile viewport | ✅ PASS | viewport: width=device-width, initial-scale=1 | — |
| Language declared | ✅ PASS | html lang="en" | — |
| Broken internal links | ⏭️ SKIP | No internal links were sampled | — |

### Content

| Check | Status | Detail | Fix |
|---|---|---|---|
| Subheadings (H2) | ✅ PASS | Well structured (5 H2s) | — |
| Content depth | ⚠️ WARN | Thin-ish (315 words) | Expand to at least 600 words of genuinely useful detail. Cover the questions a buyer asks before purchasing. |
| Primary topic detected | ✅ PASS | 'visibility' (from title/H1/URL) | — |
| Text-to-HTML ratio | ❌ FAIL | Very low (code-heavy page) (1.1%) | Reduce markup around the content: fewer wrapper divs, less inline CSS/JS. |

### AEO — Answer Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| FAQPage schema | ❌ FAIL | No FAQPage schema | Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change. |
| HowTo schema | ⚠️ WARN | No HowTo schema (only needed if you publish step-by-step guides) | For any process/installation/guide page, add HowTo JSON-LD with numbered steps. |
| Q&A schema | ℹ️ INFO | No QAPage/Question schema (optional) | — |
| Speakable schema | ℹ️ INFO | No speakable markup (optional, voice-assistant only) | — |
| Question-form headings | ❌ FAIL | No question headings (1 questions) | Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from. |
| Answers are 40-60 words | ❌ FAIL | Answers are the wrong length (0.0% of answers) | Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot. |
| Definition-style openers | ⚠️ WARN | No answer opens with a definition | Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern. |
| Bulleted / numbered lists | ✅ PASS | 4 list(s) found | — |
| Tables for comparison | ⚠️ WARN | No tables on the page | Add at least one comparison or specification table. Tables are prime snippet and AI-summary material. |
| Descriptive headings | ✅ PASS | Headings are descriptive (0.0% vague) | — |
| Sentence length | ❌ FAIL | Sentences too long (39.38 words/sentence) | Split long sentences. Answers get quoted when they are short and self-contained. |
| Answer-first intro | ⚠️ WARN | First paragraph is 6 words | Open with a 40-60 word paragraph that directly answers the page's main question, then expand. |
| Summary / key-takeaways block | ✅ PASS | A summary-style section is present | — |
| BreadcrumbList schema | ℹ️ INFO | No BreadcrumbList schema | — |

### GEO — Generative Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Content readable without JavaScript | ✅ PASS | 315 words are present in the raw HTML response | — |
| AI crawlers allowed | ✅ PASS | No AI crawler is blocked. Allowed: gptbot, chatgpt-user, oai-searchbot, claudebot, anthropic-ai, claude-web, perplexitybot, perplexity-user | — |
| Cites authoritative sources | ✅ PASS | 3 outbound links to authority domains (www.linkedin.com, www.reddit.com, www.youtube.com) | — |
| Quantitative facts | ⚠️ WARN | Few numbers (1.59 stats/100 words) | Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives. |
| Named author | ⚠️ WARN | No author byline found | Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh. |
| Person schema | ✅ PASS | Person JSON-LD found | — |
| Organization / LocalBusiness schema | ✅ PASS | Found: organization, website with sameAs | — |
| Entity-rich content | ✅ PASS | Entity-rich (35.56 proper nouns/100 words) | — |
| Publish / update dates | ⚠️ WARN | No datePublished / dateModified found | Add visible and machine-readable publish and last-updated dates. |
| Content type schema | ✅ PASS | Found: product | — |
| Machine-parseable formatting | ✅ PASS | 0 table(s), 4 list(s) | — |
| Q&A pairs for summarisation | ✅ PASS | 1 question/answer pair(s) | — |
| llms.txt | ℹ️ INFO | No /llms.txt (optional; the convention is still emerging, low cost to add: a markdown index of your key pages) | — |
| E-E-A-T surface area | ✅ PASS | Trust pages found: 7/8 | — |
| Semantic HTML landmarks | ⚠️ WARN | Only found: main | Wrap content in <main> and <article> and use <nav>. Landmarks help extraction pipelines isolate the real content from the chrome. |
| Quotable sentence length | ❌ FAIL | Too long to quote (39.38 words/sentence) | Keep sentences under 22 words. AI engines quote self-contained sentences, not sprawling ones. |
| Third-party presence (Reddit, Quora, industry sites) | ℹ️ INFO | Not auto-checked — this tool does not query reddit/quora without a SERP key. AI engines lean on sources they have already seen discussed elsewhere. | Manually search `<brand> site:reddit.com`, `<brand> site:quora.com` and your top 3 industry publications. If nothing comes up, that is your GEO gap: contribute genuine answers and get listed in industry directories and comparison articles. |

## 9. Evidence collected

### On-page facts

| Item | Value |
|---|---|
| Title | The SEO command center for agencies managing 10+ client sites (61 chars) |
| Meta description | Monitor all important SEO metrics for dozens of sites in one dashboard. Without any additional fees for invited users and data export. (134 chars) |
| H1 | SEO & AI visibility analyticsfor agencies |
| Headings | hh1=1, hh2=5, hh3=5, hh4=1, hh5=0, hh6=0 |
| Word count | 315 |
| Internal / external links | 106 / 12 |
| Authority citations | 3 |
| Images (missing alt) | 65 (23) |
| Schema types | AggregateRating, Organization, Person, Product, Rating, Review, SearchAction, WebSite |
| Tables / lists | 0 / 4 |
| Q&A blocks (40-60 words) | 1 (0) |
| Author | (none) |
| Dates | (none) |
| Stats per 100 words | 1.59 |
| Avg sentence length | 39.38 words |
| Text/HTML ratio | 1.1% |
| Canonical | https://sitechecker.pro/ |
| Meta robots | index,follow |
| Viewport | width=device-width, initial-scale=1 |

### Site-level facts

| Item | Value |
|---|---|
| Response time | 0.70s |
| Server | (unknown) |
| CDN | not detected |
| Compression | gzip |
| HTTP → HTTPS | https://sitechecker.pro/ |
| www variant | https://www.sitechecker.pro/ -> https://sitechecker.pro (good) |
| robots.txt | HTTP 200 (1 groups) |
| AI crawlers blocked | none 🎉 |
| Sitemap | https://sitechecker.pro/sitemap_index.xml — 1083 URLs |
| llms.txt | absent |
| Missing security headers | x-content-type-options, x-frame-options, content-security-policy, referrer-policy, permissions-policy |
| Broken links found | 0 of 0 sampled |
| Trust pages | {"about": 200, "contact": 200, "privacy": 200, "terms": 200, "blog": 200, "shipping": 200, "returns": 0, "faq": 200} |

## 10. Caveats and limits

- Every third-party metric (authority score, traffic, search volume) is an **estimate** from that vendor's own index, not Google's data. Google Search Console is the only source of truth for your own site.
- Authority scores from different vendors are **different scales**. An Open PageRank score of 6/10 is not 'DR 60' and the two must never be merged into one column.
- Domain Rating / Authority Score is a **third-party link metric**. It does not guarantee ranking, and a low score does not prevent ranking.
- This tool does not use shared or group-buy tool accounts. That breaches vendor terms of service and exposes client data.
- It does not scrape Google's HTML results. SERP data comes from a paid API if a key is supplied, otherwise competitors must be passed in with `--competitors`.

---

_Generated by seo-tool on 2026-10-15 13:40 UTC._