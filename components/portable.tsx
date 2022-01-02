import React from "react";
import Highlight from "./highlight";
import PitchPoint from "./pitchPoint";

export default function Portable() {
  return (
    <PitchPoint title="Ultra-portable" slug="portable">
      <Highlight>Carry an unlimited amount, anywhere in the world, with just <a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki">24 words</a>, <a href="https://jlopp.github.io/metal-bitcoin-storage-reviews/">stamped in steel</a>, and a passphrase.</Highlight> Store it in your pocket, on a hardware wallet the size of a <a href="https://coldcard.com">calculator</a>, to sign transactions securely even if your phone or computer gets hacked.
    </PitchPoint>
  )
}