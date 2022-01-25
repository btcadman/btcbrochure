import React from "react";
import Highlight from "./highlight";
import PitchPoint from "./pitchPoint";

export default function Resilient() {
  return (
    <PitchPoint title="Ultra-resilient" slug="resilient">
      <Highlight>Bitcoin is designed for adversarial conditions.</Highlight> In 2021, over 50% of Bitcoin mining happened in China. When <a href="https://www.reuters.com/world/china/china-central-bank-vows-crackdown-cryptocurrency-trading-2021-09-24/">China banned it</a>, miners dispersed worldwide. Bitcoin continued operating without disruption, and <a href="https://www.cnbc.com/2021/12/10/bitcoin-network-hashrate-hits-all-time-high-after-china-crypto-ban.html">recovered its previous mining rate in under 6 months</a>.
    </PitchPoint>
  )
}