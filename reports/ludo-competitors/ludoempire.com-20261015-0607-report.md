# SEO / AEO / GEO Research Report

**Target:** https://ludoempire.com/  
**Generated:** 2026-10-15 13:07 UTC  
**Tool:** seo-tool (SEO + AEO + GEO auditor)

---

## 1. Scoreboard

| Discipline | Score | Grade | What it covers |
|---|---|---|---|
| **SEO** — Search Engine Optimisation | 87.5/100 | B | Ranking pages on Google: keywords, on-page, technical, internal links |
| **AEO** — Answer Engine Optimisation | 51.3/100 | E | Featured snippets, People Also Ask, voice answers |
| **GEO** — Generative Engine Optimisation | 73.1/100 | C | Being cited or summarised by ChatGPT, Perplexity, Gemini, AI Overviews |
| **Overall** | **70.6/100** | **C** |  |

Checks run: **65** — 37 pass, 15 warnings, 6 failures, 6 informational, 1 skipped.

## 2. Executive summary

**Top problems, highest impact first:**

- **[AEO] FAQPage schema** — No FAQPage schema
  - *Fix:* Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change.
- **[AEO] Answers are 40-60 words** — Answers are the wrong length (0.0% of answers)
  - *Fix:* Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot.
- **[GEO] Organization / LocalBusiness schema** — No Organization or LocalBusiness schema
  - *Fix:* Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand.
- **[CONTENT] Content depth** — Thin content (185 words)
  - *Fix:* Expand to at least 600 words of genuinely useful detail. Cover the questions a buyer asks before purchasing.
- **[SEO] Structured data present** — No JSON-LD or microdata found
  - *Fix:* Add JSON-LD: Organization on the homepage, Product/Service on offer pages, BreadcrumbList sitewide, Article on blog posts.
- **[TECHNICAL] One canonical hostname** — Both ludoempire.com and www.ludoempire.com return 200
  - *Fix:* Pick one (usually https://www or https://apex), 301 the other to it, and make sure the canonical tag matches.

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
3. **[GEO] Organization / LocalBusiness schema**
   - Problem: No Organization or LocalBusiness schema
   - Do this: Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand.

### P1 — Quick wins

Low effort, clear payoff, mostly on-page markup and copy edits.

1. **[GEO] Cites authoritative sources**
   - Problem: Only 1 authority citation(s): www.linkedin.com
   - Do this: Link to 3+ credible sources (industry data, government, research, manufacturer specs). AI engines preferentially cite content that itself cites sources.
2. **[AEO] Question-form headings**
   - Problem: Some questions covered (2 questions)
   - Do this: Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
3. **[GEO] Quantitative facts**
   - Problem: Few numbers (1.08 stats/100 words)
   - Do this: Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives.
4. **[GEO] Person schema**
   - Problem: No Person schema
   - Do this: Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity.
5. **[GEO] Content type schema**
   - Problem: No Article / Product / Service schema
   - Do this: Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question.
6. **[GEO] Publish / update dates**
   - Problem: No datePublished / dateModified found
   - Do this: Add visible and machine-readable publish and last-updated dates.
7. **[SEO] Internal links in body**
   - Problem: Sparse (5 links)
   - Do this: Add contextual internal links from this page to related products, categories and guides. Internal links spread authority and help crawlers.
8. **[TECHNICAL] Server response time**
   - Problem: Acceptable (0.83s)
   - Do this: Target under 0.8s. Enable full-page caching, upgrade the host, and put Cloudflare in front.
9. **[SEO] Structured data present**
   - Problem: No JSON-LD or microdata found
   - Do this: Add JSON-LD: Organization on the homepage, Product/Service on offer pages, BreadcrumbList sitewide, Article on blog posts.
10. **[CONTENT] Content depth**
   - Problem: Thin content (185 words)
   - Do this: Expand to at least 600 words of genuinely useful detail. Cover the questions a buyer asks before purchasing.
11. **[TECHNICAL] One canonical hostname**
   - Problem: Both ludoempire.com and www.ludoempire.com return 200
   - Do this: Pick one (usually https://www or https://apex), 301 the other to it, and make sure the canonical tag matches.

### P2 — Nice to have

Do these after P0 and P1.

1. **[AEO] Definition-style openers**
   - Problem: No answer opens with a definition
   - Do this: Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern.
2. **[AEO] Descriptive headings**
   - Problem: Some vague headings (16.7% vague)
   - Do this: Rename vague headings to the exact question or topic a customer would search.
3. **[AEO] Tables for comparison**
   - Problem: No tables on the page
   - Do this: Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.
4. **[AEO] HowTo schema**
   - Problem: No HowTo schema (only needed if you publish step-by-step guides)
   - Do this: For any process/installation/guide page, add HowTo JSON-LD with numbered steps.
5. **[GEO] Semantic HTML landmarks**
   - Problem: Only found: none
   - Do this: Wrap content in <main> and <article> and use <nav>. Landmarks help extraction pipelines isolate the real content from the chrome.
6. **[TECHNICAL] Language declared**
   - Problem: No lang attribute on <html>
   - Do this: Add lang="en" (or the correct language) — it helps both search and screen readers.
7. **[CONTENT] Text-to-HTML ratio**
   - Problem: Low (8.2%)
   - Do this: Reduce markup around the content: fewer wrapper divs, less inline CSS/JS.

## 8. All checks in detail

### SEO — Search Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Page is indexable | ✅ PASS | meta robots: 'index, follow' | — |
| Canonical tag | ✅ PASS | https://ludoempire.com/ (self-referencing site) | — |
| Title tag length | ✅ PASS | Good length (57 chars) | — |
| Meta description length | ✅ PASS | Good length (154 chars) | — |
| Exactly one H1 | ✅ PASS | H1: Welcome to the | — |
| Heading hierarchy | ✅ PASS | No skipped heading levels | — |
| Keyword alignment | ✅ PASS | 'ludo' appears in: title, URL, first paragraph | — |
| Internal links in body | ⚠️ WARN | Sparse (5 links) | Add contextual internal links from this page to related products, categories and guides. Internal links spread authority and help crawlers. |
| Navigational links | ℹ️ INFO | 0 links inside <nav>/<header> | — |
| Outbound links | ✅ PASS | 4 external links, 0 nofollow | — |
| Image alt text | ✅ PASS | Good alt coverage (0.0% missing) | — |
| Open Graph tags | ✅ PASS | og:title, og:description, og:image present | — |
| Structured data present | ❌ FAIL | No JSON-LD or microdata found | Add JSON-LD: Organization on the homepage, Product/Service on offer pages, BreadcrumbList sitewide, Article on blog posts. |
| URL structure | ✅ PASS | Clean, lowercase, descriptive | — |
| Resolved URL | ℹ️ INFO | https://ludoempire.com/ | — |
| Trust pages exist | ✅ PASS | Found: About page, Contact page, Privacy policy, Terms of service, Blog / news section, Shipping policy, Returns / refund policy, FAQ page | — |

### Technical SEO

| Check | Status | Detail | Fix |
|---|---|---|---|
| HTTPS enabled | ✅ PASS | Served over HTTPS from ludoempire.com | — |
| http redirects to https | ✅ PASS | http:// -> https://ludoempire.com/ | — |
| One canonical hostname | ❌ FAIL | Both ludoempire.com and www.ludoempire.com return 200 | Pick one (usually https://www or https://apex), 301 the other to it, and make sure the canonical tag matches. |
| Server response time | ⚠️ WARN | Acceptable (0.83s) | Target under 0.8s. Enable full-page caching, upgrade the host, and put Cloudflare in front. |
| HTML page weight | ✅ PASS | Lean (3.9 KB) | — |
| Text compression | ✅ PASS | content-encoding: gzip | — |
| Render-blocking head resources | ✅ PASS | Few (1 files) | — |
| Cache headers | ✅ PASS | cache-control: public, max-age=0, must-revalidate | — |
| Content present in the served HTML | ✅ PASS | 185 words of visible text are in the HTML response | — |
| robots.txt present | ✅ PASS | HTTP 200, 1 sitemap directive(s) | — |
| XML sitemap | ✅ PASS | https://ludoempire.com/sitemap.xml — 3 URLs | — |
| Mobile viewport | ✅ PASS | viewport: width=device-width,initial-scale=1.0 | — |
| Language declared | ⚠️ WARN | No lang attribute on <html> | Add lang="en" (or the correct language) — it helps both search and screen readers. |
| Broken internal links | ⏭️ SKIP | No internal links were sampled | — |

### Content

| Check | Status | Detail | Fix |
|---|---|---|---|
| Subheadings (H2) | ✅ PASS | Well structured (4 H2s) | — |
| Content depth | ❌ FAIL | Thin content (185 words) | Expand to at least 600 words of genuinely useful detail. Cover the questions a buyer asks before purchasing. |
| Primary topic detected | ✅ PASS | 'ludo' (from title/H1/URL) | — |
| Text-to-HTML ratio | ⚠️ WARN | Low (8.2%) | Reduce markup around the content: fewer wrapper divs, less inline CSS/JS. |

### AEO — Answer Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| FAQPage schema | ❌ FAIL | No FAQPage schema | Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change. |
| HowTo schema | ⚠️ WARN | No HowTo schema (only needed if you publish step-by-step guides) | For any process/installation/guide page, add HowTo JSON-LD with numbered steps. |
| Q&A schema | ℹ️ INFO | No QAPage/Question schema (optional) | — |
| Speakable schema | ℹ️ INFO | No speakable markup (optional, voice-assistant only) | — |
| Question-form headings | ⚠️ WARN | Some questions covered (2 questions) | Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from. |
| Answers are 40-60 words | ❌ FAIL | Answers are the wrong length (0.0% of answers) | Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot. |
| Definition-style openers | ⚠️ WARN | No answer opens with a definition | Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern. |
| Bulleted / numbered lists | ✅ PASS | 1 list(s) found | — |
| Tables for comparison | ⚠️ WARN | No tables on the page | Add at least one comparison or specification table. Tables are prime snippet and AI-summary material. |
| Descriptive headings | ⚠️ WARN | Some vague headings (16.7% vague) | Rename vague headings to the exact question or topic a customer would search. |
| Sentence length | ✅ PASS | Easy to quote (9 sentences analysed) (14.67 words/sentence) | — |
| Answer-first intro | ✅ PASS | First paragraph is 33 words — good for an intro snippet | — |
| Summary / key-takeaways block | ✅ PASS | A summary-style section is present | — |
| BreadcrumbList schema | ℹ️ INFO | No BreadcrumbList schema | — |

### GEO — Generative Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Content readable without JavaScript | ✅ PASS | 185 words are present in the raw HTML response | — |
| AI crawlers allowed | ✅ PASS | No AI crawler is blocked. Allowed: gptbot, chatgpt-user, oai-searchbot, claudebot, anthropic-ai, claude-web, perplexitybot, perplexity-user | — |
| Cites authoritative sources | ⚠️ WARN | Only 1 authority citation(s): www.linkedin.com | Link to 3+ credible sources (industry data, government, research, manufacturer specs). AI engines preferentially cite content that itself cites sources. |
| Quantitative facts | ⚠️ WARN | Few numbers (1.08 stats/100 words) | Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives. |
| Named author | ✅ PASS | Author: Mritunjay Kumar Yadav | — |
| Person schema | ⚠️ WARN | No Person schema | Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity. |
| Organization / LocalBusiness schema | ❌ FAIL | No Organization or LocalBusiness schema | Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand. |
| Entity-rich content | ✅ PASS | Entity-rich (43.24 proper nouns/100 words) | — |
| Publish / update dates | ⚠️ WARN | No datePublished / dateModified found | Add visible and machine-readable publish and last-updated dates. |
| Content type schema | ⚠️ WARN | No Article / Product / Service schema | Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question. |
| Machine-parseable formatting | ✅ PASS | 0 table(s), 1 list(s) | — |
| Q&A pairs for summarisation | ✅ PASS | 2 question/answer pair(s) | — |
| llms.txt | ✅ PASS | Found (3970 bytes) — an emerging convention for telling AI crawlers what matters | — |
| E-E-A-T surface area | ✅ PASS | Trust pages found: 8/8 | — |
| Semantic HTML landmarks | ⚠️ WARN | Only found: none | Wrap content in <main> and <article> and use <nav>. Landmarks help extraction pipelines isolate the real content from the chrome. |
| Quotable sentence length | ✅ PASS | Easily quotable (14.67 words/sentence) | — |
| Third-party presence (Reddit, Quora, industry sites) | ℹ️ INFO | Not auto-checked — this tool does not query reddit/quora without a SERP key. AI engines lean on sources they have already seen discussed elsewhere. | Manually search `<brand> site:reddit.com`, `<brand> site:quora.com` and your top 3 industry publications. If nothing comes up, that is your GEO gap: contribute genuine answers and get listed in industry directories and comparison articles. |

## 9. Evidence collected

### On-page facts

| Item | Value |
|---|---|
| Title | Play Ludo Online for Free- Multiplayer Game \| Ludo Empire (57 chars) |
| Meta description | Play Ludo online for free with the Ludo Empire App! Enjoy exciting multiplayer matches, compete with friends & family. Win real rewards. Join the fun now! (154 chars) |
| H1 | Welcome to the |
| Headings | hh1=1, hh2=4, hh3=1, hh4=0, hh5=0, hh6=0 |
| Word count | 185 |
| Internal / external links | 5 / 4 |
| Authority citations | 1 |
| Images (missing alt) | 14 (0) |
| Schema types | (none) |
| Tables / lists | 0 / 1 |
| Q&A blocks (40-60 words) | 2 (0) |
| Author | Mritunjay Kumar Yadav |
| Dates | (none) |
| Stats per 100 words | 1.08 |
| Avg sentence length | 14.67 words |
| Text/HTML ratio | 8.2% |
| Canonical | https://ludoempire.com/ |
| Meta robots | index, follow |
| Viewport | width=device-width,initial-scale=1.0 |

### Site-level facts

| Item | Value |
|---|---|
| Response time | 0.83s |
| Server | cloudflare |
| CDN | Cloudflare |
| Compression | gzip |
| HTTP → HTTPS | https://ludoempire.com/ |
| www variant | https://www.ludoempire.com/ serves its own 200 (both variants live) |
| robots.txt | HTTP 200 (1 groups) |
| AI crawlers blocked | none 🎉 |
| Sitemap | https://ludoempire.com/sitemap.xml — 3 URLs |
| llms.txt | present |
| Missing security headers | strict-transport-security, x-frame-options, content-security-policy, permissions-policy |
| Broken links found | 0 of 0 sampled |
| Trust pages | {"about": 200, "contact": 200, "privacy": 200, "terms": 200, "blog": 200, "shipping": 200, "returns": 200, "faq": 200} |

## 10. Caveats and limits

- Every third-party metric (authority score, traffic, search volume) is an **estimate** from that vendor's own index, not Google's data. Google Search Console is the only source of truth for your own site.
- Authority scores from different vendors are **different scales**. An Open PageRank score of 6/10 is not 'DR 60' and the two must never be merged into one column.
- Domain Rating / Authority Score is a **third-party link metric**. It does not guarantee ranking, and a low score does not prevent ranking.
- This tool does not use shared or group-buy tool accounts. That breaches vendor terms of service and exposes client data.
- It does not scrape Google's HTML results. SERP data comes from a paid API if a key is supplied, otherwise competitors must be passed in with `--competitors`.

---

_Generated by seo-tool on 2026-10-15 13:07 UTC._