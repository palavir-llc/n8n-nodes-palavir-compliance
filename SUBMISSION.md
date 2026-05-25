# n8n Community Node Submission

**Status:** Scaffold ready. Needs: build, local test, npm publish, optional Verified Creator application.

## Submit (~3 hr)

### 1. Build + test locally (~1 hr)

```bash
cd deliverables/integrations/n8n
npm install
npm run build
# Link into local n8n install
npm link
cd ~/.n8n/custom
npm link n8n-nodes-palavir-compliance
n8n start
# Test all 3 operations in the n8n UI
```

### 2. Publish to npm (~15 min)

```bash
npm login   # use the palavir npm account
npm publish --access public
```

Once published, it's auto-discoverable in n8n's Community Nodes installer.

### 3. (Optional) Verified Creator application

- n8n Verified Creator program: https://docs.n8n.io/integrations/creating-nodes/community-nodes/
- Required for badge + listing in n8n.io directory
- Gates: at least 1 published community node, documentation, support email
- Apply via https://community.n8n.io

## What buyers see

Once published, any n8n user can `Install` → `n8n-nodes-palavir-compliance` → drop node in workflow → enter their RapidAPI key. Every workflow that uses the node funnels API calls to the metered RapidAPI endpoint.
