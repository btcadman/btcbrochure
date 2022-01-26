import React from "react";
import useSWR from "swr";
import Highlight from "./highlight";
import PitchPoint from "./pitchPoint";
import { fetcher } from "../lib";

export default function Security(props: { hashRate: number }) {
  const exa = 1E18;

  const { data } = useSWR("/api/hashRate", fetcher);

  const hashRate = data?.hashRate ?? props.hashRate;

  const longHashRate = hashRate * exa;
  
  return (
    <PitchPoint title="Unparalleled security" slug="security">
      <Highlight>Hard work makes hard money.</Highlight> Bitcoin miners perform over <a href="https://insights.braiins.com/en/">{Math.floor(hashRate)} exahashes</a> per second—that&rsquo;s <i>{new Intl.NumberFormat().format(longHashRate)}</i>—in their mathematical competition to mine transaction blocks. Whichever one cracks the code first, gets to add a block of transactions to the global Bitcoin ledger—that&rsquo;s <i>the blockchain</i>. To the winner go the transaction fees.
      
      <p className="mt-4">Altering that ledger in <a href="https://www.crypto51.app/about.html">a 51% attack</a> <a href="https://braiins.com/blog/how-much-would-it-cost-to-51-attack-bitcoin">would cost billions of dollars</a> and vast quantities of scarce chips. Even then, the worst an attacker could do is undo recent transactions—like bouncing a check. <a href="https://river.com/learn/terms/e/ecdsa/">Elliptic-curve cryptography</a> prevents anyone from ever spending your Bitcoin without your signature.</p>
    </PitchPoint>
  );
}