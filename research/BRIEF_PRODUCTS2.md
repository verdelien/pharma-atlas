# Product verification, pass 2 (pharma-atlas)

Read `research/BRIEF_PRODUCTS.md` first: same output format (`research/prod/<id>.json`), same rules (sources you actually loaded, never constructed; missing is better than invented; English only; downloads only in the given temp dir, deleted afterwards).

The to-do list is now `research/todo_products2.json`. These rows were NOT verifiable from annual reports in pass 1, so use the wider sources below. `need` says what is missing: `v` (FY2025 revenue) and/or `loe:<regions>`; a region "All" means no region has a verified date yet — research US, EU and Japan (and China where relevant).

## Wider sources for LOE (in order of preference)
1. Company statements anywhere (results presentations, R&D days, earnings call transcripts on the company site, 20-F risk factors) giving an expected generic/biosimilar entry year.
2. Announced patent settlements or court rulings that set a generic/biosimilar entry date (company or court documents; reputable news such as Reuters, Fierce Pharma, Endpoints is acceptable when it reports the settlement terms).
3. Generic/biosimilar entry that has already happened: an FDA/EMA approval plus launch announcement of a generic/biosimilar (then `value` = launch year, note "generics launched").
4. US small molecules: FDA Orange Book patent and exclusivity expiry for the NDA (https://www.accessdata.fda.gov/scripts/cder/ob/). Report the compound patent / latest relevant exclusivity and label it exactly, e.g. "Orange Book: compound patent US 7,xxx,xxx expires 2029-05 incl. PTE; no generic entry date announced". US biologics: FDA Purple Book reference-product exclusivity.
5. Japan: re-examination period end date from PMDA / MHLW documents, labelled as such.

Do not convert a patent expiry into a claimed generic launch date unless a source says so; say which kind of date it is in `note`. If sources conflict, give the company's own statement and mention the conflict in `note`.

## Output
Merge into the existing `research/prod/<id>.json` if it exists: add or update rows in `rows` (match `b` exactly), keep everything already there unchanged unless a better-sourced value replaces it. Create the file if it does not exist (with `"id"`, `"rows"`, `"new_products": []`).
