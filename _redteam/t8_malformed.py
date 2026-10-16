"""Malformed input fuzzing: crashes, silent JSON-LD loss, misleading messages."""
import rt_common  # noqa: F401
import traceback
from seotool.dom import parse_html
from seotool.audits import audit_seo, audit_aeo, audit_geo
from rt_common import dummy_site, dummy_home

CASES = [
    ("empty string", ""),
    ("whitespace only", "   \n  "),
    ("no html at all, plain text", "just some words with no markup whatsoever"),
    ("500-byte page", "<!doctype html><html><head><title>x</title></head><body>"
                      + ("word " * 90) + "</body></html>"),
    ("no <head>, no <body>", "<h1>Title</h1><p>" + "hello world " * 20 + "</p>"),
    ("unclosed tags", "<html><head><title>t</title><body><h1>H<p>unclosed<p>more"),
    ("unclosed title/meta", "<html><head><title>unterminated<meta name=description content='x'"),
    ("empty body", "<!doctype html><html><head><title>t</title></head><body></body></html>"),
    ("broken JSON-LD (unterminated string)",
     "<html><head><title>t</title><script type='application/ld+json'>{\"@type\":\"Organization\"</script>"
     "</head><body><p>hello world here we go</p></body></html>"),
    ("JSON-LD wrapped in an HTML comment (legacy pattern)",
     "<html><head><title>t</title><script type='application/ld+json'>"
     "<!-- {\"@type\":\"Organization\",\"name\":\"Acme\"} --></script></head>"
     "<body><p>hello world here we go</p></body></html>"),
    ("JSON-LD with a BOM",
     "<html><head><title>t</title><script type='application/ld+json'>\ufeff"
     "{\"@type\":\"Organization\"}</script></head><body><p>hello</p></body></html>"),
    ("JSON-LD with a trailing comma",
     "<html><head><title>t</title><script type='application/ld+json'>"
     "{\"@type\":\"Organization\",\"name\":\"Acme\",}</script></head><body><p>hello</p></body></html>"),
    ("JSON-LD with a JS comment",
     "<html><head><title>t</title><script type='application/ld+json'>"
     "{\"@type\":\"Organization\" // comment\n}</script></head><body><p>hello</p></body></html>"),
    ("duplicate JSON-LD: first broken, second valid",
     "<html><head><title>t</title>"
     "<script type='application/ld+json'>{bad json}</script>"
     "<script type='application/ld+json'>{\"@type\":\"FAQPage\"}</script>"
     "</head><body><p>hello</p></body></html>"),
    ("JSON-LD is a bare string",
     "<html><head><title>t</title><script type='application/ld+json'>\"hello\"</script></head>"
     "<body><p>hi</p></body></html>"),
    ("JSON-LD is null", "<html><head><title>t</title>"
                        "<script type='application/ld+json'>null</script></head><body><p>hi</p></body></html>"),
    ("JSON-LD @type is a number", "<html><head><title>t</title>"
     "<script type='application/ld+json'>{\"@type\":123}</script></head><body><p>hi</p></body></html>"),
    ("JSON-LD datePublished is nonsense", "<html><head><title>t</title>"
     "<script type='application/ld+json'>{\"@type\":\"Article\",\"datePublished\":\"not-a-date\"}"
     "</script></head><body><p>hi</p></body></html>"),
    ("500-deep nested JSON-LD", "<html><head><title>t</title><script type='application/ld+json'>"
     + "{\"@graph\":" * 200 + "{}" + "}" * 200 + "</script></head><body><p>hi</p></body></html>"),
    ("script tag with no text", "<html><head><title>t</title>"
                                "<script type='application/ld+json'></script></head><body><p>hi</p></body></html>"),
    ("meta with no content", "<html><head><title>t</title><meta name='description'></head>"
                             "<body><p>hi</p></body></html>"),
    ("base href javascript:", "<html><head><title>t</title><base href='javascript:void(0)'></head>"
                              "<body><a href='/x'>x</a><p>hi</p></body></html>"),
    ("href with spaces and control chars",
     "<html><head><title>t</title></head><body><a href='  '>a</a><a href='ht tp://x y'>b</a>"
     "<a href='//'>c</a><p>hi</p></body></html>"),
    ("nested identical headings", "<html><head><title>t</title></head><body>"
     "<h2>What is ludo?</h2>" * 5 + "<p>" + "word " * 50 + "</p></body></html>"),
    ("10000 empty paragraph tags", "<html><head><title>t</title></head><body>"
     + "<p></p>" * 10000 + "</body></html>"),
]

site = dummy_site()
for label, html in CASES:
    try:
        facts = parse_html(html, "https://example.com/")
        home = dummy_home(html)
        checks = (audit_seo(facts, site, home, {}) + audit_aeo(facts, site)
                  + audit_geo(facts, site, {}))
        fails = [c.id for c in checks if c.status == "fail"]
        parser_err = facts.crawl_error
        print(f"OK    {label:44s} words={facts.words:5d} schema={facts.schema_types} "
              f"jsonld_errors={facts.jsonld_errors} parse={parser_err or '-'} fails={len(fails)}")
        if "JSON-LD" in label or "jsonld" in label or "schema" in label:
            print(f"        -> seo.schema_present = "
                  f"{[c.status+': '+c.detail for c in checks if c.id == 'seo.schema_present']}")
    except Exception as exc:
        print(f"CRASH {label:44s} {type(exc).__name__}: {exc}")
        traceback.print_exc()
