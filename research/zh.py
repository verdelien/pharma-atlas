#!/usr/bin/env python3
"""Chinese pass for pipeline data.
  python3 research/zh.py extract <outdir> [chunk_size]  -> writes chunk_NN.json files: {"<en text>": null, ...}
  python3 research/zh.py merge <dir>                    -> reads chunk_NN.json with filled values, fills "zh" in research/data/*.json
Only fills zh where it is null/empty; never touches en."""
import json, os, glob, sys

here = os.path.dirname(os.path.abspath(__file__))
files = sorted(glob.glob(os.path.join(here, "data", "*.json")))

def bilingual_objs(d):
    if isinstance(d.get("summary"), dict): yield d["summary"]
    for it in d.get("items") or []:
        for k in ("target", "ind", "next"):
            if isinstance(it.get(k), dict): yield it[k]
    for w in d.get("watch") or []: yield w

def extract(outdir, size=250):
    seen = []
    for f in files:
        for o in bilingual_objs(json.load(open(f, encoding="utf-8"))):
            en = (o.get("en") or "").strip()
            if en and not o.get("zh") and en not in seen: seen.append(en)
    os.makedirs(outdir, exist_ok=True)
    for i in range(0, len(seen), size):
        json.dump({s: None for s in seen[i:i+size]}, open(os.path.join(outdir, f"chunk_{i//size:02d}.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"{len(seen)} strings -> {(len(seen)+size-1)//size} chunks in {outdir}")

def merge(d):
    m = {}
    for f in sorted(glob.glob(os.path.join(d, "chunk_*.json"))):
        m.update({k: v for k, v in json.load(open(f, encoding="utf-8")).items() if isinstance(v, str) and v.strip()})
    filled = missing = 0
    for f in files:
        data = json.load(open(f, encoding="utf-8")); changed = False
        for o in bilingual_objs(data):
            en = (o.get("en") or "").strip()
            if en and not o.get("zh"):
                if en in m: o["zh"] = m[en]; filled += 1; changed = True
                else: missing += 1
        if changed: json.dump(data, open(f, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"filled {filled}, still missing {missing}")

if __name__ == "__main__":
    if sys.argv[1] == "extract": extract(sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 250)
    else: merge(sys.argv[2])
