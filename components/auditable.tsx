import React from "react";
import useSWR from "swr";
import { fetcher } from "../lib";
import Highlight from "./highlight";
import PitchPoint from "./pitchPoint";

export default function Auditable(props: { numNodes: number }) {
  const { data } = useSWR("/api/nodeCount", fetcher);

  const numNodes = data?.numNodes ?? props.numNodes;

  return (
    <PitchPoint title="Fully-auditable" slug="fully-auditable">
      <Highlight>Every single transaction is independently-validated by a global network of <a href="https://bitnodes.io">{new Intl.NumberFormat().format(numNodes)} nodes</a>, preventing counterfeiting, forgery, and debasement.</Highlight> You can audit Bitcoin yourself. Yes, you. Run a node with as little as <a href="https://getumbrel.com/#build">a Raspberry Pi</a> and the open-source <a href="https://github.com/bitcoin/bitcoin">Bitcoin Core</a> software. This network instantly rejects invalid transactions, ensuring <a href="https://www.amazon.com/dp/B08YQMC2WM">no one else can change the rules</a>.
    </PitchPoint>
  )
}