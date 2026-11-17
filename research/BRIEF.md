# Pipeline research brief (pharma-atlas)

You are researching the R&D pipeline of pharma companies for a public website aimed at people who are new to healthcare investing. Today is 2026-11-16.

## Language
Write English only for now. Every bilingual object keeps the same shape but with `"zh": null` (a Chinese pass is done separately later). Do not spend effort on Chinese.

## Core rule: missing is better than invented
- Every pipeline item needs a source URL you actually opened during this task: the company's own pipeline page, its Q3 2026 (or latest) results / R&D day materials, a company press release, or clinicaltrials.gov. Reputable news (Reuters, Fierce, Endpoints, STAT) is acceptable for a catalyst date only if no company source exists.
- Cite only URLs you actually loaded, copied exactly. Never construct or guess a URL (e.g. a PDF path by pattern). Before finishing, check each URL with `curl -sSIL -o /dev/null -w '%{http_code}' -A 'Mozilla/5.0' <url>`; a 404 means replace it (403/429 from bot-blocking is fine).
- If you cannot verify a field, set it to null and say so in `gaps`. Never fill in from memory. Do not guess dates.
- Prefer the most recent information (late 2026). If a source is older than 2026-06, say so in `gaps`.

## Sources and method
- Start from the company's own pipeline page and its latest quarterly results release / presentation (Q3 2026, or the latest half-year for companies that report semi-annually). Read the whole pipeline page, not just headlines: the goal is the 4–10 most important assets, and big companies should usually reach 8–10.
- Prefer primary sources (company site, exchange filings such as SEC/HKEX/SSE/BSE/TSE, clinicaltrials.gov) over news reposts. Use a news site only when no primary source is reachable, and say so in `gaps`.
- If a page will not load in your browser tool, you may download it with `curl -sSL -A "Mozilla/5.0"` into the temporary directory you are given, extract the text, and delete the downloaded file as soon as you are done with it. Never save anything outside the temp dir and the output dir.
- Private companies (e.g. Boehringer Ingelheim, Servier, Menarini, Chiesi, Ferring, Octapharma, Pierre Fabre, Grünenthal, Kedrion, LEO, Intas) still publish pipelines; use the company site.

## Output
Write one JSON file per company to the output directory you are given, named `<id>.json`, with exactly this shape:

```json
{
  "id": "lilly",
  "asof": "2026-11",
  "summary": {"en": "1–2 sentences on the character of the pipeline (where it is concentrated, how late-stage it is, how dependent on in-licensing).", "zh": "同上,自然的简体中文"},
  "counts": {"p1": 0, "p2": 0, "p3": 0, "reg": 0, "note": "as reported by the company on <page/date>"},
  "items": [
    {
      "name": "retatrutide",
      "code": "LY3437943",
      "modality": "peptide",
      "target": {"en": "GIP/GLP-1/glucagon receptor agonist", "zh": "GIP/GLP-1/胰高血糖素受体激动剂"},
      "ind": {"en": "Obesity", "zh": "肥胖症"},
      "phase": "3",
      "ta": "Metabolic",
      "origin": "internal",
      "next": {"en": "Phase 3 TRIUMPH readouts", "zh": "III 期 TRIUMPH 数据读出", "when": "2026H2"},
      "src": "https://..."
    }
  ],
  "watch": [
    {"k": "catalyst", "en": "...", "zh": "...", "src": "https://... or null"}
  ],
  "sources": [["Lilly pipeline page", "https://..."]],
  "gaps": ["what you could not verify, and why"]
}
```

Field rules:
- `counts`: only if the company publishes counts by phase; otherwise `null`. Do not count items yourself.
- `items`: the 4–10 most important assets, late-stage first (registration/filed, then Phase 3, then notable Phase 2). One entry per asset; put the lead indication in `ind` and mention others briefly in `ind.en` (e.g. "Obesity; also OSA, knee OA").
- `phase`: one of `"1"`, `"2"`, `"3"`, `"reg"` (filed / under regulatory review), or null if undisclosed. An already-approved drug may be included for a major NEW indication in Phase 3 or filed (name it e.g. "zanidatamab (1L gastroesophageal cancer)", phase = that programme's phase), especially when such label expansions are the company's main late-stage activity; keep these to the most important ones.
- `modality`: short lowercase word(s): small molecule, antibody, ADC, bispecific, peptide, siRNA, cell therapy, gene therapy, vaccine, radioligand, other.
- `ta`: one of Oncology, Immunology, Neuroscience, Metabolic, Cardiovascular, Infectious disease, Vaccines, Rare disease, Hematology, Respiratory, Ophthalmology, Women's health, Bone, Other.
- `origin`: internal, licensed, acquired, co-developed.
- `next`: either null or an object with BOTH `en` and `zh` text plus `when`. Never a bare string.
- `origin`: fill it when the company site, a press release or a filing states it (e.g. "licensed from X", "acquired with Y"); otherwise null and note it in `gaps`.
- `next.when`: "2026Q4", "2027H1", "2027" etc. as the company states it; null if not stated.
- `watch`: 3–5 points a beginner investor should look into for THIS company. `k` is one of: catalyst (upcoming readout/approval), loe (patent cliff exposure), concentration (dependence on one product/area), deal (licensing/M&A dependence or capacity), policy (pricing law, IRA negotiation, China VBP, biosimilars), balance (debt, cash, capacity to fund R&D), other. Be concrete and factual, not advice. No "buy/sell" language.
- If the company has a thin or generic-heavy pipeline, that is a valid finding: return few items, say so in `summary`, and focus `watch` on what actually drives the business.

When done, reply in under 120 words: files written, number of items per company, and the main gaps. Do not paste the JSON.
