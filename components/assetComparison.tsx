import React from "react";
import Highlight from "./highlight";
import TabView from "./tabView";

export default function AssetComparison() {
  function FeatureList({ children }: { children: React.ReactNode }) {
    return <div className="font-semibold text-2xl text-apple-gray dark:text-apple-lightgray">{children}</div>
  }
  const tabs = [
    {
      label: "Cash",
      view: <FeatureList><Highlight>A <a href="https://www.federalreserve.gov/aboutthefed/structure-federal-open-market-committee.htm">small group of people</a> in the central bank <a href="https://www.lynalden.com/money-printing/">sets the supply of cash</a> to balance political needs.</Highlight> These needs often dictate <a href="https://usdebtgobrrr.com">a supply increase</a>, diluting any cash balances kept as a store of value. The Bitcoin protocol set the supply of Bitcoin at a fixed value, to maximize its utility as a store of value.</FeatureList>,
    },
    {
      label: "Bonds",
      view: <FeatureList><Highlight>Real <a href="https://www.blackrock.com/us/individual/insights/negative-real-rates">interest rates are negative</a>.</Highlight> What else is there to say?</FeatureList>,
    },
    {
      view: <FeatureList><Highlight>Gold was good in its time.</Highlight> Scarce. Durable. Divisible. But, heavy. Hard to store in significant quantities. And slow to transport. Due to these limitations, <a href="https://saifedean.com/the-fiat-standard/">fiat dethroned gold</a>. <Highlight>Bitcoin upgrades gold for the 21st century,</Highlight> with the transportability of pure information, an algorithmically-limited supply <a href="https://www.cmegroup.com/education/featured-reports/an-in-depth-look-at-the-economics-of-bitcoin.html">uninfluenced by price</a>, self-custody of any quantity, and the ability for anyone to assay for purity.</FeatureList>,
      label: "Gold",
    },
    {
      label: "Stocks",
      view: <FeatureList><Highlight>Like the best tech companies, Bitcoin has <a href="https://nakamotoinstitute.org/mempool/the-seven-network-effects-of-bitcoin/">network effects</a> that tend toward <a href="https://www.wsj.com/articles/peter-thiel-competition-is-for-losers-1410535536">monopoly</a> in its market.</Highlight> What market? Store-of-value. TAM: <a href="https://www.lopp.net/pdf/theses/BVI-Macro-Outlook.pdf">over $100 trillion</a>.</FeatureList>,
    },
    {
      label: "Real Estate",
      view: <FeatureList><Highlight>Land has <a href="https://www.seasteading.org">~</a>100% market share as a place to live, work, and store goods.</Highlight> There are only <a href="https://www.cia.gov/the-world-factbook/countries/world">36.8 million acres of land</a> on Earth, to fit <a href="https://www.cia.gov/the-world-factbook/countries/world">7.8 billion people</a>, growing <a href="https://data.worldbank.org/indicator/sp.pop.grow">1-2% per year</a>. As a side-effect of fixed supply and rising demand, real estate can store wealth, not just people.
      
      <p className="mt-4"><Highlight>Bitcoin is specifically engineered to store wealth</Highlight>, with features that beat real estate for that function. Sell it in milliseconds, not months. Immune to natural disasters. No annual property taxes. <Highlight>Real estate is better for living in. Bitcoin is better for saving in.</Highlight></p></FeatureList>,
    },
  ];
  
  const slug = "asset-comparison";

  return (
    <div id="asset-comparison" className="w-full max-w-xl mt-8">
      <div className="text-4xl font-semibold dark:text-apple-white text-apple-black mt-8 mb-6"><a id={slug} href={`#${slug}`} className="hover:no-underline dark:text-apple-white text-apple-black">Asset Comparison</a></div>
      <TabView tabs={tabs} />
    </div>
  )
}