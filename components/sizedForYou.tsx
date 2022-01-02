import React from "react";
import useSWR from "swr";
import Highlight from "./highlight";
import PitchPoint from "./pitchPoint";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function SizedForYou() {
  const { data, error } = useSWR("/api/price", fetcher, { refreshInterval: 10 * 1000 });
  
  if (error) { return null }
  if (!data) { return null }

  const btcPrice = data.price;

  const satsPerDollar = Math.round(1E8 / btcPrice);

  function Conversion({ btc, usd }: { btc: string, usd: string }) {
    return (
      <div className="flex flex-row space-x-6">
        <div className="flex-1 text-right text-orange-400">{btc}</div>
        <div className="flex-1 text-left text-green-500">{usd}</div>
      </div>
    )
  }

  const conversions = [
    { sats: `${new Intl.NumberFormat().format(satsPerDollar)}sats`, dollars: "$1" },
    { sats: `${new Intl.NumberFormat().format(satsPerDollar * 10)}sats`, dollars: "$10" },
    { sats: `${new Intl.NumberFormat().format(satsPerDollar * 100)}sats`, dollars: "$100" },
    { sats: `1,000,000sats`, dollars: `$${new Intl.NumberFormat().format(Math.round(btcPrice / 100.0))}` },
    { sats: `${new Intl.NumberFormat().format(satsPerDollar * 1000)}sats`, dollars: "$1,000" },
    { sats: `1btc`, dollars: `$${new Intl.NumberFormat().format(Math.round(btcPrice))}` },
    { sats: `${new Intl.NumberFormat().format(Math.round(10 * 100000 / btcPrice) / 10)}btc`, dollars: "$100,000" },
    { sats: `${new Intl.NumberFormat().format(Math.round(10 * 1000000 / btcPrice) / 10)}btc`, dollars: "$1,000,000" },
    
  ]

  return (
    <PitchPoint title="Sized for you" slug="sizes">
      <Highlight>No need to buy a whole bitcoin at a time.</Highlight> Each bitcoin divides into 100 million parts, called satoshis—or <i>sats</i>, for short. Buy as many sats as you need, to store your wealth. <a href="https://strike.me/">Get {new Intl.NumberFormat().format(satsPerDollar)} sats for just $1</a>. Or <a href="http://river.com/bitcoin-price">buy a whole bitcoin for ${new Intl.NumberFormat().format(Math.round(btcPrice))}</a>. With a trillion-dollar market cap, Bitcoin has the liquidity to store even the largest fortunes.
      
      <div className="text-2xl dark:text-apple-white text-apple-black mt-8">Sample conversions <span className="text-apple-gray dark:text-apple-lightgray">(LIVE)</span></div>

      <div className="mt-8">
        {
          conversions.map((conv, i) => <Conversion key={i} btc={conv.sats} usd={conv.dollars} />)
        }
      </div>
    </PitchPoint>
  )
}