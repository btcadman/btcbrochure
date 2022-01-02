import React from "react";
import Highlight from "./highlight";
import PitchPoint from "./pitchPoint";

export default function Transfers() {
  return (
    <PitchPoint title="Fast transfers" slug="fast-transfers">
      <Highlight>Move any amount of money in 10 minutes or less.</Highlight> Compare that to <a href="https://www.marcus.com/us/en/faqs">wire transfer timing, fees, and conditions</a>. No phone calls to confirm. No FBO codes. All you need to send money is Bitcoin wallet software, an <a href="https://river.com/learn/terms/b/bech32-modified/">alphanumeric destination address</a> with <a href="https://en.wikipedia.org/wiki/BCH_code">BCH code</a> error detection that can catch <a href="https://github.com/bitcoin/bips/blob/d8599f9b6b59702a96c3a86a4a16650cb33c7890/bip-0173.mediawiki#Specification">up to 4 transcription errors</a>, and some Bitcoin of course.
    </PitchPoint>
  )
}