# SEO / AEO / GEO Research Report

**Target:** https://www.crazygames.com/game/ludo-king  
**Generated:** 2026-10-15 13:07 UTC  
**Tool:** seo-tool (SEO + AEO + GEO auditor)

---

## 1. Scoreboard

| Discipline | Score | Grade | What it covers |
|---|---|---|---|
| **SEO** — Search Engine Optimisation | 89.6/100 | B | Ranking pages on Google: keywords, on-page, technical, internal links |
| **AEO** — Answer Engine Optimisation | 69.0/100 | D | Featured snippets, People Also Ask, voice answers |
| **GEO** — Generative Engine Optimisation | 97.0/100 | A | Being cited or summarised by ChatGPT, Perplexity, Gemini, AI Overviews |
| **Overall** | **85.2/100** | **B** |  |

Checks run: **68** — 46 pass, 12 warnings, 3 failures, 6 informational, 1 skipped.

## 2. Executive summary

**Top problems, highest impact first:**

- **[AEO] Answers are 40-60 words** — Answers are the wrong length (0.0% of answers)
  - *Fix:* Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot.
- **[TECHNICAL] Render-blocking head resources** — Too many (31 files)
  - *Fix:* Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint.
- **[CONTENT] Text-to-HTML ratio** — Very low (code-heavy page) (2.5%)
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

1. **[AEO] Answers are 40-60 words**
   - Problem: Answers are the wrong length (0.0% of answers)
   - Do this: Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot.

### P1 — Quick wins

Low effort, clear payoff, mostly on-page markup and copy edits.

1. **[AEO] Question-form headings**
   - Problem: Some questions covered (4 questions)
   - Do this: Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
2. **[GEO] Content type schema**
   - Problem: No Article / Product / Service schema
   - Do this: Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question.
3. **[SEO] Trust pages exist**
   - Problem: Found: About page, Contact page, Privacy policy, Terms of service, Blog / news section | Missing: Shipping policy, Returns / refund policy, FAQ page
   - Do this: Add the remaining policy/FAQ pages.
4. **[TECHNICAL] Render-blocking head resources**
   - Problem: Too many (31 files)
   - Do this: Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint.
5. **[CONTENT] Text-to-HTML ratio**
   - Problem: Very low (code-heavy page) (2.5%)
   - Do this: Reduce markup around the content: fewer wrapper divs, less inline CSS/JS.

### P2 — Nice to have

Do these after P0 and P1.

1. **[AEO] Answer-first intro**
   - Problem: First paragraph is 1 words
   - Do this: Open with a 40-60 word paragraph that directly answers the page's main question, then expand.
2. **[AEO] Definition-style openers**
   - Problem: No answer opens with a definition
   - Do this: Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern.
3. **[AEO] Tables for comparison**
   - Problem: No tables on the page
   - Do this: Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.
4. **[SEO] Image alt text**
   - Problem: Some images missing alt (25.0% missing)
   - Do this: Write descriptive alt text for every image — it feeds image search, accessibility and AI understanding.
5. **[SEO] Meta description length**
   - Problem: Long (172 chars)
   - Do this: Keep it 120-160 characters.
6. **[CONTENT] Subheadings (H2)**
   - Problem: Few subheadings (3 H2s)
   - Do this: Break the page into H2 sections. Long unbroken text is hard to scan and hard for AI to quote.
7. **[AEO] HowTo schema**
   - Problem: No HowTo schema (only needed if you publish step-by-step guides)
   - Do this: For any process/installation/guide page, add HowTo JSON-LD with numbered steps.
8. **[TECHNICAL] Language declared**
   - Problem: No lang attribute on <html>
   - Do this: Add lang="en" (or the correct language) — it helps both search and screen readers.
9. **[TECHNICAL] Sitemap lastmod dates**
   - Problem: No <lastmod> values found in the sitemap
   - Do this: Add accurate <lastmod> dates so crawlers can prioritise changed pages.

## 8. All checks in detail

### SEO — Search Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Page is indexable | ✅ PASS | meta robots: 'max-image-preview:large' | — |
| Canonical tag | ✅ PASS | https://www.crazygames.com/game/ludo-king (self-referencing site) | — |
| Title tag length | ✅ PASS | Good length (30 chars) | — |
| Meta description length | ⚠️ WARN | Long (172 chars) | Keep it 120-160 characters. |
| Exactly one H1 | ✅ PASS | H1: Ludo King | — |
| Heading hierarchy | ✅ PASS | No skipped heading levels | — |
| Keyword alignment | ✅ PASS | 'ludo' appears in: title, H1, URL | — |
| Internal links in body | ✅ PASS | Good internal linking (12 links) | — |
| Navigational links | ℹ️ INFO | 34 links inside <nav>/<header> | — |
| Outbound links | ✅ PASS | 9 external links, 3 nofollow | — |
| Image alt text | ⚠️ WARN | Some images missing alt (25.0% missing) | Write descriptive alt text for every image — it feeds image search, accessibility and AI understanding. |
| Open Graph tags | ✅ PASS | og:title, og:description, og:image present | — |
| Structured data present | ✅ PASS | 26 type(s): AggregateRating, Answer, Brand, BreadcrumbList, ContactPoint, DislikeAction, EntryPoint, FAQPage | — |
| URL structure | ✅ PASS | Clean, lowercase, descriptive | — |
| Resolved URL | ℹ️ INFO | https://www.crazygames.com/game/ludo-king | — |
| Trust pages exist | ⚠️ WARN | Found: About page, Contact page, Privacy policy, Terms of service, Blog / news section \| Missing: Shipping policy, Returns / refund policy, FAQ page | Add the remaining policy/FAQ pages. |
| hreflang tags | ℹ️ INFO | 26 alternate language versions declared | — |

### Technical SEO

| Check | Status | Detail | Fix |
|---|---|---|---|
| HTTPS enabled | ✅ PASS | Served over HTTPS from www.crazygames.com | — |
| http redirects to https | ✅ PASS | http:// -> https://www.crazygames.com:443/ | — |
| One canonical hostname | ✅ PASS | https://crazygames.com/ -> https://www.crazygames.com (good) | — |
| Server response time | ✅ PASS | Fast (0.55s) | — |
| HTML page weight | ✅ PASS | Lean (36.9 KB) | — |
| Text compression | ✅ PASS | content-encoding: gzip | — |
| Render-blocking head resources | ❌ FAIL | Too many (31 files) | Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint. |
| Cache headers | ✅ PASS | cache-control: public, max-age=0, stale-if-error=1800 | — |
| Content present in the served HTML | ✅ PASS | 727 words of visible text are in the HTML response | — |
| robots.txt present | ✅ PASS | HTTP 200, 1 sitemap directive(s) | — |
| XML sitemap | ✅ PASS | https://www.crazygames.com/sitemap-index.xml — 5209 URLs across 25 child sitemaps | — |
| Sitemap lastmod dates | ⚠️ WARN | No <lastmod> values found in the sitemap | Add accurate <lastmod> dates so crawlers can prioritise changed pages. |
| Mobile viewport | ✅ PASS | viewport: initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, width=device-width, hei | — |
| Language declared | ⚠️ WARN | No lang attribute on <html> | Add lang="en" (or the correct language) — it helps both search and screen readers. |
| Broken internal links | ⏭️ SKIP | No internal links were sampled | — |

### Content

| Check | Status | Detail | Fix |
|---|---|---|---|
| Subheadings (H2) | ⚠️ WARN | Few subheadings (3 H2s) | Break the page into H2 sections. Long unbroken text is hard to scan and hard for AI to quote. |
| Content depth | ✅ PASS | Substantial (727 words) | — |
| Primary topic detected | ✅ PASS | 'ludo' (from title/H1/URL) | — |
| Text-to-HTML ratio | ❌ FAIL | Very low (code-heavy page) (2.5%) | Reduce markup around the content: fewer wrapper divs, less inline CSS/JS. |

### AEO — Answer Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| FAQPage schema | ✅ PASS | FAQPage JSON-LD found — eligible for FAQ rich results and easy for AI to quote | — |
| HowTo schema | ⚠️ WARN | No HowTo schema (only needed if you publish step-by-step guides) | For any process/installation/guide page, add HowTo JSON-LD with numbered steps. |
| Q&A schema | ✅ PASS | Found: answer, question | — |
| Speakable schema | ℹ️ INFO | No speakable markup (optional, voice-assistant only) | — |
| Question-form headings | ⚠️ WARN | Some questions covered (4 questions) | Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from. |
| Answers are 40-60 words | ❌ FAIL | Answers are the wrong length (0.0% of answers) | Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot. |
| Definition-style openers | ⚠️ WARN | No answer opens with a definition | Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern. |
| Bulleted / numbered lists | ✅ PASS | 5 list(s) found | — |
| Tables for comparison | ⚠️ WARN | No tables on the page | Add at least one comparison or specification table. Tables are prime snippet and AI-summary material. |
| Descriptive headings | ✅ PASS | Headings are descriptive (0.0% vague) | — |
| Sentence length | ✅ PASS | Easy to quote (26 sentences analysed) (15.85 words/sentence) | — |
| Answer-first intro | ⚠️ WARN | First paragraph is 1 words | Open with a 40-60 word paragraph that directly answers the page's main question, then expand. |
| Summary / key-takeaways block | ✅ PASS | A summary-style section is present | — |
| BreadcrumbList schema | ✅ PASS | Breadcrumbs declared — improves SERP display | — |

### GEO — Generative Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Content readable without JavaScript | ✅ PASS | 727 words are present in the raw HTML response | — |
| AI crawlers allowed | ✅ PASS | No AI crawler is blocked. Allowed: gptbot, chatgpt-user, oai-searchbot, claudebot, anthropic-ai, claude-web, perplexitybot, perplexity-user | — |
| Cites authoritative sources | ✅ PASS | 3 outbound links to authority domains (en.wikipedia.org, www.linkedin.com, www.youtube.com) | — |
| Quantitative facts | ✅ PASS | Good density of numbers (3.16 stats/100 words) | — |
| Named author | ✅ PASS | Author: Gametion Global | — |
| Person schema | ✅ PASS | Person JSON-LD found | — |
| Organization / LocalBusiness schema | ✅ PASS | Found: organization, website with sameAs | — |
| Entity-rich content | ✅ PASS | Entity-rich (21.46 proper nouns/100 words) | — |
| Publish / update dates | ✅ PASS | published=2023-08-18 modified=2026-05-07 | — |
| Content freshness | ✅ PASS | Updated within a year (161 days since update) | — |
| Content type schema | ⚠️ WARN | No Article / Product / Service schema | Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question. |
| Machine-parseable formatting | ✅ PASS | 0 table(s), 5 list(s) | — |
| Q&A pairs for summarisation | ✅ PASS | 4 question/answer pair(s) | — |
| llms.txt | ℹ️ INFO | No /llms.txt (optional; the convention is still emerging, low cost to add: a markdown index of your key pages) | — |
| E-E-A-T surface area | ✅ PASS | Trust pages found: 5/8 | — |
| Semantic HTML landmarks | ✅ PASS | Using: <main>, <nav> | — |
| Quotable sentence length | ✅ PASS | Easily quotable (15.85 words/sentence) | — |
| Third-party presence (Reddit, Quora, industry sites) | ℹ️ INFO | Not auto-checked — this tool does not query reddit/quora without a SERP key. AI engines lean on sources they have already seen discussed elsewhere. | Manually search `<brand> site:reddit.com`, `<brand> site:quora.com` and your top 3 industry publications. If nothing comes up, that is your GEO gap: contribute genuine answers and get listed in industry directories and comparison articles. |

## 9. Evidence collected

### On-page facts

| Item | Value |
|---|---|
| Title | Ludo King 🎲 Play on CrazyGames (30 chars) |
| Meta description | Ludo KingTM is a classic board game also known as Pachisi or Parcheesi. The objective of the game is to bring all of your four colored tokens to the designated  (172 chars) |
| H1 | Ludo King |
| Headings | hh1=1, hh2=3, hh3=13, hh4=0, hh5=0, hh6=0 |
| Word count | 727 |
| Internal / external links | 46 / 9 |
| Authority citations | 3 |
| Images (missing alt) | 4 (1) |
| Schema types | AggregateRating, Answer, Brand, BreadcrumbList, ContactPoint, DislikeAction, EntryPoint, FAQPage, ImageObject, InteractionCounter, ItemPage, LikeAction, ListItem, MobileApplication, Offer, Organization, Person, PlayAction, PostalAddress, Question, SearchAction, Thing, VideoGame, VideoObject, WebApplication, WebSite |
| Tables / lists | 0 / 5 |
| Q&A blocks (40-60 words) | 4 (0) |
| Author | Gametion Global |
| Dates | {"published": "2023-08-18", "modified": "2026-05-07"} |
| Stats per 100 words | 3.16 |
| Avg sentence length | 15.85 words |
| Text/HTML ratio | 2.5% |
| Canonical | https://www.crazygames.com/game/ludo-king |
| Meta robots | max-image-preview:large |
| Viewport | initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, wid |

### Site-level facts

| Item | Value |
|---|---|
| Response time | 0.55s |
| Server | cloudflare |
| CDN | Cloudflare |
| Compression | gzip |
| HTTP → HTTPS | https://www.crazygames.com:443/ |
| www variant | https://crazygames.com/ -> https://www.crazygames.com (good) |
| robots.txt | HTTP 200 (2 groups) |
| AI crawlers blocked | none 🎉 |
| Sitemap | https://www.crazygames.com/sitemap-index.xml — 5209 URLs |
| llms.txt | absent |
| Missing security headers | content-security-policy, referrer-policy, permissions-policy |
| Broken links found | 0 of 0 sampled |
| Trust pages | {"about": 200, "contact": 200, "privacy": 200, "terms": 200, "blog": 200, "shipping": 0, "returns": 0, "faq": 0} |

## 10. Caveats and limits

- Every third-party metric (authority score, traffic, search volume) is an **estimate** from that vendor's own index, not Google's data. Google Search Console is the only source of truth for your own site.
- Authority scores from different vendors are **different scales**. An Open PageRank score of 6/10 is not 'DR 60' and the two must never be merged into one column.
- Domain Rating / Authority Score is a **third-party link metric**. It does not guarantee ranking, and a low score does not prevent ranking.
- This tool does not use shared or group-buy tool accounts. That breaches vendor terms of service and exposes client data.
- It does not scrape Google's HTML results. SERP data comes from a paid API if a key is supplied, otherwise competitors must be passed in with `--competitors`.

---

_Generated by seo-tool on 2026-10-15 13:07 UTC._