# Pharma Atlas

An interactive graph of the top ~100 pharma companies: R&D pipelines with a "What to watch" box per company, an investing primer for beginners, collaboration deals (each deal is a clickable link), company profiles, top products with revenue and loss-of-exclusivity (LOE) dates, curated events, 5-year stock charts, a competitor layer, side-by-side comparison, and a historical Top 100 timeline (c.2000–2025).

Live page: https://verdelien.github.io/pharma-atlas/

## Notes
- `index.html` / `zh.html` plus two data files they load: `pipeline.js` (generated from `research/data/*.json` by `research/build.py`) and `primer.js` (the Primer tab text). Loads d3 v7 from cdnjs.
- Pipelines (as of November 2026) come from company pipeline pages, results releases, exchange filings and clinicaltrials.gov; every item links to its source and unverifiable fields are left blank. `research/BRIEF.md` is the research brief and `research/check.py` validates the data.
- Principle: missing is better than invented. Anything not verified from a company filing is marked 待核实 (unverified) or left blank.
- Sources include company 10-K / 20-F filings, company results releases and, for stock charts, Digrin monthly adjusted prices (local currency, quarter-end samples).
- A number of LOE dates (mainly AstraZeneca, Roche, Novartis, GSK, Sanofi and several Japanese/European companies) are still unverified.

**Informational only, not investment advice. Data may contain errors.**

## Languages

- English (default): `index.html`
- 中文: `zh.html`

The Chinese file is the source; the English version is generated from it (data, UI and Method text). Use the **How to read** button in the page for a short guide.
