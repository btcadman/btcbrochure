export default function Highlight({ children }: { children: React.ReactNode}) {
  return <span className="dark:text-apple-white text-apple-black">{children}</span>;
}