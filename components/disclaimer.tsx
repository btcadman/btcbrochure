import React from "react";
import Highlight from "./highlight";

export default function Disclaimer() {
  return (
    <div className="mt-24 max-w-4xl text-apple-lightgray dark:text-apple-gray">
       <Highlight>This material has been prepared for informational purposes only.</Highlight> The Bitcoin Brochure is not investment, tax, legal, or accounting advice. Do not rely upon The Bitcoin Brochure for those types of advice. <Highlight>Do your own research</Highlight> to supplement the information provided here. Consult your own investment, tax, legal, and accounting advisors for individualized advice about your situation. This information is not warranted to be up-to-date or free from error. <Highlight>Don&apos;t trust, verify.</Highlight> The Bitcoin Brochure is not a solicitation to buy or sell any asset. The authors of The Bitcoin Brochure may hold Bitcoin. Holding Bitcoin carries the risk of total loss of funds if you lose control of your keys.
    </div>
  );
}