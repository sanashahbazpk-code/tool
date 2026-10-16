# SEO / AEO / GEO Research Report

**Target:** https://www.semrush.com/siteaudit/  
**Generated:** 2026-10-15 13:41 UTC  
**Tool:** seo-tool (SEO + AEO + GEO auditor)

---

## 1. Scoreboard

| Discipline | Score | Grade | What it covers |
|---|---|---|---|
| **SEO** — Search Engine Optimisation | 88.5/100 | B | Ranking pages on Google: keywords, on-page, technical, internal links |
| **AEO** — Answer Engine Optimisation | 84.1/100 | B | Featured snippets, People Also Ask, voice answers |
| **GEO** — Generative Engine Optimisation | 75.4/100 | C | Being cited or summarised by ChatGPT, Perplexity, Gemini, AI Overviews |
| **Overall** | **82.7/100** | **B** |  |

Checks run: **66** — 43 pass, 13 warnings, 3 failures, 6 informational, 1 skipped.

## 2. Executive summary

**Top problems, highest impact first:**

- **[GEO] Quantitative facts** — Almost no data (0.22 stats/100 words)
  - *Fix:* Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives.
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

1. **[GEO] Quantitative facts**
   - Problem: Almost no data (0.22 stats/100 words)
   - Do this: Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives.

### P1 — Quick wins

Low effort, clear payoff, mostly on-page markup and copy edits.

1. **[GEO] Cites authoritative sources**
   - Problem: Only 2 authority citation(s): www.linkedin.com, www.youtube.com
   - Do this: Link to 3+ credible sources (industry data, government, research, manufacturer specs). AI engines preferentially cite content that itself cites sources.
2. **[AEO] Answers are 40-60 words**
   - Problem: Mixed answer lengths (21.4% of answers)
   - Do this: Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot.
3. **[GEO] Named author**
   - Problem: No author byline found
   - Do this: Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh.
4. **[GEO] Person schema**
   - Problem: No Person schema
   - Do this: Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity.
5. **[GEO] Content type schema**
   - Problem: No Article / Product / Service schema
   - Do this: Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question.
6. **[GEO] Publish / update dates**
   - Problem: No datePublished / dateModified found
   - Do this: Add visible and machine-readable publish and last-updated dates.
7. **[SEO] Keyword alignment**
   - Problem: 'checker' only appears in: title, H1
   - Do this: Put the primary keyword in the title, the H1, the URL slug and the first 100 words.
8. **[TECHNICAL] Server response time**
   - Problem: Acceptable (1.51s)
   - Do this: Target under 0.8s. Enable full-page caching, upgrade the host, and put Cloudflare in front.
9. **[SEO] Trust pages exist**
   - Problem: Found: About page, Contact page, Privacy policy, Terms of service, Blog / news section, FAQ page | Missing: Shipping policy, Returns / refund policy
   - Do this: Add the remaining policy/FAQ pages.
10. **[TECHNICAL] Render-blocking head resources**
   - Problem: Too many (31 files)
   - Do this: Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint.
11. **[CONTENT] Text-to-HTML ratio**
   - Problem: Very low (code-heavy page) (2.5%)
   - Do this: Reduce markup around the content: fewer wrapper divs, less inline CSS/JS.

### P2 — Nice to have

Do these after P0 and P1.

1. **[AEO] Definition-style openers**
   - Problem: No answer opens with a definition
   - Do this: Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern.
2. **[AEO] Tables for comparison**
   - Problem: No tables on the page
   - Do this: Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.
3. **[SEO] Image alt text**
   - Problem: Some images missing alt (11.1% missing)
   - Do this: Write descriptive alt text for every image — it feeds image search, accessibility and AI understanding.
4. **[AEO] HowTo schema**
   - Problem: No HowTo schema (only needed if you publish step-by-step guides)
   - Do this: For any process/installation/guide page, add HowTo JSON-LD with numbered steps.

## 8. All checks in detail

### SEO — Search Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Page is indexable | ✅ PASS | meta robots: 'not set (indexable by default)' | — |
| Canonical tag | ✅ PASS | https://www.semrush.com/siteaudit/ (self-referencing site) | — |
| Title tag length | ✅ PASS | Good length (50 chars) | — |
| Meta description length | ✅ PASS | Good length (105 chars) | — |
| Exactly one H1 | ✅ PASS | H1: SEO Checker | — |
| Heading hierarchy | ✅ PASS | No skipped heading levels | — |
| Keyword alignment | ⚠️ WARN | 'checker' only appears in: title, H1 | Put the primary keyword in the title, the H1, the URL slug and the first 100 words. |
| Internal links in body | ✅ PASS | Good internal linking (130 links) | — |
| Navigational links | ℹ️ INFO | 6 links inside <nav>/<header> | — |
| Outbound links | ✅ PASS | 8 external links, 6 nofollow | — |
| Image alt text | ⚠️ WARN | Some images missing alt (11.1% missing) | Write descriptive alt text for every image — it feeds image search, accessibility and AI understanding. |
| Open Graph tags | ✅ PASS | og:title, og:description, og:image present | — |
| Structured data present | ✅ PASS | 8 type(s): Answer, FAQPage, ImageObject, Offer, Organization, Question, VideoObject, WebApplication | — |
| URL structure | ✅ PASS | Clean, lowercase, descriptive | — |
| Resolved URL | ℹ️ INFO | https://www.semrush.com/siteaudit/ | — |
| Trust pages exist | ⚠️ WARN | Found: About page, Contact page, Privacy policy, Terms of service, Blog / news section, FAQ page \| Missing: Shipping policy, Returns / refund policy | Add the remaining policy/FAQ pages. |
| hreflang tags | ℹ️ INFO | 14 alternate language versions declared | — |

### Technical SEO

| Check | Status | Detail | Fix |
|---|---|---|---|
| HTTPS enabled | ✅ PASS | Served over HTTPS from www.semrush.com | — |
| http redirects to https | ✅ PASS | http:// -> https://www.semrush.com:443/ | — |
| One canonical hostname | ✅ PASS | https://semrush.com/ -> https://www.semrush.com (good) | — |
| Server response time | ⚠️ WARN | Acceptable (1.51s) | Target under 0.8s. Enable full-page caching, upgrade the host, and put Cloudflare in front. |
| HTML page weight | ✅ PASS | Lean (133.6 KB) | — |
| Text compression | ✅ PASS | content-encoding: gzip | — |
| Render-blocking head resources | ❌ FAIL | Too many (31 files) | Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint. |
| Cache headers | ✅ PASS | cache-control: private, no-store | — |
| Content present in the served HTML | ✅ PASS | 2247 words of visible text are in the HTML response | — |
| robots.txt present | ✅ PASS | HTTP 200, 14 sitemap directive(s) | — |
| XML sitemap | ✅ PASS | https://www.semrush.com/sitemap.xml — 5044 URLs across 23 child sitemaps | — |
| Mobile viewport | ✅ PASS | viewport: width=device-width | — |
| Language declared | ✅ PASS | html lang="en" | — |
| Broken internal links | ⏭️ SKIP | No internal links were sampled | — |

### Content

| Check | Status | Detail | Fix |
|---|---|---|---|
| Subheadings (H2) | ✅ PASS | Well structured (13 H2s) | — |
| Content depth | ✅ PASS | Substantial (2247 words) | — |
| Primary topic detected | ✅ PASS | 'checker' (from title/H1/URL) | — |
| Text-to-HTML ratio | ❌ FAIL | Very low (code-heavy page) (2.5%) | Reduce markup around the content: fewer wrapper divs, less inline CSS/JS. |

### AEO — Answer Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| FAQPage schema | ✅ PASS | FAQPage JSON-LD found — eligible for FAQ rich results and easy for AI to quote | — |
| HowTo schema | ⚠️ WARN | No HowTo schema (only needed if you publish step-by-step guides) | For any process/installation/guide page, add HowTo JSON-LD with numbered steps. |
| Q&A schema | ✅ PASS | Found: answer, question | — |
| Speakable schema | ℹ️ INFO | No speakable markup (optional, voice-assistant only) | — |
| Question-form headings | ✅ PASS | Strong question coverage (14 questions) | — |
| Answers are 40-60 words | ⚠️ WARN | Mixed answer lengths (21.4% of answers) | Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot. |
| Definition-style openers | ⚠️ WARN | No answer opens with a definition | Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern. |
| Bulleted / numbered lists | ✅ PASS | 28 list(s) found | — |
| Tables for comparison | ⚠️ WARN | No tables on the page | Add at least one comparison or specification table. Tables are prime snippet and AI-summary material. |
| Descriptive headings | ✅ PASS | Headings are descriptive (0.0% vague) | — |
| Sentence length | ✅ PASS | Easy to quote (55 sentences analysed) (18.44 words/sentence) | — |
| Answer-first intro | ✅ PASS | First paragraph is 23 words — good for an intro snippet | — |
| Summary / key-takeaways block | ✅ PASS | A summary-style section is present | — |
| BreadcrumbList schema | ℹ️ INFO | No BreadcrumbList schema | — |

### GEO — Generative Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Content readable without JavaScript | ✅ PASS | 2247 words are present in the raw HTML response | — |
| AI crawlers allowed | ✅ PASS | No AI crawler is blocked. Allowed: gptbot, chatgpt-user, oai-searchbot, claudebot, anthropic-ai, claude-web, perplexitybot, perplexity-user | — |
| Cites authoritative sources | ⚠️ WARN | Only 2 authority citation(s): www.linkedin.com, www.youtube.com | Link to 3+ credible sources (industry data, government, research, manufacturer specs). AI engines preferentially cite content that itself cites sources. |
| Quantitative facts | ❌ FAIL | Almost no data (0.22 stats/100 words) | Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives. |
| Named author | ⚠️ WARN | No author byline found | Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh. |
| Person schema | ⚠️ WARN | No Person schema | Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity. |
| Organization / LocalBusiness schema | ✅ PASS | Found: organization with sameAs | — |
| Entity-rich content | ✅ PASS | Entity-rich (22.61 proper nouns/100 words) | — |
| Publish / update dates | ⚠️ WARN | No datePublished / dateModified found | Add visible and machine-readable publish and last-updated dates. |
| Content type schema | ⚠️ WARN | No Article / Product / Service schema | Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question. |
| Machine-parseable formatting | ✅ PASS | 0 table(s), 28 list(s) | — |
| Q&A pairs for summarisation | ✅ PASS | 14 question/answer pair(s) | — |
| llms.txt | ✅ PASS | Found (4662 bytes) — an emerging convention for telling AI crawlers what matters | — |
| E-E-A-T surface area | ✅ PASS | Trust pages found: 6/8 | — |
| Semantic HTML landmarks | ✅ PASS | Using: <main>, <nav> | — |
| Quotable sentence length | ✅ PASS | Easily quotable (18.44 words/sentence) | — |
| Third-party presence (Reddit, Quora, industry sites) | ℹ️ INFO | Not auto-checked — this tool does not query reddit/quora without a SERP key. AI engines lean on sources they have already seen discussed elsewhere. | Manually search `<brand> site:reddit.com`, `<brand> site:quora.com` and your top 3 industry publications. If nothing comes up, that is your GEO gap: contribute genuine answers and get listed in industry directories and comparison articles. |

## 9. Evidence collected

### On-page facts

| Item | Value |
|---|---|
| Title | Free SEO Checker: Check for SEO & AI Search Issues (50 chars) |
| Meta description | Free tool to run a website audit, check for SEO issues, and apply fixes that grow traffic and visibility. (105 chars) |
| H1 | SEO Checker |
| Headings | hh1=1, hh2=13, hh3=34, hh4=0, hh5=0, hh6=0 |
| Word count | 2247 |
| Internal / external links | 136 / 8 |
| Authority citations | 2 |
| Images (missing alt) | 9 (1) |
| Schema types | Answer, FAQPage, ImageObject, Offer, Organization, Question, VideoObject, WebApplication |
| Tables / lists | 0 / 28 |
| Q&A blocks (40-60 words) | 14 (3) |
| Author | (none) |
| Dates | (none) |
| Stats per 100 words | 0.22 |
| Avg sentence length | 18.44 words |
| Text/HTML ratio | 2.5% |
| Canonical | https://www.semrush.com/siteaudit/ |
| Meta robots | (not set) |
| Viewport | width=device-width |

### Site-level facts

| Item | Value |
|---|---|
| Response time | 1.51s |
| Server | nginx |
| CDN | yes (edge/CDN headers present) |
| Compression | gzip |
| HTTP → HTTPS | https://www.semrush.com:443/ |
| www variant | https://semrush.com/ -> https://www.semrush.com (good) |
| robots.txt | HTTP 200 (11 groups) |
| AI crawlers blocked | none 🎉 |
| Sitemap | https://www.semrush.com/sitemap.xml — 5044 URLs |
| llms.txt | present |
| Missing security headers | content-security-policy, referrer-policy, permissions-policy |
| Broken links found | 0 of 0 sampled |
| Trust pages | {"about": 200, "contact": 200, "privacy": 200, "terms": 200, "blog": 200, "shipping": 0, "returns": 0, "faq": 200} |

## 10. Caveats and limits

- Every third-party metric (authority score, traffic, search volume) is an **estimate** from that vendor's own index, not Google's data. Google Search Console is the only source of truth for your own site.
- Authority scores from different vendors are **different scales**. An Open PageRank score of 6/10 is not 'DR 60' and the two must never be merged into one column.
- Domain Rating / Authority Score is a **third-party link metric**. It does not guarantee ranking, and a low score does not prevent ranking.
- This tool does not use shared or group-buy tool accounts. That breaches vendor terms of service and exposes client data.
- It does not scrape Google's HTML results. SERP data comes from a paid API if a key is supplied, otherwise competitors must be passed in with `--competitors`.

---

_Generated by seo-tool on 2026-10-15 13:41 UTC._