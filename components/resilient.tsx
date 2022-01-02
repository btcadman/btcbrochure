import React from "react";
import Highlight from "./highlight";
import PitchPoint from "./pitchPoint";

export default function Resilient() {
  return (
    <PitchPoint title="Ultra-resilient" slug="resilient">
      <Highlight>Over 50% of Bitcoin mining happened in China.</Highlight> When China banned it, miners dispersed worldwide. <a href="https://www.cnbc.com/2021/12/10/bitcoin-network-hashrate-hits-all-time-high-after-china-crypto-ban.html">Bitcoin recovered its previous hashrate in under 6 months</a>.
    </PitchPoint>
  )
}