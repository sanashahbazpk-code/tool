#!/usr/bin/env python
"""Launcher for the seo-tool web UI.

Finds a Python that has `lxml` (like seo.py does) and starts the local web app.

    python serve_web.py
    python serve_web.py --port 9000 --open
"""

from __future__ import annotations

import os
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))


def _works(path: str) -> bool:
    if not path or not os.path.exists(path):
        return False
    if os.path.abspath(path).lower() == os.path.abspath(sys.executable).lower():
        return False
    try:
        p = subprocess.run([path, "-c", "import lxml, seotool" if False else "import lxml"],
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=90,
                           cwd=HERE)
        return p.returncode == 0
    except Exception:
        return False


def _candidates() -> list[str]:
    home = os.path.expanduser("~")
    local = os.environ.get("LOCALAPPDATA", os.path.join(home, "AppData", "Local"))
    exe = "python.exe" if os.name == "nt" else "python3"
    roots: list[str] = []
    for var in ("SEOTOOL_PYTHON", "DSH_PYTHON"):
        if os.environ.get(var):
            roots.append(os.environ[var])
    for base in (
        os.path.join(home, ".dsh", "dsh-runtimes", "dsh-primary-runtime", "dependencies", "python"),
        os.path.join(local, "dsh", "dsh-runtimes", "dsh-primary-runtime", "dependencies", "python"),
    ):
        roots.append(os.path.join(base, exe))
    for base in (r"C:\Python313", r"C:\Python312", r"C:\Python311", r"C:\Python310",
                 "/usr/bin", "/usr/local/bin", "/opt/homebrew/bin"):
        roots.append(os.path.join(base, exe))
    if os.name == "nt":
        try:
            out = subprocess.run(["py", "-0p"], capture_output=True, text=True, timeout=30)
            for line in (out.stdout or "").splitlines():
                if "\\" in line:
                    roots.append(line.split()[-1].strip())
        except Exception:
            pass
    seen, ordered = set(), []
    for r in roots:
        k = os.path.abspath(r).lower()
        if k not in seen:
            seen.add(k)
            ordered.append(r)
    return ordered


def main() -> int:
    try:
        import lxml  # noqa: F401
    except ImportError:
        for cand in _candidates():
            if _works(cand):
                print(f"[seo-tool] UI chala rahe hain is Python se: {cand}")
                return subprocess.call([cand, os.path.abspath(__file__)] + sys.argv[1:], cwd=HERE)
        print(
            "\n".join([
                "",
                "=" * 74,
                "  UI ko 'lxml' chahiye jo is Python mein nahi mila.",
                f"  Aap ka Python: {sys.executable}",
                "",
                "  Aasan hal:  serve_web.cmd chalayein",
                f"  Ya:         \"{sys.executable}\" -m pip install lxml",
                "=" * 74,
                "",
            ]),
            file=sys.stderr,
        )
        return 3

    sys.path.insert(0, HERE)
    from webapp.server import main as server_main
    return server_main(sys.argv[1:])


if __name__ == "__main__":
    raise SystemExit(main())
