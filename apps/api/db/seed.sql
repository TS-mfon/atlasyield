insert into users (id, email, role)
values
  ('00000000-0000-0000-0000-000000000001', 'ops@atlasyield.ai', 'ops_admin'),
  ('00000000-0000-0000-0000-000000000002', 'analyst@atlasyield.ai', 'analyst')
on conflict (email) do nothing;

insert into wallet_entities (id, address, label, category, conviction)
values
  ('10000000-0000-0000-0000-000000000001', '0x9c9a4a45b0f6b9c4d6e54c8ddf8457085e8f4a11', 'Sticky Yield Cohort 01', 'smart-lp', 92),
  ('10000000-0000-0000-0000-000000000002', '0x5cb912f87af0f4607d3fa10a1d7d00f7d8b96cc2', 'Treasury Pattern Wallet', 'treasury', 76)
on conflict (address) do nothing;

insert into rotation_signals (
  id,
  headline,
  summary,
  confidence,
  severity,
  source_protocol,
  destination_protocol,
  source_asset,
  destination_asset,
  evidence_hash
)
values
  (
    '20000000-0000-0000-0000-000000000001',
    'Policy-safe treasury proposal increases cmETH and USDY balance',
    'AtlasYield generated a lower-volatility allocation that shifts capital into cmETH and USDY while maintaining liquidity bounds.',
    87,
    'high',
    'Merchant Moe',
    'Merchant Moe',
    'mETH',
    'cmETH',
    '0xaaa111'
  ),
  (
    '20000000-0000-0000-0000-000000000002',
    'Rebalance proposal trims USDe concentration in favor of USDY',
    'A concentration check triggered a treasury rebalance proposal to reduce stable dependency on a single route.',
    81,
    'medium',
    'Agni Finance',
    'Ondo route',
    'USDe',
    'USDY',
    '0xbbb222'
  )
on conflict (id) do nothing;

insert into signal_evidence (id, signal_id, evidence_type, title, body)
values
  (
    '30000000-0000-0000-0000-000000000001',
    '20000000-0000-0000-0000-000000000001',
    'wallet-cluster',
    '5-wallet LP cohort overlap',
    'Five correlated LP addresses exited mETH/MNT within 14 minutes and rebuilt into cmETH/USDe with similar range width.'
  ),
  (
    '30000000-0000-0000-0000-000000000002',
    '20000000-0000-0000-0000-000000000001',
    'yield-shift',
    'Defensive yield repositioning',
    'The cohort reduced directional MNT beta while preserving yield exposure through cmETH and stable routing.'
  ),
  (
    '30000000-0000-0000-0000-000000000003',
    '20000000-0000-0000-0000-000000000002',
    'treasury-pattern',
    'Low-turnover wallet behavior',
    'Observed addresses historically rotate capital only during mandate or yield-thesis changes and maintain longer holding periods.'
  )
on conflict (id) do nothing;

insert into audit_logs (id, actor_email, action, target_type, target_id, reason)
values
  (
    '40000000-0000-0000-0000-000000000001',
    'ops@atlasyield.ai',
    'seeded_dataset',
    'system',
    'atlasyield',
    'Initial reference implementation bootstrap'
  )
on conflict (id) do nothing;
