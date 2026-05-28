import type {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";

export class PalavirCompliance implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Palavir Compliance",
    name: "palavirCompliance",
    icon: "file:palavirCompliance.svg",
    group: ["transform"],
    version: 1,
    subtitle: '={{$parameter["operation"]}}',
    description:
      "Screen entities against LEIE, OFAC SDN, and SAM.gov in one call",
    defaults: { name: "Palavir Compliance" },
    inputs: ["main"],
    outputs: ["main"],
    credentials: [{ name: "palavirComplianceApi", required: true }],
    requestDefaults: {
      baseURL: "https://federal-exclusion-sanctions-screener.p.rapidapi.com",
      headers: { "Content-Type": "application/json" },
    },
    properties: [
      {
        displayName: "Operation",
        name: "operation",
        type: "options",
        noDataExpression: true,
        options: [
          {
            name: "Screen Entity",
            value: "screenEntity",
            action: "Screen one entity against LEIE OFAC and SAM",
            routing: {
              request: { method: "POST", url: "/api/screen" },
            },
          },
          {
            name: "Screen Batch",
            value: "screenBatch",
            action: "Screen up to 100 entities",
            routing: {
              request: { method: "POST", url: "/api/screen/batch" },
            },
          },
          {
            name: "Get API Info",
            value: "getInfo",
            action: "Get database record counts",
            routing: {
              request: { method: "GET", url: "/api/info" },
            },
          },
          {
            name: "Get API Stats",
            value: "getStats",
            action: "Get record counts and last-refresh timestamps",
            routing: {
              request: { method: "GET", url: "/api/stats" },
            },
          },
          {
            name: "Health Check",
            value: "healthCheck",
            action: "Check API liveness",
            routing: {
              request: { method: "GET", url: "/health" },
            },
          },
        ],
        default: "screenEntity",
      },
      // Screen Entity fields
      {
        displayName: "Name",
        name: "name",
        type: "string",
        default: "",
        required: true,
        displayOptions: { show: { operation: ["screenEntity"] } },
        routing: { request: { body: { name: "={{$value}}" } } },
      },
      {
        displayName: "NPI (optional)",
        name: "npi",
        type: "string",
        default: "",
        displayOptions: { show: { operation: ["screenEntity"] } },
        routing: { request: { body: { npi: "={{$value || undefined}}" } } },
      },
      {
        displayName: "State (optional)",
        name: "state",
        type: "string",
        default: "",
        displayOptions: { show: { operation: ["screenEntity"] } },
        routing: { request: { body: { state: "={{$value || undefined}}" } } },
      },
      // Screen Batch fields
      {
        displayName: "Entities (JSON array)",
        name: "entities",
        type: "string",
        typeOptions: { rows: 6 },
        default: '[\n  {"name": "John Smith", "npi": "1234567890"}\n]',
        required: true,
        displayOptions: { show: { operation: ["screenBatch"] } },
        description:
          "Array of 1-100 entities, JSON-encoded. Each entity needs `name` (string); optional `npi`, `state` (2-letter), `dob` (YYYY-MM-DD).",
        routing: { request: { body: { entities: "={{JSON.parse($value)}}" } } },
      },
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    // Routing handles the request; this fallback shouldn't fire.
    const items = this.getInputData();
    return [items];
  }
}
