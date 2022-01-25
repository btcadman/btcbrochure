import React from "react";
import Highlight from "./highlight";
import PitchPoint from "./pitchPoint";

export default function Transfers() {
  return (
    <PitchPoint title="Fast transfers" slug="fast-transfers">
      <Highlight>Move any amount of money in 10 minutes or less.</Highlight> Compare that to <a href="https://www.marcus.com/us/en/faqs">wire transfer timing, fees, and conditions</a>. No phone calls to confirm. No FBO codes. All you need to send money is Bitcoin wallet software, an <a href="https://river.com/learn/terms/b/bech32-modified/">alphanumeric destination address</a>, and some Bitcoin, of course.
    </PitchPoint>
  )
}