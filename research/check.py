#!/usr/bin/env python3
"""Validate bake-off pipeline JSON files and check source URLs.
usage: check.py <dir> [<dir> ...]"""
import json, sys, os, re, subprocess, concurrent.futures as cf

PH = {"1", "2", "3", "reg"}
TA = {"Oncology","Immunology","Neuroscience","Metabolic","Cardiovascular","Infectious disease","Vaccines",
      "Rare disease","Hematology","Respiratory","Ophthalmology","Women's health","Bone","Other"}
OR = {"internal","licensed","acquired","co-developed"}
WK = {"catalyst","loe","concentration","deal","policy","balance","other"}
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15"

def bi(x):
    return isinstance(x, dict) and isinstance(x.get("en"), str) and x["en"].strip() and (x.get("zh") is None or (isinstance(x.get("zh"), str) and re.search(r"[\u4e00-\u9fff]", x["zh"])))

def status(u):
    try:
        out = subprocess.run(["curl", "-sS", "-L", "-o", "/dev/null", "-w", "%{http_code}", "-m", "20", "-A", UA, u],
                             capture_output=True, text=True, timeout=30).stdout.strip()
        return out or "ERR"
    except Exception:
        return "ERR"

def check(path):
    errs, urls = [], set()
    try:
        d = json.load(open(path))
    except Exception as e:
        return {"file": path, "fatal": f"invalid JSON: {e}"}
    for k in ["id","asof","summary","counts","items","watch","sources","gaps"]:
        if k not in d: errs.append(f"missing {k}")
    if not bi(d.get("summary")): errs.append("summary not bilingual")
    items = d.get("items") or []
    nosrc = 0
    for i, it in enumerate(items):
        p = f"item{i}({it.get('name')})"
        if it.get("phase") not in PH: errs.append(f"{p} bad phase {it.get('phase')!r}")
        if it.get("ta") not in TA: errs.append(f"{p} bad ta {it.get('ta')!r}")
        if it.get("origin") not in OR: errs.append(f"{p} bad origin {it.get('origin')!r}")
        if not bi(it.get("ind")): errs.append(f"{p} ind not bilingual")
        if it.get("target") is not None and not bi(it.get("target")): errs.append(f"{p} target not bilingual")
        n = it.get("next")
        if n is not None and not bi(n): errs.append(f"{p} next not bilingual")
        if isinstance(it.get("src"), str) and it["src"].startswith("http"): urls.add(it["src"])
        else: nosrc += 1
    for i, w in enumerate(d.get("watch") or []):
        if w.get("k") not in WK: errs.append(f"watch{i} bad k {w.get('k')!r}")
        if not (isinstance(w.get("en"), str) and (w.get("zh") is None or isinstance(w.get("zh"), str))): errs.append(f"watch{i} not bilingual")
        if isinstance(w.get("src"), str) and w["src"].startswith("http"): urls.add(w["src"])
    for s in d.get("sources") or []:
        if isinstance(s, list) and len(s) == 2 and str(s[1]).startswith("http"): urls.add(s[1])
    with cf.ThreadPoolExecutor(8) as ex:
        st = dict(zip(urls, ex.map(status, urls)))
    bad = {u: c for u, c in st.items() if not c.startswith(("2", "3"))}
    phases = {}
    for it in items: phases[it.get("phase")] = phases.get(it.get("phase"), 0) + 1
    return {"file": os.path.relpath(path), "items": len(items), "phases": phases, "watch": len(d.get("watch") or []),
            "gaps": len(d.get("gaps") or []), "items_without_src": nosrc, "urls": len(urls), "bad_urls": bad, "schema_errors": errs}

if __name__ == "__main__":
    for dd in sys.argv[1:]:
        for f in sorted(os.listdir(dd)):
            if f.endswith(".json"):
                print(json.dumps(check(os.path.join(dd, f)), ensure_ascii=False))
