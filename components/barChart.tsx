interface IBar {
  label: string | React.ReactElement;
  value: number;
  scale: number; // Value to scale against.
  dull?: boolean; // Visually marks this as the worst option.
}

function Bar({ bar }: { bar: IBar }) {
  const { label, value, scale, dull } = bar;
  const width = `${100.0 * value / scale}%`;

  const background = dull ? "#a1a1a6" : "linear-gradient(90deg, rgb(237, 24, 106) 0%, rgb(255, 103, 0) 100%, rgb(255, 203, 57) 200%, rgb(29, 29, 31) 300%)";
  const labelClass = dull ? "text-apple-gray dark:text-apple-lightgray" : "dark:text-apple-white text-apple-black";
  const valueClass = dull ? "text-apple-gray dark:text-apple-lightgray" : "text-orange-500";

  return (
    <div className="mt-5 flex flex-row justify-items-start">
      <div style={{ width }}>
        <div style={{ background }} className="h-1.5 rounded-md mb-1.5 mt-3" />
        <div className={`font-normal text-xl ${labelClass}`}>{label}</div>
      </div>
      <div className={`ml-3 text-3xl ${valueClass}`}>{new Intl.NumberFormat().format(value)}</div>
    </div>
  )
}

export default function BarChart({ bars, title }: { bars: IBar[], title: string }) {
  return (
    <div className="my-12 flex-1">
      <h3 className="text-2xl font-semibold mb-8 dark:text-apple-white text-apple-black">{title}</h3>
      { bars.map((bar, i) => <Bar key={i} bar={bar} />) }
    </div>
  )
}