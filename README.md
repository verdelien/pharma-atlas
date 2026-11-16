# Pharma Atlas

An interactive graph of the top ~100 pharma companies: collaboration deals (each deal is a clickable link), company profiles, top products with revenue and loss-of-exclusivity (LOE) dates, curated events, 5-year stock charts, a competitor layer, side-by-side comparison, and a historical Top 100 timeline (c.2000–2025).

Live page: https://verdelien.github.io/pharma-atlas/

## Notes
- Single file (`index.html`); loads d3 v7 from cdnjs.
- Principle: missing is better than invented. Anything not verified from a company filing is marked 待核实 (unverified) or left blank.
- Sources include company 10-K / 20-F filings, company results releases and, for stock charts, Digrin monthly adjusted prices (local currency, quarter-end samples).
- A number of LOE dates (mainly AstraZeneca, Roche, Novartis, GSK, Sanofi and several Japanese/European companies) are still unverified.

**Informational only, not investment advice. Data may contain errors.**
