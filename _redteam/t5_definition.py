"""Claim 5: definition-style openers work in English AND Roman Urdu."""
import rt_common  # noqa: F401  (sets sys.path)
from seotool.dom import _DEFINITION_PATTERNS as P

SHOULD_MATCH = [
    ("English, clean", "Ludo is a board game played with four tokens and a dice."),
    ("English, refers to", "Aperture refers to the opening through which light enters."),
    ("English with comma clause", "Aperture, in photography, is the opening that lets light in."),
    ("English with parenthetical", "The aperture (the opening that lets light in) is the key setting."),
    ("English colon definition", "Aperture: the opening through which light enters the lens."),
    ("English 'which is'", "Ludo, which is a classic board game, is played by four people."),
    ("English 'is defined as'", "Aperture is defined as the opening that admits light."),
    ("Roman Urdu: ka matlab hai", "Ludo ka matlab hai chaar khiladiyon ka board game."),
    ("Roman Urdu: ko kehte hain", "Ludo ko board game kehte hain."),
    ("Roman Urdu: 'X ek Y hai' (canonical)", "Ludo ek board game hai jo chaar log khelte hain."),
    ("Roman Urdu: 'X ek ... hota hai'", "Aperture ek camera setting hota hai."),
    ("Roman Urdu: 'matlab ye hai'", "Ludo ka matlab ye hai ke chaar khiladi khelte hain."),
    ("Roman Urdu: 'kya hai'", "Ludo kya hai? Ye chaar khiladiyon ka board game hai."),
    ("Roman Urdu: 'se murad'", "Ludo se murad chaar khiladiyon ka board game hai."),
    ("Urdu script", "لڈو ایک بورڈ گیم ہے جو چار کھلاڑی کھیلتے ہیں۔"),
]
SHOULD_NOT_MATCH = [
    ("Marketing sentence", "Prices are subject to change without notice."),
    ("Call to action", "Sign up is free and takes one minute."),
    ("Non-definition 'is'", "Buying a camera online is easier than it has ever been."),
    ("Random Urdu prose (not a definition)", "ہم کراچی میں رہتے ہیں اور کام کرتے ہیں۔"),
]

print("== should MATCH ==")
for label, text in SHOULD_MATCH:
    m = P.match(text)
    print(f"{'MATCH  ' if m else 'MISSED '} {label:38s} | {text[:60]}")

print("\n== should NOT match ==")
for label, text in SHOULD_NOT_MATCH:
    m = P.match(text)
    print(f"{'FALSE+ ' if m else 'ok     '} {label:38s} | {text[:60]}  -> {m.group(0) if m else ''!r}")
