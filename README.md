# n8n-nodes-palavir-compliance

n8n community node for the [Palavir Compliance API](https://rapidapi.com/palavir-palavir-default/api/federal-exclusion-sanctions-screener) — screen entities against three federal databases (LEIE, OFAC SDN, SAM.gov) in one workflow node.

**269,819 verified federal records, refreshed daily.** Use it for KYC, vendor onboarding, healthcare credentialing, hire screening, or any compliance workflow that needs to confirm a counterparty is not federally excluded.

## Pricing

| Tier | Price/mo | Requests/mo | Best for |
|---|---|---|---|
| **Basic** | $0 | 100 | Evaluation, hobbyist scripts |
| **Starter** | $29 | 1,000 | Solo founder, small consultancy |
| **Pro** | $99 | 10,000 | Compliance team, AP / procurement |
| **Ultra** | $299 | 50,000 | Mid-market platform |
| **Enterprise** | $999 | 250,000 | KYC SaaS subprocessor, large lender |

[Subscribe to get your API key →](https://rapidapi.com/palavir-palavir-default/api/federal-exclusion-sanctions-screener)

## Install

In n8n:

1. **Settings** → **Community Nodes** → **Install**
2. Enter `n8n-nodes-palavir-compliance`
3. Click Install
4. Add the **Palavir Compliance API** credential (paste your RapidAPI key)
5. Drop the **Palavir Compliance** node into any workflow

## Operations

- **Screen Entity** — one name (with optional NPI / state / DOB) against LEIE + OFAC + SAM
- **Screen Batch** — up to 100 entities in one call (counts as 1 against quota)
- **Get API Info** — database record counts + refresh timestamps

## Use cases

- **Vendor onboarding** — new vendor record in Airtable / Notion / HubSpot triggers a screen; risk_level=MATCH routes to compliance review
- **Healthcare provider credentialing** — daily cron pulls roster CSV, screens each NPI against LEIE, alerts on any new exclusion
- **Hire screening** — ATS webhook → screen against OFAC SDN before offer letter
- **Compliance escalation** — any `risk_level: MATCH` posts to Slack + creates Jira ticket
- **Continuous re-screening** — monthly cron re-screens all active vendors to catch new exclusions

## Why this beats writing the integration yourself

DIY OFAC + LEIE + SAM screening requires parsing 3 different data formats (OFAC XML, LEIE CSV, SAM JSON), handling daily/monthly refreshes, normalizing names across databases, and managing rate limits. This node does all of that and returns a clean JSON response. The Starter tier at **$29/mo** pays for itself in 1 hour of saved engineering time.

## License

MIT. Underlying API metered through RapidAPI per its terms.

## Author

Palavir LLC — josh@palavir.co — https://palavir.co
