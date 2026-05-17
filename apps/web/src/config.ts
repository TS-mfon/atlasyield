import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  slug: "atlasyield",
  name: "AtlasYield",
  chainId: 5000,
  chainHex: "0x1388",
  chainName: "Mantle Mainnet",
  rpcUrl: "https://rpc.mantle.xyz",
  explorerBaseUrl: "https://mantlescan.xyz",
  contracts: {
    signalRegistry: "0x6f20e728a36c710ba7ECe9b3378Cb14A69eE0b1B",
    thesisRegistry: "0x191B0d8E70b7866e834821D8DB2bC37780767538",
    adminController: "0x2Da12543C8389C4C70Ae5560c57830bE0C84B2C9"
  },
  fallbackSignals: [
    {
      id: "20000000-0000-0000-0000-000000000001",
      headline: "Policy-safe treasury proposal increases cmETH and USDY balance",
      summary:
        "AtlasYield generated a lower-volatility allocation that shifts capital into cmETH and USDY while maintaining liquidity bounds.",
      confidence: 87,
      severity: "high",
      sourceProtocol: "Merchant Moe",
      destinationProtocol: "Merchant Moe",
      sourceAsset: "mETH",
      destinationAsset: "cmETH"
    },
    {
      id: "20000000-0000-0000-0000-000000000002",
      headline: "Rebalance proposal trims USDe concentration in favor of USDY",
      summary:
        "A concentration check triggered a treasury rebalance proposal to reduce stable dependency on a single route.",
      confidence: 81,
      severity: "medium",
      sourceProtocol: "Agni Finance",
      destinationProtocol: "Ondo route",
      sourceAsset: "USDe",
      destinationAsset: "USDY"
    }
  ],
  defaultAlerts: [
    {
      id: "ay-alert-1",
      channel: "telegram",
      condition: "Escalate when any mandate proposal exceeds 85 confidence.",
      isEnabled: true
    },
    {
      id: "ay-alert-2",
      channel: "email",
      condition: "Notify when a rebalance trims USDe concentration into USDY.",
      isEnabled: true
    }
  ]
};
