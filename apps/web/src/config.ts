import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  slug: "atlasyield",
  name: "AtlasYield",
  tag: "AI x RWA",
  tagline: "Treasury mandate OS for Mantle",
  valueProp:
    "AtlasYield helps operators allocate treasury capital across Mantle yield and RWA routes with policy-aware AI proposals, explainable liquidity ladders, and on-chain decision records.",
  launchLabel: "Open Treasury Desk",
  docsLabel: "Read Allocation Stack",
  aiAwakeningFit:
    "AtlasYield fits AI Awakening by making Mantle’s institutional yield layer programmable: AI proposes treasury allocations, operators approve the route, and the resulting mandate logic is benchmarked on-chain.",
  dashboardTitle: "Treasury allocation desk",
  dashboardSubtitle:
    "Review live proposals, compare target assets, and commit allocation or rebalance theses to Mantle in a way judges can audit quickly.",
  guideIntro:
    "Treat AtlasYield like a mandate engine: review the current proposal board, inspect the leading route, then publish the treasury rationale or policy override you want on-chain.",
  docsIntro:
    "AtlasYield packages Mantle-native RWA and yield routes into a policy-first treasury workflow with clean explainability for operators and judges.",
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
  theme: {
    bg: "#0d1316",
    surface: "rgba(18, 24, 28, 0.82)",
    surfaceStrong: "rgba(22, 28, 32, 0.98)",
    line: "rgba(157, 241, 216, 0.11)",
    text: "#f3f3ef",
    muted: "#b4b9b4",
    accent: "#8ff0ca",
    accentSoft: "rgba(143, 240, 202, 0.12)",
    accentStrong: "#4add9a",
    glowA: "rgba(74, 221, 154, 0.13)",
    glowB: "rgba(239, 246, 210, 0.1)",
    gradient: "linear-gradient(135deg, #f0ebd1 0%, #8ff0ca 100%)"
  },
  heroStats: [
    { label: "Approved Mantle assets", value: "6" },
    { label: "Active treasury mandates", value: "14" },
    { label: "Latest modeled yield", value: "8.7%" }
  ],
  metrics: [
    {
      label: "Liquidity horizon",
      value: "90d",
      detail: "Reference mandate window for the current portfolio mix"
    },
    {
      label: "Stable concentration cap",
      value: "35%",
      detail: "Policy limit before AtlasYield recommends a rebalance"
    },
    {
      label: "Primary route",
      value: "USDY + cmETH",
      detail: "Current high-conviction low-volatility blend"
    }
  ],
  guideSteps: [
    {
      title: "Review the lead proposal",
      body: "Start from the allocation desk and select the treasury proposal you want to inspect in detail."
    },
    {
      title: "Compare policy and route",
      body: "Validate the source asset, destination asset, and route logic against your intended liquidity and concentration constraints."
    },
    {
      title: "Publish the mandate thesis",
      body: "Record the rationale on Mantle so the treasury move is transparent, reviewable, and benchmarked in public."
    }
  ],
  docs: [
    {
      id: "problem",
      title: "Problem",
      body:
        "Mantle has credible yield-bearing assets, but treasury allocation is usually stitched together in spreadsheets and operator chat. AtlasYield compresses that into a governable product surface.",
      bullets: [
        "Manual treasury workflows are slow.",
        "Policy checks are usually informal.",
        "Judges need visible proof of explainability and execution logic."
      ]
    },
    {
      id: "architecture",
      title: "Architecture",
      body:
        "The product combines proposal surfaces, Mantle registry contracts, and backend health monitoring so treasury operators can keep the critical on-chain path available even if secondary services degrade.",
      bullets: [
        "SignalRegistry captures the proposal record.",
        "ThesisRegistry stores the operator’s treasury rationale.",
        "Frontend health state prevents backend failures from crashing the site."
      ]
    },
    {
      id: "awakening",
      title: "AI Awakening Fit",
      body:
        "AtlasYield belongs in AI x RWA because it turns Mantle’s real yield and RWA stack into a controlled decision engine with AI guidance and verifiable results.",
      bullets: [
        "AI drafts allocation recommendations.",
        "Operators remain in the approval loop.",
        "Every important step can be shown on Mantle."
      ]
    }
  ],
  starterCards: [
    {
      id: "capital-preservation",
      title: "Load the capital preservation mandate",
      summary:
        "Pre-fill a treasury thesis that emphasizes USDY, cmETH, and strict concentration controls for a 90-day liquidity window.",
      cta: "Use preservation thesis",
      signalId: "20000000-0000-0000-0000-000000000001",
      thesis:
        "This mandate prioritizes capital preservation while still capturing credible Mantle-native yield. The portfolio shifts away from directional risk and into a cmETH and USDY blend that preserves liquidity and keeps stable concentration within the policy cap."
    },
    {
      id: "usdy-rebalance",
      title: "Load the stable concentration rebalance",
      summary:
        "Open a rebalancing note that trims single-route stable exposure and rotates to USDY for a cleaner treasury posture.",
      cta: "Use rebalance thesis",
      signalId: "20000000-0000-0000-0000-000000000002",
      thesis:
        "The current stable routing is too concentrated in one path. Reweighting into USDY improves policy compliance without introducing unnecessary directional volatility and keeps the treasury’s liquidity ladder intact."
    }
  ],
  fallbackSignals: [
    {
      id: "20000000-0000-0000-0000-000000000001",
      headline: "Policy-safe treasury proposal increases cmETH and USDY balance",
      summary:
        "AtlasYield generated a lower-volatility allocation that shifts capital into cmETH and USDY while maintaining liquidity bounds.",
      confidence: 87,
      severity: "high",
      sourceProtocol: "Merchant Moe",
      destinationProtocol: "Ondo route",
      sourceAsset: "mETH",
      destinationAsset: "cmETH",
      createdAt: "2026-05-18T09:05:00.000Z"
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
      destinationAsset: "USDY",
      createdAt: "2026-05-18T08:34:00.000Z"
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
