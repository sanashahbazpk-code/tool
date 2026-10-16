# seo-tool

Give it a website and it audits the site for **SEO**, **AEO** and **GEO**, finds its
**competitors**, explains **why they rank**, **why they get traffic**, and profiles its
**backlinks** — then writes everything to a report (Markdown + HTML + Excel + JSON).

> **Works with zero API keys.** Every key you add makes it deeper. With no keys at all it still
> runs the on-page, technical, AEO, GEO, competitor-comparison and keyword-idea checks, and it
> states plainly what it could *not* check instead of guessing.

---

## Easiest way to run it — the web UI

A clean, light-theme web app that anyone can use just by reading:

```cmd
serve_web.cmd
```

Then open **http://127.0.0.1:8777** in your browser.

Type a website address → press the button → read the result. Full guide:
[docs/WEB-UI.md](docs/WEB-UI.md)

![Web UI](webapp/screenshots/00-form-desktop.png)

---

## Or from the command line

```powershell
# 1. a quick audit (no key needed, ~15 seconds)
python seo.py audit hashmiphotos.com

# 2. full research — with competitors
python seo.py research hashmiphotos.com --competitors "khawajaphotos.pk,digimax.pk"

# 3. with an Excel workbook too
python seo.py research hashmiphotos.com --competitors "khawajaphotos.pk,digimax.pk" --xlsx
```

Reports are written to `reports\`:

```
reports/
  hashmiphotos.com-20261015-0540-report.md     <- for reading
  hashmiphotos.com-20261015-0540-report.html   <- open in a browser (best)
  hashmiphotos.com-20261015-0540-data.xlsx     <- 11 sheets, filtered and frozen
  hashmiphotos.com-20261015-0540-data.json     <- raw data
```

---

## What it checks

### SEO — Search Engine Optimisation
- **Technical:** HTTPS, http→https redirect, canonical hostname, response time, page weight,
  gzip/brotli, render-blocking head resources, cache headers, security headers
- **Crawl/index:** robots.txt, XML sitemap (+lastmod), meta robots/noindex, canonical tag
- **On-page:** title (length + keyword), meta description, single H1, heading hierarchy, H2 count,
  keyword alignment (title/H1/URL/first paragraph), URL structure
- **Content:** word count, text-to-HTML ratio, subheadings, content present in the served HTML
- **Links:** internal links (body vs nav), outbound links, broken internal links (404s), internal
  links that redirect
- **Media:** image alt coverage
- **Social/schema:** Open Graph tags, structured-data presence
- **Mobile:** viewport, lang attribute
- **Trust:** About / Contact / Privacy / Terms / Shipping / Returns / FAQ pages

### AEO — Answer Engine Optimisation
- Q&A structure: question-form headings and 40–60 word answers (the answer-box sweet spot)
- FAQPage and HowTo markup *(Google removed FAQ rich results and deprecated HowTo rich results, so
  these are weighted lightly — they still help AI engines parse Q&A)*
- Definition-style openers ("X is …"), lists, tables, answer-first intro, summary blocks
- Heading clarity, average sentence length, BreadcrumbList, speakable markup

### GEO — Generative Engine Optimisation
- **AI crawler access** — does `robots.txt` block GPTBot / OAI-SearchBot / ClaudeBot /
  PerplexityBot? If it does, the site can never be cited by those engines.
- **Content readable without JavaScript** — AI crawlers do not execute JS
- Citations to authoritative sources, quantitative facts, named author + author schema,
  Organization/LocalBusiness schema + `sameAs`, publish/update dates, entity density,
  machine-parseable formatting, `llms.txt`, Common Crawl presence

### Competitor comparison — "why do they rank?"
For each competitor it fetches the page and compares, signal by signal: content depth, schema,
question headings, tables, citations, author, dates, data density and page format — and states
who is ahead, with the evidence and the fix.

---

## API keys (all optional)

Set them in environment variables — never hard-code them:

| Env var | What it adds | Cost |
|---|---|---|
| `SEMRUSH_API_KEY` | Referring domains, backlinks, organic traffic/keywords, competitor discovery | Paid |
| `AHREFS_API_TOKEN` | Domain Rating (0–100), referring domains, backlinks | Paid |
| `SERPAPI_KEY` / `VALUESERP_API_KEY` / `SERPSTACK_API_KEY` | Automatic competitor discovery + SERP positions | Paid |
| `OPENPAGERANK_API_KEY` | Authority proxy on a **0–10 scale** | Free key |

```powershell
$env:SEMRUSH_API_KEY = "..."
python seo.py research example.com
```

### Shared / group-buy accounts

This tool does not use — and will not recommend — shared or group-buy SEO tool accounts. They
breach the vendor's terms of service, the account can be suspended, and your client data becomes
visible to other subscribers.

Without any paid key you still get Search Console (free), Bing Webmaster Tools (free), Ahrefs
Webmaster Tools (free), and full analysis of any backlink CSV via `--backlinks-csv`.

---

## Honest limits

- **It does not scrape Google.** SERP data requires a paid SERP API key; otherwise you supply
  competitor domains with `--competitors`. (The `duckduckgo` provider is opt-in and fragile.)
- **It never invents numbers.** A check that cannot run is marked `skip`/`info`, with the reason.
- **It does not predict rankings.** The score measures readiness, not position.
- **Authority metrics are never merged across vendors.** Ahrefs DR (0–100), Semrush AS (0–100) and
  Open PageRank (0–10) are different scales, and the report labels each one.

---

## Companion tools

- `tools/spa_source_audit.py` — audit a React/Vue/Vite source tree *before* it is deployed
- `tools/compare_reports.py` — put several audit reports side by side
- `tools/verify_with_llms.py` — send a report to several LLM vendors for adversarial review
  (guide: [docs/VERIFICATION.md](docs/VERIFICATION.md))

## Requirements

- Python 3.10+ (the bundled DSH runtime's Python 3.12 works)
- `lxml` and `openpyxl` (both bundled) — no `requests` or `beautifulsoup4` needed; HTTP uses stdlib
  `urllib`.

## File layout

```
seo-tool/
  seo.py, serve_web.py      launchers
  run.cmd, serve_web.cmd    Windows launchers
  seotool/                  the package
  webapp/                   the web UI (server + static front end)
  tools/                    companion scripts
  docs/                     guides and reports
  reports/                  output
```
