# SEO Jaiza Tool — Web UI

A clean, light-theme web app that **anyone can use just by reading**. Type a website address and
press a button.

![Form](../webapp/screenshots/00-form-desktop.png)

---

## Run it in two lines

```cmd
cd "C:\Users\Yousuf Traders\Documents\deepseek-harness\default-workspace\seo-tool"
serve_web.cmd
```

Then open **http://127.0.0.1:8777** in your browser.

You can also **double-click** `serve_web.cmd` — it prints the address to open.

**Alternative** (if `serve_web.cmd` does not work):

```cmd
python serve_web.py --open
```

`--open` opens the browser automatically. For a different port: `--port 9000`

> **Nothing to install.** `serve_web.py` finds a Python that already has the required libraries.
> The interface is English by default; an اردو toggle is in the top bar for Urdu-speaking users.

---

## How to explain it to someone — 3 steps

1. **Type the address** — e.g. `mystore.com`. No `https://` needed.
2. **Press "Start the audit"** — a progress bar runs; 15 seconds to 2 minutes.
3. **Read the result** — three scores, then the "Do these first" list.

That's it. Every item names the problem and its exact fix in a **"Fix:"** box.

---

## What is on screen

### 1. Three scores — SEO, AEO, GEO

![Scores](../webapp/screenshots/01-results-top.png)

| Score | What it means |
|---|---|
| **SEO** | Readiness to rank on Google |
| **AEO** | Readiness for snippets, "People Also Ask", voice |
| **GEO** | Readiness to be cited by ChatGPT, Perplexity, Gemini |
| **Overall** | Average of the three |

Colour tells you the state: 🟢 80+ good · 🟠 60–79 work remains · 🔴 below 60 fix now.

### 2. "Do these first"

A priority-ordered list. Each item states the problem and its fix.

### 3. Competitor comparison

![Competitors](../webapp/screenshots/02-competitors.png)

Your site side by side with competitors: word count, FAQ markup, and their AEO/GEO proxies.

> **Note:** if you supplied competitors manually (no SERP API key), the "SERP hits" and "Best
> rank" columns are hidden — that data does not exist, and showing a column of zeros would be
> dishonest.

### 4. Keyword ideas

![Keywords](../webapp/screenshots/03-keywords.png)

Free, from Google Autocomplete — the things people actually search for.

### 5. Every check in detail

![Checks](../webapp/screenshots/04-checks.png)

Each check's result (PASS / WARN / FAIL), reason and fix. The "Problems only" filter shows only
what needs work.

### 6. Download the report

![Downloads](../webapp/screenshots/05-downloads.png)

- **HTML** — opens in a browser, best
- **Excel** — 11 sheets (competitors, keywords, action plan, backlinks)
- **Markdown** — plain text
- **JSON** — raw data

### 7. Works on mobile

![Mobile](../webapp/screenshots/06-mobile-results.png)

---

## More options

Open "＋ More options":

| Option | What it does |
|---|---|
| **Competitor domains** | Comma-separated: `comp1.com, comp2.com`. The tool then compares them. |
| **Country** | Which country's search results to use (default Pakistan) |
| **Full research / My site only** | Full = competitors + keywords + backlinks (1–2 min). Site only = ~15 sec. |
| **Also create an Excel file** | Excel report alongside the others |

**Tip:** run "My site only" first (fast), then "Full research".

---

## The result is not lost

When the audit finishes, the address bar gets `?job=...`. If the page refreshes, or you reopen that
link, **the same result comes back**.

A section deep link also works:

```
http://127.0.0.1:8777/?job=<id>&view=competitors
```

`view` values: `scores`, `actions`, `factors`, `competitors`, `keywords`, `backlinks`, `checks`,
`downloads`, `caveats`

> **Remember:** the tool runs on your computer. Stopping the server forgets in-memory jobs — but
> the **report files stay in `reports/web/`**.

---

## Your data

- Everything runs **on your computer** — your website address is not sent anywhere
- No **shared or group-buy tool accounts** are used
- **Google is never scraped**
- Internet is used only to read the site you asked about and its competitors

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `serve_web.cmd` window closed | Keep that window open — it is the server. Ctrl+C stops it. |
| Browser says "site can't be reached" | Check the window prints `http://127.0.0.1:8777/`. If you changed the port, open that one. |
| `lxml` error | Use `serve_web.cmd` (it finds the right Python) |
| No Python found | `set SEOTOOL_PYTHON=C:\Path\To\python.exe` then `serve_web.cmd` |
| Audit is slow | Choose "My site only" |
| Progress stuck near 90% | Backlinks and Common Crawl are being checked — wait |
| Competitor shows "JS-rendered" | That site builds content in the browser; its server HTML is empty. It is itself an SEO problem. |

---

## Regenerating the screenshots

```cmd
python webapp\shoot.py --base http://127.0.0.1:8777 --job <job-id>
```

Renders the UI with headless Chrome (mobile, tablet, desktop).
