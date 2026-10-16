# SEO / AEO / GEO Research Report

**Target:** https://www.meegames.com/en/game/2956-ludo-world.html  
**Generated:** 2026-10-15 13:07 UTC  
**Tool:** seo-tool (SEO + AEO + GEO auditor)

---

## 1. Scoreboard

| Discipline | Score | Grade | What it covers |
|---|---|---|---|
| **SEO** — Search Engine Optimisation | 92.6/100 | A | Ranking pages on Google: keywords, on-page, technical, internal links |
| **AEO** — Answer Engine Optimisation | 46.2/100 | F | Featured snippets, People Also Ask, voice answers |
| **GEO** — Generative Engine Optimisation | 73.8/100 | C | Being cited or summarised by ChatGPT, Perplexity, Gemini, AI Overviews |
| **Overall** | **70.9/100** | **C** |  |

Checks run: **66** — 37 pass, 15 warnings, 5 failures, 8 informational, 1 skipped.

## 2. Executive summary

**Top problems, highest impact first:**

- **[AEO] FAQPage schema** — No FAQPage schema
  - *Fix:* Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change.
- **[GEO] Cites authoritative sources** — No outbound links to authoritative sources
  - *Fix:* Add citations: link claims to primary sources. Pages with visible sourcing are dramatically more likely to be quoted by ChatGPT, Perplexity and Google AI Overviews.
- **[AEO] Question-form headings** — No question headings (1 questions)
  - *Fix:* Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
- **[AEO] Answers are 40-60 words** — Answers are the wrong length (0.0% of answers)
  - *Fix:* Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot.
- **[CONTENT] Text-to-HTML ratio** — Very low (code-heavy page) (3.7%)
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
2. **[GEO] Cites authoritative sources**
   - Problem: No outbound links to authoritative sources
   - Do this: Add citations: link claims to primary sources. Pages with visible sourcing are dramatically more likely to be quoted by ChatGPT, Perplexity and Google AI Overviews.
3. **[AEO] Answers are 40-60 words**
   - Problem: Answers are the wrong length (0.0% of answers)
   - Do this: Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot.
4. **[AEO] Question-form headings**
   - Problem: No question headings (1 questions)
   - Do this: Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.

### P1 — Quick wins

Low effort, clear payoff, mostly on-page markup and copy edits.

1. **[GEO] Quantitative facts**
   - Problem: Few numbers (1.48 stats/100 words)
   - Do this: Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives.
2. **[GEO] Named author**
   - Problem: No author byline found
   - Do this: Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh.
3. **[GEO] Person schema**
   - Problem: No Person schema
   - Do this: Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity.
4. **[GEO] Content type schema**
   - Problem: No Article / Product / Service schema
   - Do this: Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question.
5. **[GEO] Publish / update dates**
   - Problem: No datePublished / dateModified found
   - Do this: Add visible and machine-readable publish and last-updated dates.
6. **[SEO] Trust pages exist**
   - Problem: Found: About page, Contact page, Privacy policy, Terms of service, FAQ page | Missing: Blog / news section, Shipping policy, Returns / refund policy
   - Do this: Add the remaining policy/FAQ pages.
7. **[CONTENT] Content depth**
   - Problem: Thin-ish (406 words)
   - Do this: Expand to at least 600 words of genuinely useful detail. Cover the questions a buyer asks before purchasing.
8. **[CONTENT] Text-to-HTML ratio**
   - Problem: Very low (code-heavy page) (3.7%)
   - Do this: Reduce markup around the content: fewer wrapper divs, less inline CSS/JS.

### P2 — Nice to have

Do these after P0 and P1.

1. **[AEO] Answer-first intro**
   - Problem: First paragraph is 10 words
   - Do this: Open with a 40-60 word paragraph that directly answers the page's main question, then expand.
2. **[AEO] Definition-style openers**
   - Problem: No answer opens with a definition
   - Do this: Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern.
3. **[AEO] Tables for comparison**
   - Problem: No tables on the page
   - Do this: Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.
4. **[SEO] Meta description length**
   - Problem: Long (164 chars)
   - Do this: Keep it 120-160 characters.
5. **[AEO] HowTo schema**
   - Problem: No HowTo schema (only needed if you publish step-by-step guides)
   - Do this: For any process/installation/guide page, add HowTo JSON-LD with numbered steps.
6. **[TECHNICAL] Cache headers**
   - Problem: No cache-control header on the HTML response
   - Do this: Add Cache-Control and an ETag so repeat visits and crawls are cheap.
7. **[TECHNICAL] Render-blocking head resources**
   - Problem: Several (11 files)
   - Do this: Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint.
8. **[TECHNICAL] Language declared**
   - Problem: No lang attribute on <html>
   - Do this: Add lang="en" (or the correct language) — it helps both search and screen readers.

## 8. All checks in detail

### SEO — Search Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Page is indexable | ✅ PASS | meta robots: 'not set (indexable by default)' | — |
| Canonical tag | ✅ PASS | https://www.meegames.com/en/game/2956-ludo-world.html (self-referencing site) | — |
| Title tag length | ✅ PASS | Good length (44 chars) | — |
| Meta description length | ⚠️ WARN | Long (164 chars) | Keep it 120-160 characters. |
| Exactly one H1 | ✅ PASS | H1: Ludo World | — |
| Heading hierarchy | ✅ PASS | No skipped heading levels | — |
| Keyword alignment | ✅ PASS | 'ludo' appears in: title, H1, URL | — |
| Internal links in body | ✅ PASS | Good internal linking (51 links) | — |
| Navigational links | ℹ️ INFO | 45 links inside <nav>/<header> | — |
| Outbound links | ℹ️ INFO | No outbound links | — |
| Image alt text | ✅ PASS | Good alt coverage (0.0% missing) | — |
| Open Graph tags | ✅ PASS | og:title, og:description, og:image present | — |
| Structured data present | ✅ PASS | 15 type(s): AggregateRating, Brand, BreadcrumbList, ContactPoint, EntryPoint, ImageObject, ListItem, Offer | — |
| URL structure | ✅ PASS | Clean, lowercase, descriptive | — |
| Resolved URL | ℹ️ INFO | https://www.meegames.com/en/game/2956-ludo-world.html | — |
| Trust pages exist | ⚠️ WARN | Found: About page, Contact page, Privacy policy, Terms of service, FAQ page \| Missing: Blog / news section, Shipping policy, Returns / refund policy | Add the remaining policy/FAQ pages. |
| hreflang tags | ℹ️ INFO | 11 alternate language versions declared | — |

### Technical SEO

| Check | Status | Detail | Fix |
|---|---|---|---|
| HTTPS enabled | ✅ PASS | Served over HTTPS from www.meegames.com | — |
| http redirects to https | ✅ PASS | http:// -> https://www.meegames.com/ | — |
| One canonical hostname | ✅ PASS | https://meegames.com/ -> https://www.meegames.com (good) | — |
| Server response time | ✅ PASS | Fast (0.66s) | — |
| HTML page weight | ✅ PASS | Lean (13.2 KB) | — |
| Text compression | ✅ PASS | content-encoding: gzip | — |
| Render-blocking head resources | ⚠️ WARN | Several (11 files) | Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint. |
| Cache headers | ⚠️ WARN | No cache-control header on the HTML response | Add Cache-Control and an ETag so repeat visits and crawls are cheap. |
| Content present in the served HTML | ✅ PASS | 406 words of visible text are in the HTML response | — |
| robots.txt present | ✅ PASS | HTTP 200, 1 sitemap directive(s) | — |
| XML sitemap | ✅ PASS | https://www.meegames.com/en/sitemap_index.xml — 5940 URLs across 8 child sitemaps | — |
| Mobile viewport | ✅ PASS | viewport: width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover | — |
| Language declared | ⚠️ WARN | No lang attribute on <html> | Add lang="en" (or the correct language) — it helps both search and screen readers. |
| Broken internal links | ⏭️ SKIP | No internal links were sampled | — |

### Content

| Check | Status | Detail | Fix |
|---|---|---|---|
| Subheadings (H2) | ✅ PASS | Well structured (5 H2s) | — |
| Content depth | ⚠️ WARN | Thin-ish (406 words) | Expand to at least 600 words of genuinely useful detail. Cover the questions a buyer asks before purchasing. |
| Primary topic detected | ✅ PASS | 'ludo' (from title/H1/URL) | — |
| Text-to-HTML ratio | ❌ FAIL | Very low (code-heavy page) (3.7%) | Reduce markup around the content: fewer wrapper divs, less inline CSS/JS. |

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
| Bulleted / numbered lists | ✅ PASS | 8 list(s) found | — |
| Tables for comparison | ⚠️ WARN | No tables on the page | Add at least one comparison or specification table. Tables are prime snippet and AI-summary material. |
| Descriptive headings | ✅ PASS | Headings are descriptive (0.0% vague) | — |
| Sentence length | ✅ PASS | Easy to quote (8 sentences analysed) (16.75 words/sentence) | — |
| Answer-first intro | ⚠️ WARN | First paragraph is 10 words | Open with a 40-60 word paragraph that directly answers the page's main question, then expand. |
| Summary / key-takeaways block | ✅ PASS | A summary-style section is present | — |
| BreadcrumbList schema | ✅ PASS | Breadcrumbs declared — improves SERP display | — |

### GEO — Generative Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Content readable without JavaScript | ✅ PASS | 406 words are present in the raw HTML response | — |
| AI crawlers allowed | ✅ PASS | No AI crawler is blocked. Allowed: gptbot, chatgpt-user, oai-searchbot, claudebot, anthropic-ai, claude-web, perplexitybot, perplexity-user | — |
| Cites authoritative sources | ❌ FAIL | No outbound links to authoritative sources | Add citations: link claims to primary sources. Pages with visible sourcing are dramatically more likely to be quoted by ChatGPT, Perplexity and Google AI Overviews. |
| Quantitative facts | ⚠️ WARN | Few numbers (1.48 stats/100 words) | Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives. |
| Named author | ⚠️ WARN | No author byline found | Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh. |
| Person schema | ⚠️ WARN | No Person schema | Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity. |
| Organization / LocalBusiness schema | ✅ PASS | Found: organization, website with sameAs | — |
| Entity-rich content | ✅ PASS | Entity-rich (26.35 proper nouns/100 words) | — |
| Publish / update dates | ⚠️ WARN | No datePublished / dateModified found | Add visible and machine-readable publish and last-updated dates. |
| Content type schema | ⚠️ WARN | No Article / Product / Service schema | Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question. |
| Machine-parseable formatting | ✅ PASS | 0 table(s), 8 list(s) | — |
| Q&A pairs for summarisation | ✅ PASS | 1 question/answer pair(s) | — |
| llms.txt | ℹ️ INFO | No /llms.txt (optional; the convention is still emerging, low cost to add: a markdown index of your key pages) | — |
| E-E-A-T surface area | ✅ PASS | Trust pages found: 5/8 | — |
| Semantic HTML landmarks | ✅ PASS | Using: <main>, <nav> | — |
| Quotable sentence length | ✅ PASS | Easily quotable (16.75 words/sentence) | — |
| Third-party presence (Reddit, Quora, industry sites) | ℹ️ INFO | Not auto-checked — this tool does not query reddit/quora without a SERP key. AI engines lean on sources they have already seen discussed elsewhere. | Manually search `<brand> site:reddit.com`, `<brand> site:quora.com` and your top 3 industry publications. If nothing comes up, that is your GEO gap: contribute genuine answers and get listed in industry directories and comparison articles. |

## 9. Evidence collected

### On-page facts

| Item | Value |
|---|---|
| Title | Ludo World — play online for free - MEEGames (44 chars) |
| Meta description | Ludo World is a classic board game brought to life with smooth gameplay, a colorful board, and exciting online matches. Play for free on computer, tablet, or ph (164 chars) |
| H1 | Ludo World |
| Headings | hh1=1, hh2=5, hh3=0, hh4=0, hh5=0, hh6=0 |
| Word count | 406 |
| Internal / external links | 96 / 0 |
| Authority citations | 0 |
| Images (missing alt) | 74 (0) |
| Schema types | AggregateRating, Brand, BreadcrumbList, ContactPoint, EntryPoint, ImageObject, ListItem, Offer, Organization, PlayAction, SearchAction, VideoGame, WebApplication, WebPage, WebSite |
| Tables / lists | 0 / 8 |
| Q&A blocks (40-60 words) | 1 (0) |
| Author | (none) |
| Dates | (none) |
| Stats per 100 words | 1.48 |
| Avg sentence length | 16.75 words |
| Text/HTML ratio | 3.7% |
| Canonical | https://www.meegames.com/en/game/2956-ludo-world.html |
| Meta robots | (not set) |
| Viewport | width=device-width, initial-scale=1.0, shrink-to-fit=no, vie |

### Site-level facts

| Item | Value |
|---|---|
| Response time | 0.66s |
| Server | cloudflare |
| CDN | Cloudflare |
| Compression | gzip |
| HTTP → HTTPS | https://www.meegames.com/ |
| www variant | https://meegames.com/ -> https://www.meegames.com (good) |
| robots.txt | HTTP 200 (1 groups) |
| AI crawlers blocked | none 🎉 |
| Sitemap | https://www.meegames.com/en/sitemap_index.xml — 5940 URLs |
| llms.txt | absent |
| Missing security headers | strict-transport-security, x-frame-options, content-security-policy, referrer-policy, permissions-policy |
| Broken links found | 0 of 0 sampled |
| Trust pages | {"about": 200, "contact": 200, "privacy": 200, "terms": 200, "blog": 0, "shipping": 0, "returns": 0, "faq": 200} |

## 10. Caveats and limits

- Every third-party metric (authority score, traffic, search volume) is an **estimate** from that vendor's own index, not Google's data. Google Search Console is the only source of truth for your own site.
- Authority scores from different vendors are **different scales**. An Open PageRank score of 6/10 is not 'DR 60' and the two must never be merged into one column.
- Domain Rating / Authority Score is a **third-party link metric**. It does not guarantee ranking, and a low score does not prevent ranking.
- This tool does not use shared or group-buy tool accounts. That breaches vendor terms of service and exposes client data.
- It does not scrape Google's HTML results. SERP data comes from a paid API if a key is supplied, otherwise competitors must be passed in with `--competitors`.

---

_Generated by seo-tool on 2026-10-15 13:07 UTC._