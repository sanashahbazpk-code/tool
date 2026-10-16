#!/usr/bin/env python
"""Launcher for seo-tool.

Runs on any Python 3.8+, but the HTML parser needs `lxml`. If the interpreter you used does
not have lxml, this launcher finds a Python that does (for example the one bundled with the
DeepSeek Harness runtime) and re-runs itself with that interpreter. If nothing suitable is
found, it tells you exactly what to install instead of throwing an ImportError traceback.

Usage:
    python seo.py audit example.com
    python seo.py research example.com --competitors a.com,b.com --xlsx
"""

from __future__ import annotations

import os
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

MIN_PY = (3, 8)


def _check_interpreter(path: str) -> bool:
    """True if this interpreter exists and can import lxml."""
    if not path or not os.path.exists(path):
        return False
    if os.path.abspath(path).lower() == os.path.abspath(sys.executable).lower():
        return False
    try:
        proc = subprocess.run(
            [path, "-c", "import lxml, sys; sys.exit(0 if lxml else 1)"],
            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=90,
        )
        return proc.returncode == 0
    except Exception:
        return False


def _candidate_interpreters() -> list[str]:
    home = os.path.expanduser("~")
    local = os.environ.get("LOCALAPPDATA", os.path.join(home, "AppData", "Local"))
    names = ["python.exe" if os.name == "nt" else "python3", "python.exe" if os.name == "nt" else "python"]

    roots: list[str] = []
    for var in ("SEOTOOL_PYTHON", "DSH_PYTHON"):
        if os.environ.get(var):
            roots.append(os.environ[var])

    # DeepSeek Harness bundled runtime (the usual case on this machine)
    for base in (
        os.path.join(home, ".dsh", "dsh-runtimes", "dsh-primary-runtime", "dependencies", "python"),
        os.path.join(local, "dsh", "dsh-runtimes", "dsh-primary-runtime", "dependencies", "python"),
    ):
        for n in names:
            roots.append(os.path.join(base, n))

    # Common system locations
    for base in (
        r"C:\Python313", r"C:\Python312", r"C:\Python311", r"C:\Python310",
        os.path.join(local, "Programs", "Python", "Python313"),
        os.path.join(local, "Programs", "Python", "Python312"),
        os.path.join(local, "Programs", "Python", "Python311"),
        "/usr/bin", "/usr/local/bin", "/opt/homebrew/bin",
    ):
        for n in names:
            roots.append(os.path.join(base, n))

    # `py -0p` lists every installed interpreter on Windows
    if os.name == "nt":
        try:
            out = subprocess.run(["py", "-0p"], capture_output=True, text=True, timeout=30)
            for line in (out.stdout or "").splitlines():
                if "\\" in line:
                    roots.append(line.split()[-1].strip())
        except Exception:
            pass

    seen: set[str] = set()
    ordered: list[str] = []
    for r in roots:
        key = os.path.abspath(r).lower()
        if key not in seen:
            seen.add(key)
            ordered.append(r)
    return ordered


def _missing_dependency_help() -> str:
    return f"""
================================================================================
  seo-tool needs 'lxml', which is not installed in this Python.

  Your Python   : {sys.executable}

  Do one of these:

  1) Easiest -- use the Python that ships with the tool
     (the DeepSeek Harness runtime already includes lxml):

        cd "{HERE}"
        .\\run.cmd audit example.com

  2) Or install lxml into your Python:

        "{sys.executable}" -m pip install lxml

     (For Excel export too:  -m pip install lxml openpyxl )

  The tool works fully without Excel; only the --xlsx flag needs openpyxl.
================================================================================
"""


def main() -> int:
    if sys.version_info < MIN_PY:
        print(f"seo-tool needs Python {MIN_PY[0]}.{MIN_PY[1]} or newer; this is "
              f"{sys.version.split()[0]}", file=sys.stderr)
        return 2

    try:
        import lxml  # noqa: F401
    except ImportError:
        for cand in _candidate_interpreters():
            if _check_interpreter(cand):
                print(f"[seo-tool] lxml is missing in this Python; re-running with: {cand}",
                      file=sys.stderr)
                try:
                    return subprocess.call([cand, os.path.abspath(__file__)] + sys.argv[1:])
                except KeyboardInterrupt:
                    return 130
        print(_missing_dependency_help(), file=sys.stderr)
        return 3

    from seotool.cli import main as cli_main
    return cli_main()


if __name__ == "__main__":
    raise SystemExit(main())
