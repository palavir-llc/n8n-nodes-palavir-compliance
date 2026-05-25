"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalavirComplianceApi = void 0;
class PalavirComplianceApi {
    name = "palavirComplianceApi";
    displayName = "Palavir Compliance API";
    documentationUrl = "https://rapidapi.com/palavir-palavir-default/api/federal-exclusion-sanctions-screener";
    properties = [
        {
            displayName: "RapidAPI Key",
            name: "apiKey",
            type: "string",
            typeOptions: { password: true },
            default: "",
            required: true,
            description: "Your X-RapidAPI-Key. Get one (free tier: 100 req/mo) at the link above.",
        },
    ];
    authenticate = {
        type: "generic",
        properties: {
            headers: {
                "X-RapidAPI-Key": "={{$credentials.apiKey}}",
                "X-RapidAPI-Host": "federal-exclusion-sanctions-screener.p.rapidapi.com",
            },
        },
    };
}
exports.PalavirComplianceApi = PalavirComplianceApi;
