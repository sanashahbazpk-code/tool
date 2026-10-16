# SEO / AEO / GEO Research Report

**Target:** https://seo.danielpetrica.com/  
**Generated:** 2026-10-15 13:41 UTC  
**Tool:** seo-tool (SEO + AEO + GEO auditor)

---

## 1. Scoreboard

| Discipline | Score | Grade | What it covers |
|---|---|---|---|
| **SEO** — Search Engine Optimisation | 87.5/100 | B | Ranking pages on Google: keywords, on-page, technical, internal links |
| **AEO** — Answer Engine Optimisation | 61.5/100 | D | Featured snippets, People Also Ask, voice answers |
| **GEO** — Generative Engine Optimisation | 81.5/100 | B | Being cited or summarised by ChatGPT, Perplexity, Gemini, AI Overviews |
| **Overall** | **76.8/100** | **C** |  |

Checks run: **65** — 43 pass, 11 warnings, 3 failures, 7 informational, 1 skipped.

## 2. Executive summary

**Top problems, highest impact first:**

- **[AEO] FAQPage schema** — No FAQPage schema
  - *Fix:* Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change.
- **[AEO] Answers are 40-60 words** — Answers are the wrong length (12.5% of answers)
  - *Fix:* Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot.
- **[SEO] Trust pages exist** — Missing core pages: Contact page
  - *Fix:* Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source.

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
   - Problem: Answers are the wrong length (12.5% of answers)
   - Do this: Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot.

### P1 — Quick wins

Low effort, clear payoff, mostly on-page markup and copy edits.

1. **[GEO] Cites authoritative sources**
   - Problem: Only 1 authority citation(s): developers.google.com
   - Do this: Link to 3+ credible sources (industry data, government, research, manufacturer specs). AI engines preferentially cite content that itself cites sources.
2. **[GEO] Named author**
   - Problem: No author byline found
   - Do this: Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh.
3. **[GEO] Content type schema**
   - Problem: No Article / Product / Service schema
   - Do this: Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question.
4. **[GEO] Publish / update dates**
   - Problem: No datePublished / dateModified found
   - Do this: Add visible and machine-readable publish and last-updated dates.
5. **[GEO] E-E-A-T surface area**
   - Problem: Only 4/8 trust pages found (missing: contact, blog, shipping, faq)
   - Do this: Publish About, Contact, Privacy, Terms, Shipping and Returns pages. AI engines check whether a store is a real, accountable business before recommending it.
6. **[SEO] Keyword alignment**
   - Problem: 'seo audits' only appears in: H1
   - Do this: Put the primary keyword in the title, the H1, the URL slug and the first 100 words.
7. **[SEO] Trust pages exist**
   - Problem: Missing core pages: Contact page
   - Do this: Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source.

### P2 — Nice to have

Do these after P0 and P1.

1. **[AEO] Definition-style openers**
   - Problem: No answer opens with a definition
   - Do this: Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern.
2. **[AEO] Tables for comparison**
   - Problem: No tables on the page
   - Do this: Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.
3. **[AEO] HowTo schema**
   - Problem: No HowTo schema (only needed if you publish step-by-step guides)
   - Do this: For any process/installation/guide page, add HowTo JSON-LD with numbered steps.
4. **[GEO] Semantic HTML landmarks**
   - Problem: Only found: nav
   - Do this: Wrap content in <main> and <article> and use <nav>. Landmarks help extraction pipelines isolate the real content from the chrome.
5. **[CONTENT] Text-to-HTML ratio**
   - Problem: Low (9.6%)
   - Do this: Reduce markup around the content: fewer wrapper divs, less inline CSS/JS.

## 8. All checks in detail

### SEO — Search Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Page is indexable | ✅ PASS | meta robots: 'index, follow' | — |
| Canonical tag | ✅ PASS | https://seo.danielpetrica.com (self-referencing site) | — |
| Title tag length | ✅ PASS | Good length (54 chars) | — |
| Meta description length | ✅ PASS | Good length (152 chars) | — |
| Exactly one H1 | ✅ PASS | H1: SEO audits that run themselves | — |
| Heading hierarchy | ✅ PASS | No skipped heading levels | — |
| Keyword alignment | ⚠️ WARN | 'seo audits' only appears in: H1 | Put the primary keyword in the title, the H1, the URL slug and the first 100 words. |
| Internal links in body | ✅ PASS | Good internal linking (37 links) | — |
| Navigational links | ℹ️ INFO | 24 links inside <nav>/<header> | — |
| Outbound links | ✅ PASS | 1 external links, 0 nofollow | — |
| Image alt text | ✅ PASS | Good alt coverage (0.0% missing) | — |
| Open Graph tags | ✅ PASS | og:title, og:description, og:image present | — |
| Structured data present | ✅ PASS | 6 type(s): AggregateOffer, ImageObject, Organization, Person, WebApplication, WebSite | — |
| URL structure | ✅ PASS | Clean, lowercase, descriptive | — |
| Resolved URL | ℹ️ INFO | https://seo.danielpetrica.com/ | — |
| Trust pages exist | ❌ FAIL | Missing core pages: Contact page | Publish About, Contact, Privacy Policy and Terms pages. They are E-E-A-T signals and AI engines check them before citing a source. |

### Technical SEO

| Check | Status | Detail | Fix |
|---|---|---|---|
| HTTPS enabled | ✅ PASS | Served over HTTPS from seo.danielpetrica.com | — |
| http redirects to https | ✅ PASS | http:// -> https://seo.danielpetrica.com/ | — |
| One canonical hostname | ℹ️ INFO | Only one host variant responded, so this is fine | — |
| Server response time | ✅ PASS | Fast (0.14s) | — |
| HTML page weight | ✅ PASS | Lean (11.7 KB) | — |
| Text compression | ✅ PASS | content-encoding: gzip | — |
| Render-blocking head resources | ✅ PASS | Few (3 files) | — |
| Cache headers | ✅ PASS | cache-control: max-age=7200, public, stale-while-revalidate=21600 | — |
| Content present in the served HTML | ✅ PASS | 1050 words of visible text are in the HTML response | — |
| robots.txt present | ✅ PASS | HTTP 200, 1 sitemap directive(s) | — |
| XML sitemap | ✅ PASS | https://seo.danielpetrica.com/sitemap.xml — 111 URLs | — |
| Mobile viewport | ✅ PASS | viewport: width=device-width, initial-scale=1 | — |
| Language declared | ✅ PASS | html lang="en" | — |
| Broken internal links | ⏭️ SKIP | No internal links were sampled | — |

### Content

| Check | Status | Detail | Fix |
|---|---|---|---|
| Subheadings (H2) | ✅ PASS | Well structured (9 H2s) | — |
| Content depth | ✅ PASS | Substantial (1050 words) | — |
| Primary topic detected | ✅ PASS | 'seo audits' (from title/H1/URL) | — |
| Text-to-HTML ratio | ⚠️ WARN | Low (9.6%) | Reduce markup around the content: fewer wrapper divs, less inline CSS/JS. |

### AEO — Answer Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| FAQPage schema | ❌ FAIL | No FAQPage schema | Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change. |
| HowTo schema | ⚠️ WARN | No HowTo schema (only needed if you publish step-by-step guides) | For any process/installation/guide page, add HowTo JSON-LD with numbered steps. |
| Q&A schema | ℹ️ INFO | No QAPage/Question schema (optional) | — |
| Speakable schema | ℹ️ INFO | No speakable markup (optional, voice-assistant only) | — |
| Question-form headings | ✅ PASS | Strong question coverage (8 questions) | — |
| Answers are 40-60 words | ❌ FAIL | Answers are the wrong length (12.5% of answers) | Right under each question heading, put a 40-60 word answer in plain language before you expand. That is the snippet sweet spot. |
| Definition-style openers | ⚠️ WARN | No answer opens with a definition | Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern. |
| Bulleted / numbered lists | ✅ PASS | 3 list(s) found | — |
| Tables for comparison | ⚠️ WARN | No tables on the page | Add at least one comparison or specification table. Tables are prime snippet and AI-summary material. |
| Descriptive headings | ✅ PASS | Headings are descriptive (0.0% vague) | — |
| Sentence length | ✅ PASS | Easy to quote (80 sentences analysed) (11.1 words/sentence) | — |
| Answer-first intro | ✅ PASS | First paragraph is 28 words — good for an intro snippet | — |
| Summary / key-takeaways block | ✅ PASS | A summary-style section is present | — |
| BreadcrumbList schema | ℹ️ INFO | No BreadcrumbList schema | — |

### GEO — Generative Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Content readable without JavaScript | ✅ PASS | 1050 words are present in the raw HTML response | — |
| AI crawlers allowed | ✅ PASS | No AI crawler is blocked. Allowed: gptbot, chatgpt-user, oai-searchbot, claudebot, anthropic-ai, claude-web, perplexitybot, perplexity-user | — |
| Cites authoritative sources | ⚠️ WARN | Only 1 authority citation(s): developers.google.com | Link to 3+ credible sources (industry data, government, research, manufacturer specs). AI engines preferentially cite content that itself cites sources. |
| Quantitative facts | ✅ PASS | Good density of numbers (6.29 stats/100 words) | — |
| Named author | ⚠️ WARN | No author byline found | Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh. |
| Person schema | ✅ PASS | Person JSON-LD found | — |
| Organization / LocalBusiness schema | ✅ PASS | Found: organization, website with sameAs | — |
| Entity-rich content | ✅ PASS | Entity-rich (14.67 proper nouns/100 words) | — |
| Publish / update dates | ⚠️ WARN | No datePublished / dateModified found | Add visible and machine-readable publish and last-updated dates. |
| Content type schema | ⚠️ WARN | No Article / Product / Service schema | Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question. |
| Machine-parseable formatting | ✅ PASS | 0 table(s), 3 list(s) | — |
| Q&A pairs for summarisation | ✅ PASS | 8 question/answer pair(s) | — |
| llms.txt | ✅ PASS | Found (629 bytes) — an emerging convention for telling AI crawlers what matters | — |
| E-E-A-T surface area | ⚠️ WARN | Only 4/8 trust pages found (missing: contact, blog, shipping, faq) | Publish About, Contact, Privacy, Terms, Shipping and Returns pages. AI engines check whether a store is a real, accountable business before recommending it. |
| Semantic HTML landmarks | ⚠️ WARN | Only found: nav | Wrap content in <main> and <article> and use <nav>. Landmarks help extraction pipelines isolate the real content from the chrome. |
| Quotable sentence length | ✅ PASS | Easily quotable (11.1 words/sentence) | — |
| Third-party presence (Reddit, Quora, industry sites) | ℹ️ INFO | Not auto-checked — this tool does not query reddit/quora without a SERP key. AI engines lean on sources they have already seen discussed elsewhere. | Manually search `<brand> site:reddit.com`, `<brand> site:quora.com` and your top 3 industry publications. If nothing comes up, that is your GEO gap: contribute genuine answers and get listed in industry directories and comparison articles. |

## 9. Evidence collected

### On-page facts

| Item | Value |
|---|---|
| Title | SEO by Daniel - Automated SEO Auditing for Freelancers (54 chars) |
| Meta description | Add a domain, we auto-discover pages via your sitemap, run 20+ on-page checks, and give you a client-ready scored report. No setup. No manual URL entry. (152 chars) |
| H1 | SEO audits that run themselves |
| Headings | hh1=1, hh2=9, hh3=19, hh4=0, hh5=0, hh6=0 |
| Word count | 1050 |
| Internal / external links | 61 / 1 |
| Authority citations | 1 |
| Images (missing alt) | 1 (0) |
| Schema types | AggregateOffer, ImageObject, Organization, Person, WebApplication, WebSite |
| Tables / lists | 0 / 3 |
| Q&A blocks (40-60 words) | 8 (1) |
| Author | (none) |
| Dates | (none) |
| Stats per 100 words | 6.29 |
| Avg sentence length | 11.1 words |
| Text/HTML ratio | 9.6% |
| Canonical | https://seo.danielpetrica.com |
| Meta robots | index, follow |
| Viewport | width=device-width, initial-scale=1 |

### Site-level facts

| Item | Value |
|---|---|
| Response time | 0.14s |
| Server | cloudflare |
| CDN | Cloudflare |
| Compression | gzip |
| HTTP → HTTPS | https://seo.danielpetrica.com/ |
| www variant | not applicable |
| robots.txt | HTTP 200 (1 groups) |
| AI crawlers blocked | none 🎉 |
| Sitemap | https://seo.danielpetrica.com/sitemap.xml — 111 URLs |
| llms.txt | present |
| Missing security headers | strict-transport-security, x-content-type-options, x-frame-options, content-security-policy, referrer-policy, permissions-policy |
| Broken links found | 0 of 0 sampled |
| Trust pages | {"about": 200, "contact": 0, "privacy": 200, "terms": 200, "blog": 0, "shipping": 0, "returns": 200, "faq": 0} |

## 10. Caveats and limits

- Every third-party metric (authority score, traffic, search volume) is an **estimate** from that vendor's own index, not Google's data. Google Search Console is the only source of truth for your own site.
- Authority scores from different vendors are **different scales**. An Open PageRank score of 6/10 is not 'DR 60' and the two must never be merged into one column.
- Domain Rating / Authority Score is a **third-party link metric**. It does not guarantee ranking, and a low score does not prevent ranking.
- This tool does not use shared or group-buy tool accounts. That breaches vendor terms of service and exposes client data.
- It does not scrape Google's HTML results. SERP data comes from a paid API if a key is supplied, otherwise competitors must be passed in with `--competitors`.

---

_Generated by seo-tool on 2026-10-15 13:41 UTC._