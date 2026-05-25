import {
  IAuthenticateGeneric,
  ICredentialType,
  INodeProperties,
} from "n8n-workflow";

export class PalavirComplianceApi implements ICredentialType {
  name = "palavirComplianceApi";
  displayName = "Palavir Compliance API";
  documentationUrl =
    "https://rapidapi.com/palavir-palavir-default/api/federal-exclusion-sanctions-screener";
  properties: INodeProperties[] = [
    {
      displayName: "RapidAPI Key",
      name: "apiKey",
      type: "string",
      typeOptions: { password: true },
      default: "",
      required: true,
      description:
        "Your X-RapidAPI-Key. Get one (free tier: 100 req/mo) at the link above.",
    },
  ];

  authenticate: IAuthenticateGeneric = {
    type: "generic",
    properties: {
      headers: {
        "X-RapidAPI-Key": "={{$credentials.apiKey}}",
        "X-RapidAPI-Host":
          "federal-exclusion-sanctions-screener.p.rapidapi.com",
      },
    },
  };
}
