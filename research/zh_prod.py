#!/usr/bin/env python3
"""Chinese pass for research/prod/*.json: fills v_note_zh, note_zh (LOE) and ind_zh (new products).
  python3 research/zh_prod.py extract <outdir> [chunk_size]
  python3 research/zh_prod.py merge <dir>"""
import json, os, glob, sys

here = os.path.dirname(os.path.abspath(__file__))
files = sorted(glob.glob(os.path.join(here, "prod", "*.json")))

def slots(d):
    for r in (d.get("rows") or []) + (d.get("new_products") or []):
        yield r, "v_note"
        if "g" in r: yield r, "ind"
        for l in r.get("loe") or []: yield l, "note"

def extract(outdir, size=300):
    seen = []
    for f in files:
        for o, k in slots(json.load(open(f, encoding="utf-8"))):
            en = (o.get(k) or "").strip()
            if en and not o.get(k + "_zh") and en not in seen: seen.append(en)
    os.makedirs(outdir, exist_ok=True)
    for i in range(0, len(seen), size):
        json.dump({s: None for s in seen[i:i+size]}, open(os.path.join(outdir, f"chunk_{i//size:02d}.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"{len(seen)} strings -> {(len(seen)+size-1)//size} chunks")

def merge(d):
    m = {}
    for f in glob.glob(os.path.join(d, "chunk_*.json")):
        m.update({k: v for k, v in json.load(open(f, encoding="utf-8")).items() if isinstance(v, str) and v.strip()})
    n = miss = 0
    for f in files:
        data = json.load(open(f, encoding="utf-8")); ch = False
        for o, k in slots(data):
            en = (o.get(k) or "").strip()
            if en and not o.get(k + "_zh"):
                if en in m: o[k + "_zh"] = m[en]; n += 1; ch = True
                else: miss += 1
        if ch: json.dump(data, open(f, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"filled {n}, missing {miss}")

if __name__ == "__main__":
    extract(sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 300) if sys.argv[1] == "extract" else merge(sys.argv[2])
