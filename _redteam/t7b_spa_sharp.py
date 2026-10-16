"""Claim 7 (sharpened): real SPA shell with real-world boilerplate; <template>; static false positive."""
import rt_common  # noqa: F401
from seotool.dom import parse_html
from seotool.audits import audit_seo, audit_geo
from rt_common import dummy_site, dummy_home

# a normal WordPress/Shopify-style footer+legal boilerplate: nothing to do with page content
BOILER = ("<footer><p>Copyright 2026 Example Incorporated. All rights reserved worldwide. "
          "Example Incorporated is registered in Lahore, Pakistan under company number 1234567. "
          "Our registered office is at 12 Main Boulevard, Gulberg, Lahore. We use cookies to "
          "improve your experience on this website. Read our privacy policy and terms of service "
          "for details about how we handle personal data. This site is protected by reCAPTCHA and "
          "the Google privacy policy and terms of service apply.</p>"
          "<p>Powered by Example Commerce Platform. Prices include all applicable taxes. "
          "Free returns within thirty days of delivery for all unused items.</p></footer>")

NAV = ("<nav><ul><li><a href='/'>Home</a></li><li><a href='/pricing'>Pricing</a></li>"
       "<li><a href='/blog'>Blog</a></li><li><a href='/about'>About us</a></li>"
       "<li><a href='/contact'>Contact</a></li></ul></nav>")


def show(label, html):
    facts = parse_html(html, "https://example.com/")
    seo = audit_seo(facts, dummy_site(), dummy_home(html), {})
    geo = audit_geo(facts, dummy_site(), {})
    s = next(c for c in seo if c.id == "seo.server_rendered_content")
    g = next(c for c in geo if c.id == "geo.content_readable_by_ai")
    print(f"\n### {label}")
    print(f"    facts.words = {facts.words}  headings = {len(facts.headings)}")
    print(f"    seo.server_rendered_content -> {s.status.upper()} (w={s.weight}): {s.detail}")
    print(f"    geo.content_readable_by_ai  -> {g.status.upper()} (w={g.weight}): {g.detail}")


HEAD = ("<!doctype html><html lang='en'><head><title>Ludo game online</title>"
        "<meta name='viewport' content='width=device-width'>"
        "<meta name='description' content='d'>")

print("=" * 78)
print("A. REAL client-rendered app shell: no content at all, normal boilerplate footer")
show("React shell <div id='root'>, 0 headings, only footer boilerplate",
     HEAD + "<script type='module' src='/assets/index.js'></script></head><body>"
     + NAV + "<div id='root'></div>" + BOILER + "</body></html>")

show("Same shell, Angular/Vue style mount point not in the hardcoded id list",
     HEAD + "<script type='module' src='/main.js'></script></head><body>"
     + NAV + "<app-root></app-root>" + BOILER + "</body></html>")

print()
print("=" * 78)
print("B. Client-rendered app that ships its markup inside <template> (Vue/Angular/Svelte do this)")
show("Blank <div id='root'> + the app's markup in an inert <template>",
     HEAD + "<script type='module' src='/main.js'></script></head><body><div id='root'></div>"
     "<template id='app-template'><h1>Ludo game online</h1><p>"
     + "Play ludo online with your friends in Pakistan for free. " * 12 +
     "</p></template>" + BOILER + "</body></html>")

print()
print("=" * 78)
print("C. genuine SHORT static page, with and without a module script")
short_body = ("<h1>Contact our Lahore office</h1>"
              "<p>Call us on 0300 1234567 or email help@example.com. Our office is on Main "
              "Boulevard, Gulberg, Lahore and is open from nine in the morning until six in "
              "the evening, Monday to Saturday.</p>")
show("short genuine page, NO script tag",
     HEAD + "</head><body>" + short_body + "</body></html>")
show("identical page + one <script type='module'> for a cookie banner",
     HEAD + "<script type='module' src='/cookie.js'></script></head><body>"
     + short_body + "</body></html>")
show("identical page + inline <script type='module'> one-liner",
     HEAD + "</head><body>" + short_body
     + "<script type='module'>import '/cookie.js'</script></body></html>")
