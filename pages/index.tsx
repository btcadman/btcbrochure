import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import AlwaysOn from '../components/alwaysOn';
import AssetComparison from '../components/assetComparison';
import Auditable from '../components/auditable';
import Disclaimer from '../components/disclaimer';
import Inflation from '../components/inflation';
import Intro from '../components/intro';
import LowFees from '../components/lowFees';
import Portable from '../components/portable';
import Resilient from '../components/resilient';
import Returns from '../components/returns';
import Security from '../components/security';
import SizedForYou from '../components/sizedForYou';
import Tax from '../components/tax';
import TradingTime from '../components/tradingTime';
import Transfers from '../components/transfers';
import Worldwide from '../components/worldwide';

const Home: NextPage = (props: any) => {
  const { numNodes, hashRate } = props;

  return (
    <div>
      <Head>
        <title>The Bitcoin Brochure™</title>
      </Head>

      <main className="p-4 dark:bg-black dark:text-apple-white text-apple-black flex flex-col items-center">
        <h1 className="text-center my-16 text-7xl font-semibold">Bitcoin</h1>

        <div className="flex flex-col items-center font-semibold mb-12">
          <div className="max-w-xl mb-20 text-6xl">Civilization-<div>strength <span className="text-orange-500">money</span>.</div></div>

          <p className="max-w-xl text-2xl text-center">Bitcoin is <a href="https://twitter.com/saylor/status/1307029562321231873?s=20">a swarm of cyber hornets</a>. Bitcoin is <a href="https://saifedean.com/thebitcoinstandard/">the decentralized alternative to central banking</a>. Bitcoin is <a href="https://satoshi.nakamotoinstitute.org/emails/cryptography/11/">the solution to the Byzantine Generals&apos; Problem</a>. Bitcoin is <a href="https://twitter.com/StopAndDecrypt/status/1002666361489969153">an impenetrable fortress of validation</a>. Bitcoin is <a href="https://twitter.com/BitcoinIsSaving/status/1154202015423184898?s=20">the next world reserve currency</a>.</p>
        </div>

        <Intro />

        <Inflation />

        <Returns />

        <AssetComparison />

        <Tax />

        <AlwaysOn />

        <TradingTime />
        
        <LowFees />
        
        <Transfers />
        
        <Auditable numNodes={numNodes} />

        <Security hashRate={hashRate} />

        <Resilient />

        <Portable />

        <Worldwide />

        <SizedForYou />

        <Disclaimer />

        <a className="mt-16 mb-24 opacity-20 hover:opacity-60" href="https://twitter.com/btcbrochure"><img width={64} height={64} src="/twitter.svg" /></a>
      </main>
    </div>
  )
}

export default Home

async function fetchNumNodes(): Promise<number> {
  const res = await fetch(`https://bitnodes.io/api/v1/snapshots/`)
  const data = await res.json()
  return data?.results?.[0]?.total_nodes;
}

async function fetchHashRate(): Promise<number> {
  const res = await fetch(`https://insights.braiins.com/api/v1.0/hash-rate-stats`)
  const data = await res.json()
  return data?.hash_rate_30;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const numNodes = await fetchNumNodes();
  const hashRate = await fetchHashRate();

  return {
    props: { numNodes, hashRate },
  }
}