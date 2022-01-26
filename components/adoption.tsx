import React from "react";
import Highlight from "./highlight";
import PitchPoint from "./pitchPoint";

function Quote({ quote, name, href }: { quote: string, name: string, href: string }) {
  return (
    <div>
      “{quote}” —<a href={href}>{name}</a>
    </div>
  )
}

export default function Adoption() {
  return (
    <PitchPoint title="Widely-adopted" slug="adoption">
      <Highlight>An estimated <a href="https://nydig.com/research/nydig-bitcoin-banking-survey">46 million</a> Americans own Bitcoin.</Highlight> So do public companies like <a href="https://www.cnbc.com/2021/02/08/tesla-buys-1point5-billion-in-bitcoin.html">TSLA</a>, <a href="https://squareup.com/us/en/press/2020-bitcoin-investment">SQ</a>, <a href="https://time.com/5947722/microstrategy-ceo-bitcoin/">MSTR</a> and <a href="https://bitcointreasuries.net">more</a>. And so does <a href="https://www.forbes.com/sites/zacharysmith/2022/01/21/el-salvador-buys-15-million-worth-of-bitcoin-really-cheap-president-crows-as-selloff-continues/?sh=defb18e60ed6">El Salvador</a>, where <a href="https://www.cnbc.com/2021/06/09/el-salvador-proposes-law-to-make-bitcoin-legal-tender.html">Bitcoin is legal tender</a> and <a href="https://twitter.com/nayibbukele/status/1483864949512409091?s=20">over 60% of the population</a> has it.
      
      <div className="mt-8 space-y-6">
        <Quote quote="I like bitcoin as a portfolio diversifier" name="Paul Tudor Jones" href="https://www.cnbc.com/2021/06/14/tudor-jones-likes-bitcoin-calls-it-a-great-portfolio-diversifier-to-protect-his-wealth-over-time.html" />
        <Quote quote="I’d rather have bitcoin than a bond" name="Ray Dalio" href="https://finance.yahoo.com/news/ray-dalio-bitcoin-132000059.html" />
      </div>
    </PitchPoint>
  );
}