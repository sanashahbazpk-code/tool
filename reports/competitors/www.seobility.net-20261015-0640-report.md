# SEO / AEO / GEO Research Report

**Target:** https://www.seobility.net/en/  
**Generated:** 2026-10-15 13:40 UTC  
**Tool:** seo-tool (SEO + AEO + GEO auditor)

---

## 1. Scoreboard

| Discipline | Score | Grade | What it covers |
|---|---|---|---|
| **SEO** — Search Engine Optimisation | 87.5/100 | B | Ranking pages on Google: keywords, on-page, technical, internal links |
| **AEO** — Answer Engine Optimisation | 45.9/100 | F | Featured snippets, People Also Ask, voice answers |
| **GEO** — Generative Engine Optimisation | 81.2/100 | B | Being cited or summarised by ChatGPT, Perplexity, Gemini, AI Overviews |
| **Overall** | **71.5/100** | **C** |  |

Checks run: **67** — 44 pass, 9 warnings, 6 failures, 6 informational, 2 skipped.

## 2. Executive summary

**Top problems, highest impact first:**

- **[AEO] FAQPage schema** — No FAQPage schema
  - *Fix:* Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change.
- **[AEO] Question-form headings** — No question headings (0 questions)
  - *Fix:* Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
- **[AEO] Answers are 40-60 words** — No question/answer pairs detected on the page
  - *Fix:* Add a FAQ section: question as the heading, 40-60 word answer immediately below.
- **[GEO] Quantitative facts** — Almost no data (0.23 stats/100 words)
  - *Fix:* Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives.
- **[SEO] Trust pages exist** — Missing core pages: About page
  - *Fix:* Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source.
- **[CONTENT] Text-to-HTML ratio** — Very low (code-heavy page) (4.7%)
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
   - Problem: No question/answer pairs detected on the page
   - Do this: Add a FAQ section: question as the heading, 40-60 word answer immediately below.
3. **[AEO] Question-form headings**
   - Problem: No question headings (0 questions)
   - Do this: Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
4. **[GEO] Quantitative facts**
   - Problem: Almost no data (0.23 stats/100 words)
   - Do this: Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives.

### P1 — Quick wins

Low effort, clear payoff, mostly on-page markup and copy edits.

1. **[GEO] Cites authoritative sources**
   - Problem: Only 1 authority citation(s): www.linkedin.com
   - Do this: Link to 3+ credible sources (industry data, government, research, manufacturer specs). AI engines preferentially cite content that itself cites sources.
2. **[GEO] Content type schema**
   - Problem: No Article / Product / Service schema
   - Do this: Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question.
3. **[GEO] Q&A pairs for summarisation**
   - Problem: No question-and-answer structure
   - Do this: Add an FAQ block. It is what Perplexity and AI Overviews quote most often.
4. **[SEO] Keyword alignment**
   - Problem: 'seobility' only appears in: title, URL
   - Do this: Put the primary keyword in the title, the H1, the URL slug and the first 100 words.
5. **[SEO] Trust pages exist**
   - Problem: Missing core pages: About page
   - Do this: Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source.
6. **[CONTENT] Text-to-HTML ratio**
   - Problem: Very low (code-heavy page) (4.7%)
   - Do this: Reduce markup around the content: fewer wrapper divs, less inline CSS/JS.

### P2 — Nice to have

Do these after P0 and P1.

1. **[AEO] Answer-first intro**
   - Problem: First paragraph is 9 words
   - Do this: Open with a 40-60 word paragraph that directly answers the page's main question, then expand.
2. **[AEO] Tables for comparison**
   - Problem: No tables on the page
   - Do this: Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.
3. **[AEO] HowTo schema**
   - Problem: No HowTo schema (only needed if you publish step-by-step guides)
   - Do this: For any process/installation/guide page, add HowTo JSON-LD with numbered steps.
4. **[GEO] Semantic HTML landmarks**
   - Problem: Only found: nav
   - Do this: Wrap content in <main> and <article> and use <nav>. Landmarks help extraction pipelines isolate the real content from the chrome.
5. **[TECHNICAL] Render-blocking head resources**
   - Problem: Several (9 files)
   - Do this: Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint.

## 8. All checks in detail

### SEO — Search Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Page is indexable | ✅ PASS | meta robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' | — |
| Canonical tag | ✅ PASS | https://www.seobility.net/en/ (self-referencing site) | — |
| Title tag length | ✅ PASS | Good length (59 chars) | — |
| Meta description length | ✅ PASS | Good length (156 chars) | — |
| Exactly one H1 | ✅ PASS | H1: Improve your rankings and show up where it matters | — |
| Heading hierarchy | ✅ PASS | No skipped heading levels | — |
| Keyword alignment | ⚠️ WARN | 'seobility' only appears in: title, URL | Put the primary keyword in the title, the H1, the URL slug and the first 100 words. |
| Internal links in body | ✅ PASS | Good internal linking (22 links) | — |
| Navigational links | ℹ️ INFO | 65 links inside <nav>/<header> | — |
| Outbound links | ✅ PASS | 3 external links, 0 nofollow | — |
| Image alt text | ✅ PASS | Good alt coverage (7.3% missing) | — |
| Open Graph tags | ✅ PASS | og:title, og:description, og:image present | — |
| Structured data present | ✅ PASS | 16 type(s): BreadcrumbList, ContactPoint, EntryPoint, ImageObject, ListItem, Organization, Person, Place | — |
| URL structure | ✅ PASS | Clean, lowercase, descriptive | — |
| Resolved URL | ℹ️ INFO | https://www.seobility.net/en/ | — |
| Trust pages exist | ❌ FAIL | Missing core pages: About page | Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source. |
| hreflang tags | ℹ️ INFO | 4 alternate language versions declared | — |

### Technical SEO

| Check | Status | Detail | Fix |
|---|---|---|---|
| HTTPS enabled | ✅ PASS | Served over HTTPS from www.seobility.net | — |
| http redirects to https | ✅ PASS | http:// -> https://www.seobility.net/en/ | — |
| One canonical hostname | ✅ PASS | https://seobility.net/ -> https://www.seobility.net/en/ | — |
| Server response time | ✅ PASS | Fast (0.49s) | — |
| HTML page weight | ✅ PASS | Lean (44.0 KB) | — |
| Text compression | ✅ PASS | content-encoding: gzip | — |
| Render-blocking head resources | ⚠️ WARN | Several (9 files) | Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint. |
| Cache headers | ✅ PASS | cache-control: max-age=259200, must-revalidate | — |
| Content present in the served HTML | ✅ PASS | 1712 words of visible text are in the HTML response | — |
| robots.txt present | ✅ PASS | HTTP 200, 1 sitemap directive(s) | — |
| XML sitemap | ✅ PASS | https://www.seobility.net/sitemap_index.xml — 1318 URLs across 8 child sitemaps | — |
| Mobile viewport | ✅ PASS | viewport: width=device-width, initial-scale=1 | — |
| Language declared | ✅ PASS | html lang="en-US" | — |
| Broken internal links | ⏭️ SKIP | No internal links were sampled | — |

### Content

| Check | Status | Detail | Fix |
|---|---|---|---|
| Subheadings (H2) | ✅ PASS | Well structured (8 H2s) | — |
| Content depth | ✅ PASS | Substantial (1712 words) | — |
| Primary topic detected | ✅ PASS | 'seobility' (from title/H1/URL) | — |
| Text-to-HTML ratio | ❌ FAIL | Very low (code-heavy page) (4.7%) | Reduce markup around the content: fewer wrapper divs, less inline CSS/JS. |

### AEO — Answer Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| FAQPage schema | ❌ FAIL | No FAQPage schema | Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change. |
| HowTo schema | ⚠️ WARN | No HowTo schema (only needed if you publish step-by-step guides) | For any process/installation/guide page, add HowTo JSON-LD with numbered steps. |
| Q&A schema | ℹ️ INFO | No QAPage/Question schema (optional) | — |
| Speakable schema | ℹ️ INFO | No speakable markup (optional, voice-assistant only) | — |
| Question-form headings | ❌ FAIL | No question headings (0 questions) | Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from. |
| Answers are 40-60 words | ❌ FAIL | No question/answer pairs detected on the page | Add a FAQ section: question as the heading, 40-60 word answer immediately below. |
| Definition-style openers | ⏭️ SKIP | No Q&A pairs to assess | — |
| Bulleted / numbered lists | ✅ PASS | 14 list(s) found | — |
| Tables for comparison | ⚠️ WARN | No tables on the page | Add at least one comparison or specification table. Tables are prime snippet and AI-summary material. |
| Descriptive headings | ✅ PASS | Headings are descriptive (0.0% vague) | — |
| Sentence length | ✅ PASS | Easy to quote (49 sentences analysed) (18.27 words/sentence) | — |
| Answer-first intro | ⚠️ WARN | First paragraph is 9 words | Open with a 40-60 word paragraph that directly answers the page's main question, then expand. |
| Summary / key-takeaways block | ✅ PASS | A summary-style section is present | — |
| BreadcrumbList schema | ✅ PASS | Breadcrumbs declared — improves SERP display | — |

### GEO — Generative Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Content readable without JavaScript | ✅ PASS | 1712 words are present in the raw HTML response | — |
| AI crawlers allowed | ✅ PASS | No AI crawler is blocked. Allowed: gptbot, chatgpt-user, oai-searchbot, claudebot, anthropic-ai, claude-web, perplexitybot, perplexity-user | — |
| Cites authoritative sources | ⚠️ WARN | Only 1 authority citation(s): www.linkedin.com | Link to 3+ credible sources (industry data, government, research, manufacturer specs). AI engines preferentially cite content that itself cites sources. |
| Quantitative facts | ❌ FAIL | Almost no data (0.23 stats/100 words) | Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives. |
| Named author | ✅ PASS | Author: Manuel Weiss | — |
| Person schema | ✅ PASS | Person JSON-LD found | — |
| Organization / LocalBusiness schema | ✅ PASS | Found: organization, website with sameAs | — |
| Entity-rich content | ✅ PASS | Entity-rich (24.3 proper nouns/100 words) | — |
| Publish / update dates | ✅ PASS | published=? modified=2026-10-08T07:55:08+00:00 | — |
| Content freshness | ✅ PASS | Updated within a year (7 days since update) | — |
| Content type schema | ⚠️ WARN | No Article / Product / Service schema | Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question. |
| Machine-parseable formatting | ✅ PASS | 0 table(s), 14 list(s) | — |
| Q&A pairs for summarisation | ⚠️ WARN | No question-and-answer structure | Add an FAQ block. It is what Perplexity and AI Overviews quote most often. |
| llms.txt | ✅ PASS | Found (1770 bytes) — an emerging convention for telling AI crawlers what matters | — |
| E-E-A-T surface area | ✅ PASS | Trust pages found: 5/8 | — |
| Semantic HTML landmarks | ⚠️ WARN | Only found: nav | Wrap content in <main> and <article> and use <nav>. Landmarks help extraction pipelines isolate the real content from the chrome. |
| Quotable sentence length | ✅ PASS | Easily quotable (18.27 words/sentence) | — |
| Third-party presence (Reddit, Quora, industry sites) | ℹ️ INFO | Not auto-checked — this tool does not query reddit/quora without a SERP key. AI engines lean on sources they have already seen discussed elsewhere. | Manually search `<brand> site:reddit.com`, `<brand> site:quora.com` and your top 3 industry publications. If nothing comes up, that is your GEO gap: contribute genuine answers and get listed in industry directories and comparison articles. |

## 9. Evidence collected

### On-page facts

| Item | Value |
|---|---|
| Title | Seobility - Online SEO Software & Tools For Better Rankings (59 chars) |
| Meta description | Improve your Google rankings and drive more visitors to your website with Seobility's All-in-One SEO platform. Top-rated ✓ Easy-to-use ✓ 14-day free trial ✓ (156 chars) |
| H1 | Improve your rankings and show up where it matters |
| Headings | hh1=1, hh2=8, hh3=17, hh4=0, hh5=0, hh6=0 |
| Word count | 1712 |
| Internal / external links | 87 / 3 |
| Authority citations | 1 |
| Images (missing alt) | 109 (8) |
| Schema types | BreadcrumbList, ContactPoint, EntryPoint, ImageObject, ListItem, Organization, Person, Place, PostalAddress, PropertyValueSpecification, QuantitativeValue, ReadAction, SearchAction, TechArticle, WebPage, WebSite |
| Tables / lists | 0 / 14 |
| Q&A blocks (40-60 words) | 0 (0) |
| Author | Manuel Weiss |
| Dates | {"modified": "2026-10-08T07:55:08+00:00"} |
| Stats per 100 words | 0.23 |
| Avg sentence length | 18.27 words |
| Text/HTML ratio | 4.7% |
| Canonical | https://www.seobility.net/en/ |
| Meta robots | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 |
| Viewport | width=device-width, initial-scale=1 |

### Site-level facts

| Item | Value |
|---|---|
| Response time | 0.49s |
| Server | cloudflare |
| CDN | Cloudflare |
| Compression | gzip |
| HTTP → HTTPS | https://www.seobility.net/en/ |
| www variant | https://seobility.net/ -> https://www.seobility.net/en/ |
| robots.txt | HTTP 200 (59 groups) |
| AI crawlers blocked | none 🎉 |
| Sitemap | https://www.seobility.net/sitemap_index.xml — 1318 URLs |
| llms.txt | present |
| Missing security headers | strict-transport-security, x-content-type-options, x-frame-options, content-security-policy, referrer-policy, permissions-policy |
| Broken links found | 0 of 0 sampled |
| Trust pages | {"about": 0, "contact": 200, "privacy": 200, "terms": 200, "blog": 200, "shipping": 0, "returns": 0, "faq": 200} |

## 10. Caveats and limits

- Every third-party metric (authority score, traffic, search volume) is an **estimate** from that vendor's own index, not Google's data. Google Search Console is the only source of truth for your own site.
- Authority scores from different vendors are **different scales**. An Open PageRank score of 6/10 is not 'DR 60' and the two must never be merged into one column.
- Domain Rating / Authority Score is a **third-party link metric**. It does not guarantee ranking, and a low score does not prevent ranking.
- This tool does not use shared or group-buy tool accounts. That breaches vendor terms of service and exposes client data.
- It does not scrape Google's HTML results. SERP data comes from a paid API if a key is supplied, otherwise competitors must be passed in with `--competitors`.

---

_Generated by seo-tool on 2026-10-15 13:40 UTC._