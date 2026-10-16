# How to run the tool — copy-paste guide

> ## 🖥️ Prefer a website? Use the web UI
>
> No command line needed. Just run:
>
> ```cmd
> cd "C:\Users\Yousuf Traders\Documents\deepseek-harness\default-workspace\seo-tool"
> serve_web.cmd
> ```
>
> Then open **http://127.0.0.1:8777** in your browser.
>
> Type a website address → press the button → read the result.
> Full guide: [docs/WEB-UI.md](docs/WEB-UI.md)
>
> Use the commands below when you need batch or automated runs.

---

## From the command line

First open **Command Prompt (cmd)** or **PowerShell**, then go to the tool folder:

```cmd
cd "C:\Users\Yousuf Traders\Documents\deepseek-harness\default-workspace\seo-tool"
```

All commands below run from this folder.

---

## 1. Easiest — `run.cmd`

```cmd
run.cmd audit example.com
```

That's it. `run.cmd` finds a Python that already has the required libraries — nothing to install.

**For your own site:**

```cmd
run.cmd audit your-site.com
```

---

## 2. Or directly with Python

```cmd
python seo.py audit your-site.com
```

If your Python lacks `lxml`, `seo.py` finds another Python and re-runs itself. You'll see one
line:

```
[seo-tool] is Python mein lxml nahi hai; chala rahe hain: ...\dependencies\python\python.exe
```

Then the report is produced normally. **Both ways work.**

---

## 3. The four useful commands

### (a) Audit only — no API key needed (~15 seconds)
```cmd
run.cmd audit your-site.com
```
Gives on-page SEO, technical SEO, AEO, GEO — and what to fix.

### (b) Full research — with competitors
```cmd
run.cmd research your-site.com --competitors "comp1.com,comp2.com,comp3.com"
```
Supply competitor domains comma-separated. The tool fetches each competitor page and compares it
against yours, explaining **why they are ahead**.

### (c) Excel report too
```cmd
run.cmd research your-site.com --competitors "comp1.com,comp2.com" --xlsx
```

### (d) Backlink CSV analysis
Export backlinks from Ahrefs / Semrush / Moz / Google Search Console as CSV, then:
```cmd
run.cmd backlinks your-site.com --backlinks-csv "exports\backlinks.csv"
```
Gives referring domains, dofollow/nofollow ratio, average + median DR, top linking domains, anchor
distribution, and spam/risky-link warnings.

### (e) Everything in one command
```cmd
run.cmd research your-site.com --competitors "comp1.com,comp2.com" --backlinks-csv "exports\backlinks.csv" --xlsx
```

---

## 4. Where the report is written

In the `reports\` folder, named by site and time:

```
reports\
  your-site.com-20261015-0600-report.md       <- for reading (text)
  your-site.com-20261015-0600-report.html     <- open in a browser  <-- BEST
  your-site.com-20261015-0600-data.xlsx       <- 11 sheets, filtered
  your-site.com-20261015-0600-data.json       <- raw data
```

Open the folder:

```cmd
start "" reports
```

Or open the HTML directly:

```cmd
start "" "reports\your-site.com-20261015-0600-report.html"
```

---

## 5. Useful flags

| Flag | What it does |
|---|---|
| `--competitors "a.com,b.com"` | Supply competitor domains |
| `--seeds "camera price,dslr camera"` | Supply keywords (otherwise derived from title/H1) |
| `--geo pk` | Country code (default `pk`) |
| `--xlsx` | Also write an Excel workbook |
| `--max-competitors 15` | How many competitor pages to fetch (default 10) |
| `--quiet` | Show only the final summary |
| `--skip-link-check` | Skip the internal 404 check (faster) |
| `--skip-backlinks` | Skip the backlink section (faster) |
| `-h` | Full help |

Full help:

```cmd
run.cmd -h
```

---

## 6. API keys — all optional

**The tool works with no key at all** — you just supply competitors manually.

For automatic competitor discovery and referring-domain counts, set keys:

```cmd
set SEMRUSH_API_KEY=xxxxxxxx
set SERPAPI_KEY=xxxxxxxx
run.cmd research your-site.com --serp-provider serpapi
```

| Env var | What it adds |
|---|---|
| `SEMRUSH_API_KEY` | Referring domains, backlinks, organic traffic, competitor discovery |
| `AHREFS_API_TOKEN` | Domain Rating (0–100), referring domains, backlinks |
| `SERPAPI_KEY` / `VALUESERP_API_KEY` / `SERPSTACK_API_KEY` | Automatic competitor discovery |
| `OPENPAGERANK_API_KEY` | Authority proxy (0–10 scale) — free key |

> `set` lasts for the current window only. To make it permanent:
> ```cmd
> setx SEMRUSH_API_KEY "xxxxxxxx"
> ```
> then open a new window.

---

## 7. Troubleshooting

| Problem | Fix |
|---|---|
| `'run.cmd' is not recognized` | You are in the wrong folder. Run the `cd` command at the top. |
| `seo-tool needs 'lxml'` | Use `run.cmd`, or `python -m pip install lxml openpyxl` |
| `Could not find any Python interpreter` | `set SEOTOOL_PYTHON=C:\Path\To\python.exe` then `run.cmd ...` |
| No output | Remove `--quiet` to see progress |
| Report looks empty | The site is JavaScript-rendered (React/Vue) — the server HTML has no content. The report states this plainly. |
| Timeout / slow | Add `--skip-link-check --skip-backlinks` |
| `-h` vs `--help` | Both work |

---

## 8. At a glance

```cmd
cd "C:\Users\Yousuf Traders\Documents\deepseek-harness\default-workspace\seo-tool"
run.cmd audit your-site.com
start "" reports
```

Three lines. Report done.
