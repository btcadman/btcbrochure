import React from "react";

export default function Intro() {
  return (
    <div className="my-32 max-w-2xl font-semibold text-4xl">
      <span className="dark:text-apple-white text-apple-black">This is money&apos;s final form.</span> <span className="text-apple-gray dark:text-apple-lightgray">All of economic history has led us to Bitcoin. The perfect monetary policy. Impervious to debasement. Accessible to anyone. Controlled by no one. Infinite shelf-life. Lighter than air. Moves at the speed of light.</span>

      <a href="https://www.miamigov.com/files/sharedassets/public/bitcoin.pdf" className="text-2xl block mt-8 dark:text-apple-white text-apple-black hover:text-orange-400 hover:no-underline">View the Bitcoin White Paper (PDF)</a>  
    </div>
  )
}