# SEO / AEO / GEO Research Report

**Target:** https://example.com/  
**Generated:** 2026-10-15 12:57 UTC  
**Tool:** seo-tool (SEO + AEO + GEO auditor)

---

## 1. Scoreboard

| Discipline | Score | Grade | What it covers |
|---|---|---|---|
| **SEO** — Search Engine Optimisation | 48.8/100 | F | Ranking pages on Google: keywords, on-page, technical, internal links |
| **AEO** — Answer Engine Optimisation | 25.8/100 | F | Featured snippets, People Also Ask, voice answers |
| **GEO** — Generative Engine Optimisation | 32.6/100 | F | Being cited or summarised by ChatGPT, Perplexity, Gemini, AI Overviews |
| **Overall** | **35.7/100** | **F** |  |

Checks run: **61** — 13 pass, 18 warnings, 16 failures, 9 informational, 5 skipped.

## 2. Executive summary

**Top problems, highest impact first:**

- **[AEO] FAQPage schema** — No FAQPage schema
  - *Fix:* Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change.
- **[GEO] Cites authoritative sources** — No outbound links to authoritative sources
  - *Fix:* Add citations: link claims to primary sources. Pages with visible sourcing are dramatically more likely to be quoted by ChatGPT, Perplexity and Google AI Overviews.
- **[AEO] Question-form headings** — No question headings (0 questions)
  - *Fix:* Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
- **[AEO] Answers are 40-60 words** — No question/answer pairs detected on the page
  - *Fix:* Add a FAQ section: question as the heading, 40-60 word answer immediately below.
- **[GEO] Quantitative facts** — Almost no data (0.0 stats/100 words)
  - *Fix:* Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives.
- **[GEO] Organization / LocalBusiness schema** — No Organization or LocalBusiness schema
  - *Fix:* Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand.
- **[TECHNICAL] XML sitemap** — No sitemap found at /sitemap.xml or declared in robots.txt
  - *Fix:* Generate an XML sitemap, list every canonical URL in it, and declare it in robots.txt.
- **[SEO] Exactly one H1** — No H1 on the page
  - *Fix:* Add one H1 that states what the page is about, using the primary keyword naturally.

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
   - Problem: No question/answer pairs detected on the page
   - Do this: Add a FAQ section: question as the heading, 40-60 word answer immediately below.
4. **[AEO] Question-form headings**
   - Problem: No question headings (0 questions)
   - Do this: Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
5. **[GEO] Organization / LocalBusiness schema**
   - Problem: No Organization or LocalBusiness schema
   - Do this: Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand.
6. **[GEO] Quantitative facts**
   - Problem: Almost no data (0.0 stats/100 words)
   - Do this: Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives.

### P1 — Quick wins

Low effort, clear payoff, mostly on-page markup and copy edits.

1. **[GEO] Named author**
   - Problem: No author byline found
   - Do this: Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh.
2. **[GEO] Person schema**
   - Problem: No Person schema
   - Do this: Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity.
3. **[GEO] Content type schema**
   - Problem: No Article / Product / Service schema
   - Do this: Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question.
4. **[GEO] Publish / update dates**
   - Problem: No datePublished / dateModified found
   - Do this: Add visible and machine-readable publish and last-updated dates.
5. **[GEO] Q&A pairs for summarisation**
   - Problem: No question-and-answer structure
   - Do this: Add an FAQ block. It is what Perplexity and AI Overviews quote most often.
6. **[GEO] Machine-parseable formatting**
   - Problem: No tables or lists on the page
   - Do this: Use tables for comparisons and specs, and lists for options and steps. Plain prose is much harder for an AI to lift cleanly.
7. **[SEO] Canonical tag**
   - Problem: No rel=canonical found
   - Do this: Add a self-referencing canonical to every indexable page to stop duplicate-URL dilution.
8. **[SEO] Exactly one H1**
   - Problem: No H1 on the page
   - Do this: Add one H1 that states what the page is about, using the primary keyword naturally.
9. **[SEO] Internal links in body**
   - Problem: Almost none (0 links)
   - Do this: Add contextual internal links from this page to related products, categories and guides. Internal links spread authority and help crawlers.
10. **[SEO] Keyword alignment**
   - Problem: 'example domain' only appears in: title
   - Do this: Put the primary keyword in the title, the H1, the URL slug and the first 100 words.
11. **[SEO] Meta description**
   - Problem: Missing
   - Do this: Write a unique 120-160 character description with the keyword and a reason to click. Google rewrites it often, but it still lifts CTR.
12. **[SEO] Structured data present**
   - Problem: No JSON-LD or microdata found
   - Do this: Add JSON-LD: Organization on the homepage, Product/Service on offer pages, BreadcrumbList sitewide, Article on blog posts.

### P2 — Nice to have

Do these after P0 and P1.

1. **[AEO] Bulleted / numbered lists**
   - Problem: No <ul>/<ol> on the page
   - Do this: Convert features, specs, steps and options into bullet lists. Lists are far easier to lift into an answer box.
2. **[AEO] Summary / key-takeaways block**
   - Problem: No summary or key-takeaways section
   - Do this: Add a short "Key takeaways" or "Quick answer" box near the top. This is what both snippets and AI summaries grab first.
3. **[AEO] Tables for comparison**
   - Problem: No tables on the page
   - Do this: Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.
4. **[TECHNICAL] robots.txt present**
   - Problem: HTTP 404
   - Do this: Publish a robots.txt at the site root so crawlers know the rules.
5. **[AEO] HowTo schema**
   - Problem: No HowTo schema (only needed if you publish step-by-step guides)
   - Do this: For any process/installation/guide page, add HowTo JSON-LD with numbered steps.
6. **[GEO] Semantic HTML landmarks**
   - Problem: Only found: none
   - Do this: Wrap content in <main> and <article> and use <nav>. Landmarks help extraction pipelines isolate the real content from the chrome.
7. **[TECHNICAL] Cache headers**
   - Problem: No cache-control header on the HTML response
   - Do this: Add Cache-Control and an ETag so repeat visits and crawls are cheap.
8. **[SEO] Open Graph tags**
   - Problem: No Open Graph tags at all
   - Do this: Add og:title, og:description and og:image.
9. **[TECHNICAL] Language declared**
   - Problem: No lang attribute on <html>
   - Do this: Add lang="en" (or the correct language) — it helps both search and screen readers.

## 8. All checks in detail

### SEO — Search Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Page is indexable | ✅ PASS | meta robots: 'not set (indexable by default)' | — |
| Canonical tag | ⚠️ WARN | No rel=canonical found | Add a self-referencing canonical to every indexable page to stop duplicate-URL dilution. |
| Title tag length | ⚠️ WARN | Title is only 14 characters — too thin | Write a descriptive 30-60 character title that names the product or service and the location. |
| Meta description | ⚠️ WARN | Missing | Write a unique 120-160 character description with the keyword and a reason to click. Google rewrites it often, but it still lifts CTR. |
| Exactly one H1 | ❌ FAIL | No H1 on the page | Add one H1 that states what the page is about, using the primary keyword naturally. |
| Heading hierarchy | ✅ PASS | No skipped heading levels | — |
| Keyword alignment | ⚠️ WARN | 'example domain' only appears in: title | Put the primary keyword in the title, the H1, the URL slug and the first 100 words. |
| Internal links in body | ❌ FAIL | Almost none (0 links) | Add contextual internal links from this page to related products, categories and guides. Internal links spread authority and help crawlers. |
| Navigational links | ℹ️ INFO | 0 links inside <nav>/<header> | — |
| Outbound links | ℹ️ INFO | No outbound links | — |
| Image alt text | ℹ️ INFO | No images on the page | — |
| Open Graph tags | ⚠️ WARN | No Open Graph tags at all | Add og:title, og:description and og:image. |
| Structured data present | ❌ FAIL | No JSON-LD or microdata found | Add JSON-LD: Organization on the homepage, Product/Service on offer pages, BreadcrumbList sitewide, Article on blog posts. |
| URL structure | ✅ PASS | Clean, lowercase, descriptive | — |
| Resolved URL | ℹ️ INFO | https://example.com/ | — |

### Technical SEO

| Check | Status | Detail | Fix |
|---|---|---|---|
| HTTPS enabled | ✅ PASS | Served over HTTPS from example.com | — |
| http redirects to https | ❌ FAIL | http:// returned status 200 and did not land on https | Add a server-level 301 from http:// to https:// for every URL. |
| One canonical hostname | ❌ FAIL | Both example.com and www.example.com return 200 | Pick one (usually https://www or https://apex), 301 the other to it, and make sure the canonical tag matches. |
| Server response time | ✅ PASS | Fast (0.28s) | — |
| HTML page weight | ✅ PASS | Lean (0.4 KB) | — |
| Text compression | ✅ PASS | content-encoding: gzip | — |
| Render-blocking head resources | ✅ PASS | Few (0 files) | — |
| Cache headers | ⚠️ WARN | No cache-control header on the HTML response | Add Cache-Control and an ETag so repeat visits and crawls are cheap. |
| robots.txt present | ⚠️ WARN | HTTP 404 | Publish a robots.txt at the site root so crawlers know the rules. |
| XML sitemap | ❌ FAIL | No sitemap found at /sitemap.xml or declared in robots.txt | Generate an XML sitemap, list every canonical URL in it, and declare it in robots.txt. |
| Mobile viewport | ✅ PASS | viewport: width=device-width,initial-scale=1 | — |
| Language declared | ⚠️ WARN | No lang attribute on <html> | Add lang="en" (or the correct language) — it helps both search and screen readers. |
| Broken internal links | ⏭️ SKIP | No internal links were sampled | — |

### Content

| Check | Status | Detail | Fix |
|---|---|---|---|
| Subheadings (H2) | ❌ FAIL | Almost no structure (0 H2s) | Break the page into H2 sections. Long unbroken text is hard to scan and hard for AI to quote. |
| Content depth | ❌ FAIL | Thin content (25 words) | Expand to at least 600 words of genuinely useful detail. Cover the questions a buyer asks before purchasing. |
| Primary topic detected | ✅ PASS | 'example domain' (from title/H1/URL) | — |
| Text-to-HTML ratio | ✅ PASS | Good (27.0%) | — |

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
| Bulleted / numbered lists | ⚠️ WARN | No <ul>/<ol> on the page | Convert features, specs, steps and options into bullet lists. Lists are far easier to lift into an answer box. |
| Tables for comparison | ⚠️ WARN | No tables on the page | Add at least one comparison or specification table. Tables are prime snippet and AI-summary material. |
| Descriptive headings | ❌ FAIL | No headings at all | Add an H1 and H2 sections. |
| Sentence length | ⏭️ SKIP | Only 2 sentence(s) with terminal punctuation were found, so readability cannot be judged reliably (common on list-heavy product and category pages) | — |
| Answer-first intro | ✅ PASS | First paragraph is 25 words — good for an intro snippet | — |
| Summary / key-takeaways block | ⚠️ WARN | No summary or key-takeaways section | Add a short "Key takeaways" or "Quick answer" box near the top. This is what both snippets and AI summaries grab first. |
| BreadcrumbList schema | ℹ️ INFO | No BreadcrumbList schema | — |

### GEO — Generative Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| AI crawlers allowed | ⏭️ SKIP | robots.txt not readable, so crawler access could not be checked | — |
| Cites authoritative sources | ❌ FAIL | No outbound links to authoritative sources | Add citations: link claims to primary sources. Pages with visible sourcing are dramatically more likely to be quoted by ChatGPT, Perplexity and Google AI Overviews. |
| Quantitative facts | ❌ FAIL | Almost no data (0.0 stats/100 words) | Add concrete numbers: prices, dimensions, weights, success rates, timelines. AI summarisers prefer specific, verifiable statements over marketing adjectives. |
| Named author | ⚠️ WARN | No author byline found | Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh. |
| Person schema | ⚠️ WARN | No Person schema | Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity. |
| Organization / LocalBusiness schema | ❌ FAIL | No Organization or LocalBusiness schema | Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand. |
| Entity-rich content | ✅ PASS | Entity-rich (8.0 proper nouns/100 words) | — |
| Publish / update dates | ⚠️ WARN | No datePublished / dateModified found | Add visible and machine-readable publish and last-updated dates. |
| Content type schema | ⚠️ WARN | No Article / Product / Service schema | Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question. |
| Machine-parseable formatting | ❌ FAIL | No tables or lists on the page | Use tables for comparisons and specs, and lists for options and steps. Plain prose is much harder for an AI to lift cleanly. |
| Q&A pairs for summarisation | ⚠️ WARN | No question-and-answer structure | Add an FAQ block. It is what Perplexity and AI Overviews quote most often. |
| llms.txt | ℹ️ INFO | No /llms.txt (optional; the convention is still emerging, low cost to add: a markdown index of your key pages) | — |
| Semantic HTML landmarks | ⚠️ WARN | Only found: none | Wrap content in <main> and <article> and use <nav>. Landmarks help extraction pipelines isolate the real content from the chrome. |
| Quotable sentence length | ⏭️ SKIP | Not enough punctuated prose to measure (list/table-heavy page) | — |
| Third-party presence (Reddit, Quora, industry sites) | ℹ️ INFO | Not auto-checked — this tool does not query reddit/quora without a SERP key. AI engines lean on sources they have already seen discussed elsewhere. | Manually search `<brand> site:reddit.com`, `<brand> site:quora.com` and your top 3 industry publications. If nothing comes up, that is your GEO gap: contribute genuine answers and get listed in industry directories and comparison articles. |

## 9. Evidence collected

### On-page facts

| Item | Value |
|---|---|
| Title | Example Domain (14 chars) |
| Meta description | (none) (0 chars) |
| H1 | (none) |
| Headings | hh1=0, hh2=0, hh3=0, hh4=0, hh5=0, hh6=0 |
| Word count | 25 |
| Internal / external links | 0 / 0 |
| Authority citations | 0 |
| Images (missing alt) | 0 (0) |
| Schema types | (none) |
| Tables / lists | 0 / 0 |
| Q&A blocks (40-60 words) | 0 (0) |
| Author | (none) |
| Dates | (none) |
| Stats per 100 words | 0.0 |
| Avg sentence length | 12.5 words |
| Text/HTML ratio | 27.0% |
| Canonical | (none) |
| Meta robots | (not set) |
| Viewport | width=device-width,initial-scale=1 |

### Site-level facts

| Item | Value |
|---|---|
| Response time | 0.28s |
| Server | cloudflare |
| CDN | Cloudflare |
| Compression | gzip |
| HTTP → HTTPS | http://example.com/ |
| www variant | https://www.example.com/ serves its own 200 (both variants live) |
| robots.txt | HTTP 404 (0 groups) |
| AI crawlers blocked | none 🎉 |
| Sitemap | (none) — 0 URLs |
| llms.txt | absent |
| Missing security headers | strict-transport-security, x-content-type-options, x-frame-options, content-security-policy, referrer-policy, permissions-policy |
| Broken links found | 0 of 0 sampled |
| Trust pages | (not checked) |

## 10. Caveats and limits

- Every third-party metric (authority score, traffic, search volume) is an **estimate** from that vendor's own index, not Google's data. Google Search Console is the only source of truth for your own site.
- Authority scores from different vendors are **different scales**. An Open PageRank score of 6/10 is not 'DR 60' and the two must never be merged into one column.
- Domain Rating / Authority Score is a **third-party link metric**. It does not guarantee ranking, and a low score does not prevent ranking.
- This tool does not use shared or group-buy tool accounts. That breaches vendor terms of service and exposes client data.
- It does not scrape Google's HTML results. SERP data comes from a paid API if a key is supplied, otherwise competitors must be passed in with `--competitors`.

---

_Generated by seo-tool on 2026-10-15 12:57 UTC._