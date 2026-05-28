// n8n package entry point — aggregates the node + credential exports
module.exports = {
  nodes: [require("./dist/nodes/PalavirCompliance/PalavirCompliance.node.js").PalavirCompliance],
  credentials: [require("./dist/credentials/PalavirComplianceApi.credentials.js").PalavirComplianceApi],
};
