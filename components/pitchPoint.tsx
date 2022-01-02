export default function PitchPoint({ title, children, slug }: { title?: string; children: React.ReactNode, slug: string }) {
  return (
    <div className="mt-32 max-w-xl">
      <a id={slug} href={`#${slug}`} className="hover:no-underline dark:text-apple-white text-apple-black"><h2 className="font-semibold text-6xl group">{title}</h2></a>
      <div className="mt-4 font-semibold text-2xl text-apple-gray dark:text-apple-lightgray">
        {children}
      </div>
    </div>
  )
}