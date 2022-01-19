import React from "react";
import BarChart from "./barChart";
import { Footnote } from "./footnotes";
import Highlight from "./highlight";
import PitchPoint from "./pitchPoint";

export default function TradingTime() {
  return (
    <>
      <PitchPoint title="Trades 24/7" slug="trades-247">
        <Highlight>Buy or sell any time you want.</Highlight> <a href="https://bitcoinmagazine.com/markets/bitcoin-is-a-mature-asset">More trading history than the S&amp;P500</a>. Bitcoin never sleeps, pal.
      </PitchPoint>

      <div className="w-full lg:max-w-6xl max-w-xl lg:p-16">
        <div className="text-3xl font-semibold dark:text-apple-white text-apple-black mt-8">Annual market availability</div>
        <div className="flex lg:flex-row flex-col lg:space-x-16">
          <BarChart
            title="Trading days"
            bars={[
              { label: "Bitcoin", value: 365, scale: 365 },
              {
                label: (
                  <span>
                    NYSE
                    <Footnote slug="nyse-days">
                      <a href="https://www.nyse.com/publicdocs/Trading_Days.pdf">https://www.nyse.com/publicdocs/Trading_Days.pdf</a>
                    </Footnote>
                  </span>
                ),
                value: 252,
                scale: 365,
                dull: true,
              },
            ]}
          />
          <BarChart
            title="Trading hours"
            bars={[
              { label: "Bitcoin", value: 24 * 365, scale: 24 * 365 },
              // { label: "NYSE", value: 252 * 13, scale: 24 * 365, dull: true }, // Including early and late sessions.

              { // Standard hours.
                label: (
                  <span>
                    NYSE
                    <Footnote slug="nyse-hours">
                      <a href="https://www.nyse.com/markets/hours-calendars">https://www.nyse.com/markets/hours-calendars</a>
                    </Footnote>
                  </span>
                ),
                value: 252 * 6.5,
                scale: 24 * 365,
                dull: true,
              },
            ]}
          />
        </div>  
      </div>
    </>
  )
}