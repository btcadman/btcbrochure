import React, { useContext, useEffect, useState } from "react";

const initialFootnotes = new Map<string, { number: number, footnote: React.ReactNode }>();

const FootnoteContext = React.createContext({
  footnotes: initialFootnotes,
  setFootnote: (slug: string, footnote: React.ReactNode) => {},
});

export function FootnoteContextProvider({ children }: { children: React.ReactNode}) {
  const initialFootnotes = new Map<string, { number: number, footnote: React.ReactNode }>();

  const [footnotes, setFootnotes] = useState(initialFootnotes);

  function setFootnote(slug: string, footnote: React.ReactNode) {
    // Increment footnote number unless already set.
    const number = footnotes.get(slug)?.number ?? (footnotes.size + 1);

    setFootnotes(footnotes.set(slug, { footnote, number }));
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

  const number = footnotes.get(slug)?.number;

  return (
    <sup id={originHref(slug)}>
      <a href={`#${footnoteHref(slug)}`} className="text-apple-gray dark:text-apple-lightgray hover:text-orange-500">{number}</a>
    </sup>
  )
}

function useFootnotes() {
  const { footnotes } = useContext(FootnoteContext);
  return footnotes;
}

function originHref(slug: string) {
  return `footnote-origin-${slug}`;
}

function footnoteHref(slug: string) {
  return `footnote-${slug}`;
}

export function Footnote({ slug, children }: { slug: string, children: React.ReactNode }) {
  return useFootnote(slug, children);
}

export function Footnotes() {
  const footnotes = useFootnotes();

  const els: React.ReactNode[] = [];
  footnotes.forEach(({ footnote }, slug) => {
    els.push(
      <li key={slug} id={footnoteHref(slug)} className="overflow-ellipsis overflow-hidden">
        {footnote}
        <span className="ml-2">[<a href={`#${originHref(slug)}`} >⇡</a>]</span>
      </li>
    );
  });

  return (
    <ol className="mt-16 max-w-full list-decimal list-inside space-y-1 text-sm text-apple-gray dark:text-apple-lightgray">
      { els }
    </ol>
  )
}
