# SEO / AEO / GEO Research Report

**Target:** https://ludoking.com/  
**Generated:** 2026-10-15 13:06 UTC  
**Tool:** seo-tool (SEO + AEO + GEO auditor)

---

## 1. Scoreboard

| Discipline | Score | Grade | What it covers |
|---|---|---|---|
| **SEO** — Search Engine Optimisation | 80.2/100 | B | Ranking pages on Google: keywords, on-page, technical, internal links |
| **AEO** — Answer Engine Optimisation | 44.4/100 | F | Featured snippets, People Also Ask, voice answers |
| **GEO** — Generative Engine Optimisation | 69.8/100 | D | Being cited or summarised by ChatGPT, Perplexity, Gemini, AI Overviews |
| **Overall** | **64.8/100** | **D** |  |

Checks run: **65** — 29 pass, 17 warnings, 10 failures, 7 informational, 2 skipped.

## 2. Executive summary

**Top problems, highest impact first:**

- **[AEO] FAQPage schema** — No FAQPage schema
  - *Fix:* Add FAQPage JSON-LD with 5-10 real customer questions and concise answers. This is the single highest-leverage AEO change.
- **[AEO] Question-form headings** — No question headings (0 questions)
  - *Fix:* Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
- **[AEO] Answers are 40-60 words** — No question/answer pairs detected on the page
  - *Fix:* Add a FAQ section: question as the heading, 40-60 word answer immediately below.
- **[GEO] Organization / LocalBusiness schema** — No Organization or LocalBusiness schema
  - *Fix:* Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand.
- **[TECHNICAL] XML sitemap** — No sitemap found at /sitemap.xml or declared in robots.txt
  - *Fix:* Generate an XML sitemap, list every canonical URL in it, and declare it in robots.txt.
- **[CONTENT] Content depth** — Thin content (143 words)
  - *Fix:* Expand to at least 600 words of genuinely useful detail. Cover the questions a buyer asks before purchasing.
- **[SEO] Structured data present** — No JSON-LD or microdata found
  - *Fix:* Add JSON-LD: Organization on the homepage, Product/Service on offer pages, BreadcrumbList sitewide, Article on blog posts.
- **[TECHNICAL] One canonical hostname** — Both ludoking.com and www.ludoking.com return 200
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
   - Problem: No question/answer pairs detected on the page
   - Do this: Add a FAQ section: question as the heading, 40-60 word answer immediately below.
3. **[AEO] Question-form headings**
   - Problem: No question headings (0 questions)
   - Do this: Rewrite or add H2/H3 headings as real questions ("How much does X cost?", "What is the difference between X and Y?"). These are what People Also Ask pulls from.
4. **[GEO] Organization / LocalBusiness schema**
   - Problem: No Organization or LocalBusiness schema
   - Do this: Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand.

### P1 — Quick wins

Low effort, clear payoff, mostly on-page markup and copy edits.

1. **[GEO] Cites authoritative sources**
   - Problem: Only 1 authority citation(s): www.youtube.com
   - Do this: Link to 3+ credible sources (industry data, government, research, manufacturer specs). AI engines preferentially cite content that itself cites sources.
2. **[TECHNICAL] Content present in the served HTML**
   - Problem: Only 143 words of visible text in the served HTML
   - Do this: Make sure the main copy is in the HTML response, not injected by JavaScript.
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
7. **[GEO] Q&A pairs for summarisation**
   - Problem: No question-and-answer structure
   - Do this: Add an FAQ block. It is what Perplexity and AI Overviews quote most often.
8. **[SEO] Internal links in body**
   - Problem: Sparse (5 links)
   - Do this: Add contextual internal links from this page to related products, categories and guides. Internal links spread authority and help crawlers.
9. **[TECHNICAL] Server response time**
   - Problem: Acceptable (1.69s)
   - Do this: Target under 0.8s. Enable full-page caching, upgrade the host, and put Cloudflare in front.
10. **[SEO] Structured data present**
   - Problem: No JSON-LD or microdata found
   - Do this: Add JSON-LD: Organization on the homepage, Product/Service on offer pages, BreadcrumbList sitewide, Article on blog posts.
11. **[TECHNICAL] XML sitemap**
   - Problem: No sitemap found at /sitemap.xml or declared in robots.txt
   - Do this: Generate an XML sitemap, list every canonical URL in it, and declare it in robots.txt.
12. **[SEO] Trust pages exist**
   - Problem: Found: About page, Contact page, Privacy policy, Terms of service, FAQ page | Missing: Blog / news section, Shipping policy, Returns / refund policy
   - Do this: Add the remaining policy/FAQ pages.

### P2 — Nice to have

Do these after P0 and P1.

1. **[AEO] Summary / key-takeaways block**
   - Problem: No summary or key-takeaways section
   - Do this: Add a short "Key takeaways" or "Quick answer" box near the top. This is what both snippets and AI summaries grab first.
2. **[AEO] Tables for comparison**
   - Problem: No tables on the page
   - Do this: Add at least one comparison or specification table. Tables are prime snippet and AI-summary material.
3. **[SEO] Heading hierarchy**
   - Problem: 1 level jump(s), e.g. H3 -> H6
   - Do this: Do not skip heading levels. Outline the page H1 > H2 > H3 so search engines and AI can parse the structure.
4. **[AEO] HowTo schema**
   - Problem: No HowTo schema (only needed if you publish step-by-step guides)
   - Do this: For any process/installation/guide page, add HowTo JSON-LD with numbered steps.
5. **[GEO] Semantic HTML landmarks**
   - Problem: Only found: nav
   - Do this: Wrap content in <main> and <article> and use <nav>. Landmarks help extraction pipelines isolate the real content from the chrome.
6. **[TECHNICAL] Render-blocking head resources**
   - Problem: Several (12 files)
   - Do this: Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint.
7. **[TECHNICAL] Language declared**
   - Problem: No lang attribute on <html>
   - Do this: Add lang="en" (or the correct language) — it helps both search and screen readers.

## 8. All checks in detail

### SEO — Search Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Page is indexable | ✅ PASS | meta robots: 'index,follow' | — |
| Canonical tag | ✅ PASS | https://ludoking.com (self-referencing site) | — |
| Title tag length | ✅ PASS | Good length (30 chars) | — |
| Meta description length | ✅ PASS | Good length (90 chars) | — |
| Exactly one H1 | ✅ PASS | H1: about us | — |
| Heading hierarchy | ⚠️ WARN | 1 level jump(s), e.g. H3 -> H6 | Do not skip heading levels. Outline the page H1 > H2 > H3 so search engines and AI can parse the structure. |
| Keyword alignment | ✅ PASS | 'ludo' appears in: title, URL, first paragraph | — |
| Internal links in body | ⚠️ WARN | Sparse (5 links) | Add contextual internal links from this page to related products, categories and guides. Internal links spread authority and help crawlers. |
| Navigational links | ℹ️ INFO | 7 links inside <nav>/<header> | — |
| Outbound links | ✅ PASS | 15 external links, 0 nofollow | — |
| Image alt text | ✅ PASS | Good alt coverage (0.0% missing) | — |
| Open Graph tags | ✅ PASS | og:title, og:description, og:image present | — |
| Structured data present | ❌ FAIL | No JSON-LD or microdata found | Add JSON-LD: Organization on the homepage, Product/Service on offer pages, BreadcrumbList sitewide, Article on blog posts. |
| URL structure | ✅ PASS | Clean, lowercase, descriptive | — |
| Resolved URL | ℹ️ INFO | https://ludoking.com/ | — |
| Trust pages exist | ⚠️ WARN | Found: About page, Contact page, Privacy policy, Terms of service, FAQ page \| Missing: Blog / news section, Shipping policy, Returns / refund policy | Add the remaining policy/FAQ pages. |

### Technical SEO

| Check | Status | Detail | Fix |
|---|---|---|---|
| HTTPS enabled | ✅ PASS | Served over HTTPS from ludoking.com | — |
| http redirects to https | ✅ PASS | http:// -> https://ludoking.com/ | — |
| One canonical hostname | ❌ FAIL | Both ludoking.com and www.ludoking.com return 200 | Pick one (usually https://www or https://apex), 301 the other to it, and make sure the canonical tag matches. |
| Server response time | ⚠️ WARN | Acceptable (1.69s) | Target under 0.8s. Enable full-page caching, upgrade the host, and put Cloudflare in front. |
| HTML page weight | ✅ PASS | Lean (4.4 KB) | — |
| Text compression | ✅ PASS | content-encoding: gzip | — |
| Render-blocking head resources | ⚠️ WARN | Several (12 files) | Defer non-critical JS and inline critical CSS. Every blocking file in <head> delays first paint. |
| Cache headers | ✅ PASS | cache-control: no-store, no-cache, must-revalidate | — |
| Content present in the served HTML | ⚠️ WARN | Only 143 words of visible text in the served HTML | Make sure the main copy is in the HTML response, not injected by JavaScript. |
| robots.txt present | ✅ PASS | HTTP 200 | — |
| XML sitemap | ❌ FAIL | No sitemap found at /sitemap.xml or declared in robots.txt | Generate an XML sitemap, list every canonical URL in it, and declare it in robots.txt. |
| Mobile viewport | ✅ PASS | viewport: width=device-width, initial-scale=1 | — |
| Language declared | ⚠️ WARN | No lang attribute on <html> | Add lang="en" (or the correct language) — it helps both search and screen readers. |
| Broken internal links | ⏭️ SKIP | No internal links were sampled | — |

### Content

| Check | Status | Detail | Fix |
|---|---|---|---|
| Subheadings (H2) | ❌ FAIL | Almost no structure (1 H2s) | Break the page into H2 sections. Long unbroken text is hard to scan and hard for AI to quote. |
| Content depth | ❌ FAIL | Thin content (143 words) | Expand to at least 600 words of genuinely useful detail. Cover the questions a buyer asks before purchasing. |
| Primary topic detected | ✅ PASS | 'ludo' (from title/H1/URL) | — |
| Text-to-HTML ratio | ❌ FAIL | Very low (code-heavy page) (4.3%) | Reduce markup around the content: fewer wrapper divs, less inline CSS/JS. |

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
| Bulleted / numbered lists | ✅ PASS | 1 list(s) found | — |
| Tables for comparison | ⚠️ WARN | No tables on the page | Add at least one comparison or specification table. Tables are prime snippet and AI-summary material. |
| Descriptive headings | ✅ PASS | Headings are descriptive (0.0% vague) | — |
| Sentence length | ✅ PASS | Easy to quote (7 sentences analysed) (16.57 words/sentence) | — |
| Answer-first intro | ✅ PASS | First paragraph is 52 words — good for an intro snippet | — |
| Summary / key-takeaways block | ⚠️ WARN | No summary or key-takeaways section | Add a short "Key takeaways" or "Quick answer" box near the top. This is what both snippets and AI summaries grab first. |
| BreadcrumbList schema | ℹ️ INFO | No BreadcrumbList schema | — |

### GEO — Generative Engine Optimisation

| Check | Status | Detail | Fix |
|---|---|---|---|
| Content readable without JavaScript | ✅ PASS | 143 words are present in the raw HTML response | — |
| AI crawlers allowed | ✅ PASS | No AI crawler is blocked. Allowed: no explicit rules (default allow) | — |
| Cites authoritative sources | ⚠️ WARN | Only 1 authority citation(s): www.youtube.com | Link to 3+ credible sources (industry data, government, research, manufacturer specs). AI engines preferentially cite content that itself cites sources. |
| Quantitative facts | ✅ PASS | Good density of numbers (4.2 stats/100 words) | — |
| Named author | ⚠️ WARN | No author byline found | Add a named author with a one-line credential and a link to an author page. Author identity is an E-E-A-T signal that AI engines weigh. |
| Person schema | ⚠️ WARN | No Person schema | Add Person JSON-LD with name, jobTitle, url and sameAs (LinkedIn, X/Twitter). This is how an AI engine connects your content to a real entity. |
| Organization / LocalBusiness schema | ❌ FAIL | No Organization or LocalBusiness schema | Add Organization (or LocalBusiness with address, phone and openingHours) JSON-LD on the homepage. Without it, AI engines cannot confidently attribute your content to your brand. |
| Entity-rich content | ✅ PASS | Entity-rich (26.57 proper nouns/100 words) | — |
| Publish / update dates | ⚠️ WARN | No datePublished / dateModified found | Add visible and machine-readable publish and last-updated dates. |
| Content type schema | ⚠️ WARN | No Article / Product / Service schema | Declare what each page is with Article, Product or Service JSON-LD so AI engines know which passages answer which kind of question. |
| Machine-parseable formatting | ✅ PASS | 0 table(s), 1 list(s) | — |
| Q&A pairs for summarisation | ⚠️ WARN | No question-and-answer structure | Add an FAQ block. It is what Perplexity and AI Overviews quote most often. |
| llms.txt | ℹ️ INFO | No /llms.txt (optional; the convention is still emerging, low cost to add: a markdown index of your key pages) | — |
| E-E-A-T surface area | ✅ PASS | Trust pages found: 5/8 | — |
| Semantic HTML landmarks | ⚠️ WARN | Only found: nav | Wrap content in <main> and <article> and use <nav>. Landmarks help extraction pipelines isolate the real content from the chrome. |
| Quotable sentence length | ✅ PASS | Easily quotable (16.57 words/sentence) | — |
| Third-party presence (Reddit, Quora, industry sites) | ℹ️ INFO | Not auto-checked — this tool does not query reddit/quora without a SERP key. AI engines lean on sources they have already seen discussed elsewhere. | Manually search `<brand> site:reddit.com`, `<brand> site:quora.com` and your top 3 industry publications. If nothing comes up, that is your GEO gap: contribute genuine answers and get listed in industry directories and comparison articles. |

## 9. Evidence collected

### On-page facts

| Item | Value |
|---|---|
| Title | Ludo KingTM - Play Online Ludo (30 chars) |
| Meta description | A fast paced Ludo game to finish quickly with the fun of the full length multiplayer game! (90 chars) |
| H1 | about us |
| Headings | hh1=1, hh2=1, hh3=1, hh4=0, hh5=1, hh6=1 |
| Word count | 143 |
| Internal / external links | 12 / 15 |
| Authority citations | 1 |
| Images (missing alt) | 23 (0) |
| Schema types | (none) |
| Tables / lists | 0 / 1 |
| Q&A blocks (40-60 words) | 0 (0) |
| Author | (none) |
| Dates | (none) |
| Stats per 100 words | 4.2 |
| Avg sentence length | 16.57 words |
| Text/HTML ratio | 4.3% |
| Canonical | https://ludoking.com |
| Meta robots | index,follow |
| Viewport | width=device-width, initial-scale=1 |

### Site-level facts

| Item | Value |
|---|---|
| Response time | 1.69s |
| Server | cloudflare |
| CDN | Cloudflare |
| Compression | gzip |
| HTTP → HTTPS | https://ludoking.com/ |
| www variant | https://www.ludoking.com/ serves its own 200 (both variants live) |
| robots.txt | HTTP 200 (0 groups) |
| AI crawlers blocked | none 🎉 |
| Sitemap | (none) — 0 URLs |
| llms.txt | absent |
| Missing security headers | strict-transport-security, x-content-type-options, x-frame-options, content-security-policy, referrer-policy, permissions-policy |
| Broken links found | 0 of 0 sampled |
| Trust pages | {"about": 200, "contact": 200, "privacy": 200, "terms": 200, "blog": 0, "shipping": 0, "returns": 0, "faq": 200} |

## 10. Caveats and limits

- Every third-party metric (authority score, traffic, search volume) is an **estimate** from that vendor's own index, not Google's data. Google Search Console is the only source of truth for your own site.
- Authority scores from different vendors are **different scales**. An Open PageRank score of 6/10 is not 'DR 60' and the two must never be merged into one column.
- Domain Rating / Authority Score is a **third-party link metric**. It does not guarantee ranking, and a low score does not prevent ranking.
- This tool does not use shared or group-buy tool accounts. That breaches vendor terms of service and exposes client data.
- It does not scrape Google's HTML results. SERP data comes from a paid API if a key is supplied, otherwise competitors must be passed in with `--competitors`.

---

_Generated by seo-tool on 2026-10-15 13:06 UTC._