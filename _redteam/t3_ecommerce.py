"""Claim 3: e-commerce detection only fires on real shops (_is_ecommerce)."""
import rt_common  # noqa: F401
from seotool.dom import parse_html
from seotool.audits import _is_ecommerce, audit_seo
from rt_common import dummy_site, dummy_home

TRUST = {"about": 200, "contact": 200, "privacy": 200, "terms": 200,
         "blog": 200, "shipping": 0, "returns": 0, "faq": 0}


def check(label, body, expect):
    html = ("<!doctype html><html lang='en'><head><title>Page about things and stuff here</title>"
            "<meta name='description' content='d'>"
            "<meta name='viewport' content='width=device-width'>"
            "</head><body>" + body + "</body></html>")
    facts = parse_html(html, "https://example.com/")
    is_ecom = _is_ecommerce(facts)
    checks = audit_seo(facts, dummy_site(), dummy_home(html), TRUST)
    tp = next((c for c in checks if c.id == "seo.trust_pages"), None)
    verdict = "OK" if is_ecom == expect else "WRONG"
    print(f"{verdict:5s} {label}")
    print(f"        _is_ecommerce={is_ecom} (expected {expect})  schema={facts.schema_types}")
    if tp:
        print(f"        seo.trust_pages -> {tp.status}: {tp.detail}")


print("### pages that are NOT shops")
check("SaaS pricing page with 'Buy now' CTA + 'Proceed to checkout'",
      "<h1>Pricing</h1><p>Our plans cost Rs 2,000 per month. Start free.</p>"
      "<a href='/signup'>Buy now</a> <a href='/pay'>Proceed to checkout</a>"
      "<p>Cancel any time. No credit card required for the free tier.</p>",
      False)

check("Help-centre article about Shopify: mentions 'add to cart' and 'checkout'",
      "<h1>How to add a cart to your store</h1>"
      "<p>Use the add to cart button on the product page. When the shopper clicks checkout, "
      "your app must create an order. The shopping cart API is documented below.</p>",
      False)

check("News article: 'buy now, pay later' + 'out of stock'",
      "<h1>Buy now pay later is booming</h1>"
      "<p>Retailers report that items go out of stock faster when a buy now button is shown. "
      "Analysts say the buy now pay later market will triple.</p>",
      False)

check("WordPress 'how to add to cart' tutorial (add to cart + shopping cart)",
      "<h1>WooCommerce setup guide</h1><p>Learn how to add to cart buttons work, what the "
      "shopping cart does, and how checkout works in WordPress.</p>",
      False)

print("\n### pages that ARE shops")
check("Real shop, English CTAs, no JSON-LD",
      "<h1>Shop</h1><div class='product'><h2>Camera</h2><p>Rs 45,000</p>"
      "<button>Add to Cart</button></div>",
      True)

check("Real shop, Roman Urdu CTAs only, no JSON-LD (Pakistani small business site)",
      "<h1>Hamari Dukan</h1><div class='product'><h2>Camera</h2>"
      "<p>Qeemat: Rs 45,000</p><button>Ab Kharidain</button>"
      "<p>Cash on delivery poore Pakistan mein. Delivery charges Rs 200. "
      "Wapas karne ki soorat mein 7 din ka waqt hai.</p></div>",
      True)

check("Real shop, Shopify-style: cart link in nav, price, no Product schema",
      "<h1>Store</h1><nav><a href='/cart'>Cart (2)</a></nav>"
      "<div><h2>Nikon D3500</h2><p>PKR 89,999</p><a href='/order'>Order</a></div>",
      True)
