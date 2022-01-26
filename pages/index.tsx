import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
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
import { FootnoteContextProvider, Footnotes } from '../components/footnotes';
import { fetchHashRate } from './api/hashRate';
import Energy from '../components/energy';
import { fetchNumNodes } from './api/nodeCount';
import Adoption from '../components/adoption';

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
        </div>

        <FootnoteContextProvider>
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

          <Energy />

          <Resilient />

          <Portable />

          <Worldwide />

          <Adoption />

          <SizedForYou />

          <Disclaimer />

          <Footnotes />
        </FootnoteContextProvider>

        <div className="flex flex-row space-x-4">
          <a className="mt-16 mb-24 opacity-20 hover:opacity-60" href="https://twitter.com/btcbrochure"><Image width={64} height={64} alt="Twitter account" src="/twitter.svg" /></a>
          <a className="mt-16 mb-24 opacity-20 hover:opacity-60" href="https://github.com/btcadman/btcbrochure"><Image width={64} height={64} alt="GitHub repo" src="/github.png" /></a>
        </div>
      </main>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const numNodes = await fetchNumNodes();
  const hashRate = await fetchHashRate();

  return {
    props: { numNodes, hashRate },
  }
}