"""Claim 7: client-side-rendered pages are reported as an empty shell, not guessed."""
import rt_common  # noqa: F401
from seotool.dom import parse_html
from seotool.audits import audit_seo, audit_geo
from rt_common import dummy_site, dummy_home

NAV = ("<nav><a href='/'>Home</a> <a href='/pricing'>Pricing</a> <a href='/blog'>Blog</a> "
       "<a href='/about'>About us</a> <a href='/contact'>Contact</a></nav>")
FOOTER = ("<footer><p>Copyright 2026 Example Incorporated. All rights reserved worldwide. "
          "Registered office: 12 Main Boulevard, Lahore, Pakistan. Company number 1234567. "
          "Read our terms of service and privacy policy for more information about how we "
          "handle your personal data and cookies on this website.</p></footer>")


def show(label, html):
    facts = parse_html(html, "https://example.com/")
    seo = audit_seo(facts, dummy_site(), dummy_home(html), {})
    geo = audit_geo(facts, dummy_site(), {})
    s = next(c for c in seo if c.id == "seo.server_rendered_content")
    g = next(c for c in geo if c.id == "geo.content_readable_by_ai")
    print(f"\n### {label}")
    print(f"    words in HTML = {facts.words}   headings = {len(facts.headings)}")
    print(f"    seo.server_rendered_content -> {s.status.upper()} (w={s.weight}): {s.detail}")
    print(f"    geo.content_readable_by_ai  -> {g.status.upper()} (w={g.weight}): {g.detail}")


print("=" * 78)
print("(a) REAL SPA SHELL: React app, no content, but a footer with 60+ words")
show("React SPA shell (div#root) + boilerplate footer pushes it over 50 words",
     "<!doctype html><html lang='en'><head><title>App</title>"
     "<meta name='viewport' content='width=device-width'>"
     "<meta name='description' content='d'>"
     "<script type='module' src='/assets/index.js'></script></head><body>"
     + NAV + "<div id='root'></div>" + FOOTER + "</body></html>")

show("React SPA shell identical but with a SHORT footer (under 50 words)",
     "<!doctype html><html lang='en'><head><title>App</title>"
     "<meta name='viewport' content='width=device-width'>"
     "<meta name='description' content='d'>"
     "<script type='module' src='/assets/index.js'></script></head><body>"
     + NAV + "<div id='root'></div><footer><p>Copyright 2026</p></footer></body></html>")

show("Vue/Angular SPA shell (div id='vue-app') + module script",
     "<!doctype html><html lang='en'><head><title>App</title>"
     "<meta name='viewport' content='width=device-width'>"
     "<meta name='description' content='d'>"
     "<script type='module' src='/main.js'></script></head><body>"
     + NAV + "<div id='vue-app'></div>" + FOOTER + "</body></html>")

show("Next.js-style shell using <div id='content'> and <app-root>",
     "<!doctype html><html lang='en'><head><title>App</title>"
     "<meta name='viewport' content='width=device-width'>"
     "<meta name='description' content='d'>"
     "<script type='module' src='/main.js'></script></head><body>"
     + NAV + "<app-root></app-root><div id='content'></div>" + FOOTER + "</body></html>")

show("REAL BLANK SPA (nothing but the shell) -- control",
     "<!doctype html><html lang='en'><head><title>App</title>"
     "<meta name='viewport' content='width=device-width'>"
     "<script type='module' src='/assets/index.js'></script></head><body>"
     "<div id='root'></div><script>window.x=1</script></body></html>")

print()
print("=" * 78)
print("(b/c/d) static pages, <noscript>, short-but-genuine pages")
show("mostly-static page with 40 words of real copy + a module script (e.g. Astro/Vite static)",
     "<!doctype html><html lang='en'><head><title>Ludo rules explained for new players</title>"
     "<meta name='viewport' content='width=device-width'>"
     "<meta name='description' content='d'>"
     "<script type='module' src='/main.js'></script></head><body>"
     "<h1>Ludo rules</h1><p>Ludo is a board game for two to four players. Each player has four "
     "tokens and races them around the board to reach home before anyone else can.</p>"
     + FOOTER + "</body></html>")

show("server-rendered page with a BIG <noscript> block holding the real content",
     "<!doctype html><html lang='en'><head><title>Ludo rules</title>"
     "<meta name='viewport' content='width=device-width'>"
     "<meta name='description' content='d'>"
     "<script type='module' src='/main.js'></script></head><body>"
     "<div id='root'></div><noscript><h1>Ludo rules</h1><p>"
     + "Ludo is a board game for two to four players with four tokens each. " * 12 +
     "</p></noscript>" + FOOTER + "</body></html>")

show("short but genuine page: 45 words of real content, no script tag at all",
     "<!doctype html><html lang='en'><head><title>Contact us at our Lahore office</title>"
     "<meta name='viewport' content='width=device-width'>"
     "<meta name='description' content='d'></head><body>"
     "<h1>Contact</h1><p>Call us on 0300 1234567 or email help@example.com. Our office is on "
     "Main Boulevard, Gulberg, Lahore and is open from nine in the morning until six in the "
     "evening, Monday to Saturday.</p></body></html>")
