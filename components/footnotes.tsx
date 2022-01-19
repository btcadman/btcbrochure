import React, { useContext, useEffect, useState } from "react";

const initialFootnotes = new Map<string, React.ReactNode>();

const FootnoteContext = React.createContext({
  footnotes: initialFootnotes,
  setFootnote: (slug: string, footnote: React.ReactNode) => {},
});

export function FootnoteContextProvider({ children }: { children: React.ReactNode}) {
  const initialFootnotes = new Map<string, React.ReactNode>();

  const [footnotes, setFootnotes] = useState(initialFootnotes);

  function setFootnote(slug: string, footnote: React.ReactNode) {
    setFootnotes(footnotes.set(slug, footnote));
  }

  return (
    <FootnoteContext.Provider value={{ footnotes, setFootnote }}>
      {children}
    </FootnoteContext.Provider>
  )
}

function useFootnote(slug: string, footnote: React.ReactNode) {
  const { footnotes, setFootnote } = useContext(FootnoteContext);

  setFootnote(slug, footnote);
  const number = footnotes.size;

  return (
    <sup>
      <a href={`#${href(slug)}`}>{number}</a>
    </sup>
  )
}

function useFootnotes() {
  const { footnotes } = useContext(FootnoteContext);
  return footnotes;
}

function href(slug: string) {
  return `footnote-${slug}`;
}

export function Footnote({ slug, children }: { slug: string, children: React.ReactNode }) {
  return useFootnote(slug, children);
}

export function Footnotes() {
  const footnotes = useFootnotes();

  const els: React.ReactNode[] = [];
  let number = 1;
  footnotes.forEach((footnote, slug) => {
    els.push(
      <div key={slug} id={href(slug)} className="overflow-ellipsis overflow-hidden">
        <span className="mr-2">{number}.</span>
        {footnote}
      </div>
    );

    number += 1;
  });

  return (
    <div className="mt-16 max-w-full">
      { els }
    </div>
  )
}
