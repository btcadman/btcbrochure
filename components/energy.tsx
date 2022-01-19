import React from "react";
import useSWR from "swr";
import Highlight from "./highlight";
import PitchPoint from "./pitchPoint";
import { fetcher } from "../lib";
import BarChart from "./barChart";
import { Footnote } from "./footnotes";

export default function Energy() {
  const totalTwh = 26823;
  const scale = totalTwh / 40;

  const bitcoinTwh = 135;
  const bitcoinPct = bitcoinTwh / totalTwh;
  
  return (
    <PitchPoint title="Energy-efficient" slug="energy">
      <Highlight>Bitcoin uses &lt;1% of global energy production</Highlight> to provide this computational security. Somewhere between the energy used by people watching TV, and electronics doing nothing in standby mode.

      <div className="w-full lg:max-w-6xl max-w-xl lg:p-16">
        <div className="text-3xl font-semibold dark:text-apple-white text-apple-black mt-8">Annual energy usage</div>
        <div className="flex lg:flex-row flex-col lg:space-x-16">
          <BarChart
            title="Terawatt-hours"
            bars={[
              {
                label: (
                  <span>
                    Total production
                    <Footnote slug="total-production-energy">
                      <a href="https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html">BP, <i>Statistical Review of World Energy</i></a>
                    </Footnote>
                  </span>
                ),
                value: totalTwh,
                scale,
                dull: true,
                break: true,
              },
              {
                label: (
                  <span>
                    Television
                    <Footnote slug="tv-energy">
                      <a href="https://www.osti.gov/biblio/1026814">U.S. DoE, OSTI, <i>TV Energy Consumption Trends and Energy-Efficiency Improvement Options</i></a>
                    </Footnote>
                  </span>
                ),
                value: 168,
                scale,
                dull: true,
              },
              {
                label: (
                  <span>
                    Bitcoin
                    <Footnote slug="bitcoin-energy">
                      <a href="https://ccaf.io/cbeci/index">Cambridge, <i>CBECI</i></a>
                    </Footnote>
                  </span>
                ),
                value: bitcoinTwh,
                scale,
              },
              {
                label: (
                  <span>
                    Standby electronics
                    <Footnote slug="standby-energy">
                      <a href="https://eta.lbl.gov/publications/global-implications-standby-power-use">U.S. DoE Lawrence Berkeley National Lab, <i>Global Implications of Standby Power Use</i></a>
                    </Footnote>
                  </span>
                ),
                value: 124,
                scale,
                dull: true,
              },
            ]}
          />
        </div>
      </div>
    </PitchPoint>
  );
}