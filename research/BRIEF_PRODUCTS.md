# Product verification brief (pharma-atlas, phase 2)

Today is 2026-11-17. You are verifying product data for a public website for new healthcare investors. Same core rule as the pipeline work: **missing is better than invented**. Every value needs a source URL you actually loaded (copied exactly, never constructed). Use primary sources: annual reports / 10-K / 20-F (the patent and exclusivity tables), results releases, exchange filings, the FDA Orange Book or Purple Book, EMA documents, court or settlement announcements by the company. If you download a file, put it in the temp directory you are given and delete it when done.

The to-do list is `research/todo_products.json`:
- `rows[<companyId>]`: products whose FY2025 revenue (`need` contains "v") and/or loss-of-exclusivity dates (`need` contains "loe") are unverified. Current values are shown; `loe` rows are `[region, value, note]`.
- `no_products`: companies with no product data yet.

## Output
One file per company: `research/prod/<companyId>.json`.

```json
{
  "id": "az",
  "rows": [
    {
      "b": "<brand exactly as in the to-do list>",
      "v": 6.21,
      "v_note": "FY2025 product sales as reported, USD bn (or: reported in EUR 5.4bn, converted at the company's average FY2025 rate of 1.08)",
      "v_src": "https://...",
      "loe": [
        {"region": "US", "value": "2031", "note": "Compound patent incl. extension (10-K 2025 patent table)", "src": "https://..."}
      ]
    }
  ],
  "new_products": []
}
```

Rules:
- Only include fields you verified. If a value stays unverified, leave it out (or `null`) rather than guessing. Do not repeat values that were already verified.
- `v`: FY2025 (the company's fiscal year ending in 2025, or FY ending March 2026 for Japanese/Indian March-year companies; say which in `v_note`) product revenue in USD billions, 3 decimals max. Non-USD: give the reported amount and currency in `v_note` and convert with the company's own stated average rate if it gives one, else the year-average rate, and say which.
- `loe.value`: the year (or "YYYY-MM") generics/biosimilars can enter in that region, per the company's own disclosure (patent table, settlement, guidance). If it has already happened, use the year it happened and say so. Only regions from the to-do row (usually US, EU, Japan, China).
- `new_products` (only for companies in `no_products`): up to 5 top products by FY2025 revenue, each `{"b": brand, "g": generic name, "ind": "main indication(s)", "v": number|null, "v_note": "...", "v_src": url, "yr": "first approval year"|null, "o": "internal|licensed|co-developed|acquired"|null, "loe": [{"region","value","note","src"}]}`. Generic-heavy companies often do not disclose product-level revenue; then give the products the company itself highlights, with `v: null` and say so in `v_note`.
- English only.

When done, print a summary under 100 words: files written, how many values verified vs still unverified.
