import React from "react";
import Highlight from "./highlight";
import PitchPoint from "./pitchPoint";

export default function Tax() {
  return (
    <PitchPoint title="Tax clarity" slug="tax">
      <Highlight>&ldquo;For federal tax purposes, virtual currency is treated as property.&rdquo;</Highlight>
      &ldquo;Bitcoin is one example of a convertible virtual currency.&rdquo;
      —<a href="https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21">IRS</a>
    </PitchPoint>
  )
}