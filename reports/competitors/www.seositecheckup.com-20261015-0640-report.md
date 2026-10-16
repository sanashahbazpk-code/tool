# SEO / AEO / GEO Research Report

**Target:** https://www.seositecheckup.com/  
**Generated:** 2026-10-15 13:40 UTC  
**Tool:** seo-tool (SEO + AEO + GEO auditor)

---

## 1. Scoreboard

| Discipline | Score | Grade | What it covers |
|---|---|---|---|
| **SEO** — Search Engine Optimisation | 72.9/100 | C | Ranking pages on Google: keywords, on-page, technical, internal links |
| **AEO** — Answer Engine Optimisation | 86.6/100 | B | Featured snippets, People Also Ask, voice answers |
| **GEO** — Generative Engine Optimisation | 69.0/100 | D | Being cited or summarised by ChatGPT, Perplexity, Gemini, AI Overviews |
| **Overall** | **76.2/100** | **C** |  |

Checks run: **65** — 37 pass, 18 warnings, 3 failures, 6 informational, 1 skipped.

## 2. Executive summary

**Top problems, highest impact first:**

- **[GEO] AI crawlers allowed** — robots.txt blocks: bytespider
  - *Fix:* Un-block the AI crawlers you want citations from (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot). If they cannot fetch the page, ChatGPT, Claude and Perplexity will never quote it. This is the single most common reason a site is invisible in AI answers.
- **[SEO] Title tag length** — Too long/short (71 chars)
  - *Fix:* Keep titles 30-60 characters so they are not truncated in the SERP. Front-load the primary keyword.
- **[CONTENT] Text-to-HTML ratio** — Very low (code-heavy page) (7.5%)
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

1. **[GEO] AI crawlers allowed**
   - Problem: robots.txt blocks: bytespider
   - Do this: Un-block the AI crawlers you want citations from (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot). If they cannot fetch the page, ChatGPT, Claude and Perplexity will never quote it. This is the single most common reason a site is invisible in AI answers.

### P1 — Quick wins

Low effort, clear payoff, mostly on-page markup and copy edits.

1. **[GEO] Cites authoritative sources**
   - Problem: Only 1 authority citation(s): www.linkedin.com
   - Do this: Link to 3+ credible sources (industry data, government, research, manufacturer specs). AI engines preferentially cite content that itself cites sources.
2. **[GEO] Quantitative facts**
   - Problem: Few numbers (1.27 stats/100 words)
   - Do this: Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives.
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
7. **[SEO] Exactly one H1**
   - Problem: 2 H1s found: ['Reclaim Lost Traffic with LLM-Ready SEO Intelligence', 'Get unlimited checks, saved reports & competitor tracking.']
   - Do this: Keep a single H1 per page; demote the others to H2.
8. **[SEO] Keyword alignment**
   - Problem: 'reclaim lost' only appears in: title, H1
   - Do this: Put the primary keyword in the title, the H1, the URL slug and the first 100 words.
9. **[TECHNICAL] Server response time**
   - Problem: Acceptable (0.96s)
   - Do this: Target under 0.8s. Enable full-page caching, upgrade the host, and put Cloudflare in front.
10. **[SEO] Title tag length**
   - Problem: Too long/short (71 chars)
   - Do this: Keep titles 30-60 characters so they are not truncated in the SERP. Front-load the primary keyword.
11. **[SEO] Trust pages exist**
   - Problem: Found: About page, Contact page, Privacy policy, Terms of service, Blog / news section, Returns / refund policy, FAQ page | Missing: Shipping policy
   - Do this: Add the remaining policy/FAQ pages.
12. **[CONTENT] Text-to-HTML ratio**
   - Problem: Very low (code-heavy page) (7.5%)
   - Do this: Reduce markup around the content: fewer wrapper divs, less inline CSS/JS.

### P2 — Nice to have

Do these after P0 and P1.

1. **[AEO] Answer-first intro**
   - Problem: First paragraph is 8 words
   - Do this: Open with a 40-60 word paragraph that directly answers the page's main question, then expand.
2. **[AEO] Definition-style openers**
   - Problem: No answer opens with a definition
   - Do this: Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern.
3. **[AEO] Tables for comparison**
   - Problem: No tables on the page
   - Do this: Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.
4. **[SEO] Heading hierarchy**
   - Problem: 1 level jump(s), e.g. H1 -> H3
   - Do this: Do not skip heading levels. Outline the page H1 > H2 > H3 so search engines and AI can parse the structure.
5. **[SEO] Image alt text**
   - Problem: Some images missing alt (28.2% missing)
   - Do this: Write descriptive alt text for every image — it feeds image search, accessibility and AI understanding.
6. **[AEO] HowTo schema**
   - Problem: No HowTo schema (only needed if you publish step-by-step guides)
   - Do this: For any process/installation/guide page, add HowTo JSON-LD with numbered steps.
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
| Page is indexable | ✅ PASS | meta robots: 'index, follow' | — |
| Canonical tag | ✅ PASS | https://seositecheckup.com/ (self-referencing site) | — |
| Title tag length | ❌ FAIL | Too long/short (71 chars) | Keep titles 30-60 characters so they are not truncated in the SERP. Front-load the primary keyword. |
| Meta description length | ✅ PASS | Good length (126 chars) | — |
| Exactly one H1 | ⚠️ WARN | 2 H1s found: ['Reclaim Lost Traffic with LLM-Ready SEO Intelligence', 'Get unlimited checks, saved reports & competitor tracking.'] | Keep a single H1 per page; demote the others to H2. |
| Heading hierarchy | ⚠️ WARN | 1 level jump(s), e.g. H1 -> H3 | Do not skip heading levels. Outline the page H1 > H2 > H3 so search engines and AI can parse the structure. |
| Keyword alignment | ⚠️ WARN | 'reclaim lost' only appears in: title, H1 | Put the primary keyword in the title, the H1, the URL slug and the first 100 words. |
| Internal links in body | ✅ PASS | Good internal linking (60 links) | — |
| Navigational links | ℹ️ INFO | 39 links inside <nav>/<header> | — |
| Outbound links | ✅ PASS | 4 external links, 0 nofollow | — |
| Image alt text | ⚠️ WARN | Some images missing alt (28.2% missing) | Write descriptive alt text for every image — it feeds image search, accessibility and AI understanding. |
| Open Graph tags | ✅ PASS | og:title, og:description, og:image present | — |
| Structured data present | ✅ PASS | 10 type(s): AggregateOffer, Answer, BusinessAudience, ContactPoint, FAQPage, Organization, Question, SoftwareApplication | — |
| URL structure | ✅ PASS | Clean, lowercase, descriptive | — |
| Resolved URL | ℹ️ INFO | https://seositecheckup.com/ | — |
| Trust pages exist | ⚠️ WARN | Found: About page, Contact page, Privacy policy, Terms of service, Blog / news section, Returns / refund policy, FAQ page \| Missing: Shipping policy | Add the remaining policy/FAQ pages. |

### Technical SEO

| Check | Status | Detail | Fix |
|---|---|---|---|
| HTTPS enabled | ✅ PASS | Served over HTTPS from seositecheckup.com | — |
| http redirects to https | ✅ PASS | http:// -> https://seositecheckup.com/ | — |
| One canonical hostname | ✅ PASS | https://www.seositecheckup.com/ -> https://seositecheckup.com (good) | — |
| Server response time | ⚠️ WARN | Acceptable (0.96s) | Target under 0.8s. Enable full-page caching, upgrade the host, and put Cloudflare in front. |
| HTML page weight | ✅ PASS | Lean (38.4 KB) | — |
| Text compression | ✅ PASS | content-encoding: gzip | — |
| Render-blocking head resources | ⚠️ WARN | Several (11 files) | Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint. |
| Cache headers | ⚠️ WARN | No cache-control header on the HTML response | Add Cache-Control and an ETag so repeat visits and crawls are cheap. |
| Content present in the served HTML | ✅ PASS | 2525 words of visible text are in the HTML response | — |
| robots.txt present | ✅ PASS | HTTP 200, 1 sitemap directive(s) | — |
| XML sitemap | ✅ PASS | https://seositecheckup.com/sitemap_index.xml — 802 URLs across 35 child sitemaps | — |
| Mobile viewport | ✅ PASS | viewport: width=device-width | — |
| Language declared | ✅ PASS | html lang="en" | — |
| Broken internal links | ⏭️ SKIP | No internal links were sampled | — |

### Content

| Check | Status | Detail | Fix |
|---|---|---|---|
| Subheadings (H2) | ✅ PASS | Well structured (13 H2s) | — |
| Content depth | ✅ PASS | Substantial (2525 words) | — |
| Primary topic detected | ✅ PASS | 'reclaim lost' (from title/H1/URL) | — |
| Text-to-HTML ratio | ❌ FAIL | Very low (code-heavy page) (7.5%) | Reduce markup around the content: fewer wrapper divs, less inline CSS/JS. |

### AEO — Answer Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| FAQPage schema | ✅ PASS | FAQPage JSON-LD found — eligible for FAQ rich results and easy for AI to quote | — |
| HowTo schema | ⚠️ WARN | No HowTo schema (only needed if you publish step-by-step guides) | For any process/installation/guide page, add HowTo JSON-LD with numbered steps. |
| Q&A schema | ✅ PASS | Found: answer, question | — |
| Speakable schema | ℹ️ INFO | No speakable markup (optional, voice-assistant only) | — |
| Question-form headings | ✅ PASS | Strong question coverage (8 questions) | — |
| Answers are 40-60 words | ✅ PASS | Good snippet-length answers (75.0% of answers) | — |
| Definition-style openers | ⚠️ WARN | No answer opens with a definition | Open key answers with '<Thing> is <plain-language definition>'. Featured snippets and AI summaries both latch onto that pattern. |
| Bulleted / numbered lists | ✅ PASS | 19 list(s) found | — |
| Tables for comparison | ⚠️ WARN | No tables on the page | Add at least one comparison or specification table. Tables are prime snippet and AI-summary material. |
| Descriptive headings | ✅ PASS | Headings are descriptive (0.0% vague) | — |
| Sentence length | ✅ PASS | Easy to quote (116 sentences analysed) (11.67 words/sentence) | — |
| Answer-first intro | ⚠️ WARN | First paragraph is 8 words | Open with a 40-60 word paragraph that directly answers the page's main question, then expand. |
| Summary / key-takeaways block | ✅ PASS | A summary-style section is present | — |
| BreadcrumbList schema | ℹ️ INFO | No BreadcrumbList schema | — |

### GEO — Generative Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Content readable without JavaScript | ✅ PASS | 2525 words are present in the raw HTML response | — |
| AI crawlers allowed | ❌ FAIL | robots.txt blocks: bytespider | Un-block the AI crawlers you want citations from (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot). If they cannot fetch the page, ChatGPT, Claude and Perplexity will never quote it. This is the single most common reason a site is invisible in AI answers. |
| Cites authoritative sources | ⚠️ WARN | Only 1 authority citation(s): www.linkedin.com | Link to 3+ credible sources (industry data, government, research, manufacturer specs). AI engines preferentially cite content that itself cites sources. |
| Quantitative facts | ⚠️ WARN | Few numbers (1.27 stats/100 words) | Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives. |
| Named author | ⚠️ WARN | No author byline found | Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh. |
| Person schema | ⚠️ WARN | No Person schema | Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity. |
| Organization / LocalBusiness schema | ✅ PASS | Found: organization, website with sameAs | — |
| Entity-rich content | ✅ PASS | Entity-rich (22.38 proper nouns/100 words) | — |
| Publish / update dates | ⚠️ WARN | No datePublished / dateModified found | Add visible and machine-readable publish and last-updated dates. |
| Content type schema | ⚠️ WARN | No Article / Product / Service schema | Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question. |
| Machine-parseable formatting | ✅ PASS | 0 table(s), 19 list(s) | — |
| Q&A pairs for summarisation | ✅ PASS | 8 question/answer pair(s) | — |
| llms.txt | ℹ️ INFO | No /llms.txt (optional; the convention is still emerging, low cost to add: a markdown index of your key pages) | — |
| E-E-A-T surface area | ✅ PASS | Trust pages found: 7/8 | — |
| Semantic HTML landmarks | ✅ PASS | Using: <article>, <main>, <nav> | — |
| Quotable sentence length | ✅ PASS | Easily quotable (11.67 words/sentence) | — |
| Third-party presence (Reddit, Quora, industry sites) | ℹ️ INFO | Not auto-checked — this tool does not query reddit/quora without a SERP key. AI engines lean on sources they have already seen discussed elsewhere. | Manually search `<brand> site:reddit.com`, `<brand> site:quora.com` and your top 3 industry publications. If nothing comes up, that is your GEO gap: contribute genuine answers and get listed in industry directories and comparison articles. |

## 9. Evidence collected

### On-page facts

| Item | Value |
|---|---|
| Title | Reclaim Lost Traffic with LLM-Ready SEO Intelligence \| SEO Site Checkup (71 chars) |
| Meta description | Get SEO insights by page group. AI brand visibility. Domain-level audits. Keyword tracking. Backlinks checker. Plus much more. (126 chars) |
| H1 | Reclaim Lost Traffic with LLM-Ready SEO Intelligence; Get unlimited checks, saved reports & competitor tracking. |
| Headings | hh1=2, hh2=13, hh3=31, hh4=0, hh5=0, hh6=0 |
| Word count | 2525 |
| Internal / external links | 99 / 4 |
| Authority citations | 1 |
| Images (missing alt) | 39 (11) |
| Schema types | AggregateOffer, Answer, BusinessAudience, ContactPoint, FAQPage, Organization, Question, SoftwareApplication, WebPage, WebSite |
| Tables / lists | 0 / 19 |
| Q&A blocks (40-60 words) | 8 (6) |
| Author | (none) |
| Dates | (none) |
| Stats per 100 words | 1.27 |
| Avg sentence length | 11.67 words |
| Text/HTML ratio | 7.5% |
| Canonical | https://seositecheckup.com/ |
| Meta robots | index, follow |
| Viewport | width=device-width |

### Site-level facts

| Item | Value |
|---|---|
| Response time | 0.96s |
| Server | AmazonS3 |
| CDN | yes (edge/CDN headers present) |
| Compression | gzip |
| HTTP → HTTPS | https://seositecheckup.com/ |
| www variant | https://www.seositecheckup.com/ -> https://seositecheckup.com (good) |
| robots.txt | HTTP 200 (6 groups) |
| AI crawlers blocked | bytespider |
| Sitemap | https://seositecheckup.com/sitemap_index.xml — 802 URLs |
| llms.txt | absent |
| Missing security headers | strict-transport-security, x-content-type-options, x-frame-options, content-security-policy, referrer-policy, permissions-policy |
| Broken links found | 0 of 0 sampled |
| Trust pages | {"about": 200, "contact": 200, "privacy": 200, "terms": 200, "blog": 200, "shipping": 0, "returns": 200, "faq": 200} |

## 10. Caveats and limits

- Every third-party metric (authority score, traffic, search volume) is an **estimate** from that vendor's own index, not Google's data. Google Search Console is the only source of truth for your own site.
- Authority scores from different vendors are **different scales**. An Open PageRank score of 6/10 is not 'DR 60' and the two must never be merged into one column.
- Domain Rating / Authority Score is a **third-party link metric**. It does not guarantee ranking, and a low score does not prevent ranking.
- This tool does not use shared or group-buy tool accounts. That breaches vendor terms of service and exposes client data.
- It does not scrape Google's HTML results. SERP data comes from a paid API if a key is supplied, otherwise competitors must be passed in with `--competitors`.

---

_Generated by seo-tool on 2026-10-15 13:40 UTC._