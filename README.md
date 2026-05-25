# n8n-nodes-palavir-compliance

n8n community node for the [Palavir Compliance API](https://palavir.co/exclusion-screening) — screen entities against three federal databases (LEIE, OFAC SDN, SAM.gov) in one call.

## Install

In n8n:

1. **Settings** → **Community Nodes** → **Install**
2. Enter `n8n-nodes-palavir-compliance`
3. Click Install
4. Add the **Palavir Compliance API** credential (RapidAPI key)
5. Drop the **Palavir Compliance** node into any workflow

## Operations

- **Screen Entity** — one name (with optional NPI / state / DOB) against LEIE + OFAC + SAM
- **Screen Batch** — up to 100 entities in one call
- **Get API Info** — database record counts + refresh timestamps

## Credentials

Get a free RapidAPI key (100 req/mo) at https://rapidapi.com/palavir-palavir-default/api/federal-exclusion-sanctions-screener

## Use cases

- KYC / vendor onboarding workflow
- Healthcare provider credentialing (NPI-based LEIE check)
- Hire screening (OFAC SDN check)
- Compliance escalation: any `risk_level: MATCH` → Slack alert + ticket

## License

MIT. Underlying API metered through RapidAPI.

## Author

Palavir LLC — josh@palavir.co
