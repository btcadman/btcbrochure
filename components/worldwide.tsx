import React from "react";
import Highlight from "./highlight";
import PitchPoint from "./pitchPoint";

export default function Worldwide() {
  return (
    <PitchPoint title="Available worldwide" slug="worldwide">
      <Highlight>Receive Bitcoin transaction data via internet, <a href="https://blockstream.com/satellite/">satellite</a>, even <a href="https://twitter.com/nvk/status/1095354354289135617?s=20">HAM radio</a>.</Highlight> Anyone can join the Bitcoin network by simply installing <a href="https://github.com/bitcoin/bitcoin">an app</a>.
    </PitchPoint>
  )
}