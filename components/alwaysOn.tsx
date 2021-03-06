import React from "react";
import BarChart from "./barChart";
import { Footnote } from "./footnotes";
import Highlight from "./highlight";
import PitchPoint from "./pitchPoint";

export default function AlwaysOn() {
  const millisPerYear = 1000 * 60 * 60 * 24 * 365;
  const bitcoinBirthday = new Date("2009-01-03");
  const now = new Date();
  const lifetimeMillis = now.getTime() - bitcoinBirthday.getTime();
  const lifetimeYrs = lifetimeMillis / millisPerYear;

  return (
    <>
      <PitchPoint title="Always on" slug="always-on">
        <Highlight>Banking holidays.</Highlight> You know. Those days when your <a className="text-green-500" href="https://www.federalreserve.gov/paymentsystems/fedfunds_about.htm">money</a> doesn&rsquo;t work. The Federal Reserve takes <a href="https://www.federalreserve.gov/aboutthefed/k8.htm">11 days</a> off per year. That&rsquo;s 3% downtime. Add in weekends and it&rsquo;s over 30%. Bitcoin works nights, weekends, and <a href="https://bitcoin.holiday">holidays</a>, with <a href="https://www.reddit.com/r/Bitcoin/comments/gm5m1z/bitcoin_has_a_higher_uptime_than_every_major_tech/">less than 0.03% downtime</a> over its {Math.floor(lifetimeYrs)} year life—a 1000x improvement.
      </PitchPoint>

      <div className="w-full lg:max-w-6xl max-w-xl lg:p-16">
        <div className="text-3xl font-semibold dark:text-apple-white text-apple-black mt-8">Annual service availability</div>
        <div className="flex lg:flex-row flex-col lg:space-x-16">
          <BarChart
            title="Days of operation"
            bars={[
              { label: "Bitcoin", value: 365, scale: 365 },
              {
                label: (
                  <span>
                    Fedwire
                    <Footnote slug="fedwire-days">
                      <a href="https://www.federalreserve.gov/paymentsystems/fedfunds_about.htm">U.S. Federal Reserve, <i>Fedwire Funds Services</i></a>
                    </Footnote>
                  </span>
                ),
                value: 365 - (11 + 2 * 52),
                scale: 365,
                dull: true,
              },
            ]}
          />
          <BarChart
            title="Hours of operation"
            bars={[
              { label: "Bitcoin", value: 24 * 365, scale: 24 * 365 },
              {
                label: (
                  <span>
                    Fedwire
                    <Footnote slug="fedwire-hours">
                      <a href="https://www.federalreserve.gov/paymentsystems/fedfunds_about.htm">U.S. Federal Reserve, <i>Fedwire Funds Services</i></a>
                    </Footnote>
                  </span>
                ),
                value: (22 * 5 * 52) - (24 * 11),
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