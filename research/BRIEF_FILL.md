# Pipeline fill pass (pharma-atlas)

Read `research/BRIEF.md` first: same rules (sources you actually loaded and copied exactly, never constructed; missing is better than invented; English only with `"zh": null`; downloads only in the given temp dir, deleted afterwards).

Task: for each company you are given, open `research/data/<id>.json` and, for every item, try to fill these fields where they are null or empty:
- `origin`: internal / licensed / acquired / co-developed — only when a company page, press release, filing or the partner's release states it.
- `next`: the next milestone the company (or its partner) has publicly stated, with `when` as stated ("2027H1", "2026Q4", "2027"). Trial primary-completion dates on clinicaltrials.gov are NOT company guidance; you may use them only as `{"en": "Primary completion of <trial> (ClinicalTrials.gov estimate)", "when": "<date>"}` and only for Phase 2/3 trials.
- `target`, `modality`: from the company pipeline page, a press release or the INN/WHO record.
- `phase` where it is null: only if a source states it.

Also re-check every existing `phase` and `next` against the company's latest pipeline page (late 2026). If something has changed since the file was written (approved, discontinued, moved phase, new date), correct it, and if an item was discontinued, remove it and mention that in `gaps`.

Rules:
- Edit the file in place; keep `en` texts concise and factual; set `zh` to null on any object you add or change (a Chinese pass runs afterwards).
- If you used a new source, put its URL in the item's `src` only if it supports the item's phase; otherwise add it to `sources` with a short label.
- Update `gaps`: remove gaps you resolved, keep the rest.
- Do not add new items unless one is clearly among the company's most important late-stage assets and is missing (max 10 items total).
- Before finishing, check every new URL with `curl -sSIL -o /dev/null -w '%{http_code}' -A 'Mozilla/5.0' <url>`; replace any 404.
