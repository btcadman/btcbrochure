import React, { useState } from "react";

function Tab({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) {
  const textColorClass = active ? "dark:text-apple-white text-apple-black" : "text-apple-gray dark:text-apple-lightgray hover:dark:text-apple-white hover:text-apple-black hover:underline cursor-pointer";
  return <div className={`${textColorClass}`} onClick={onClick}>{label}</div>
}

export default function TabView({ tabs }: { tabs: Array<{ label: string; view: React.ReactNode }> }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="flex flex-row space-x-1 text-3xl font-semibold mb-12 flex-wrap">
        {
          tabs.map(({ label }, i) => {
            const notLast = i < (tabs.length - 1);
            return (
              <React.Fragment key={i}>
                <Tab label={label} active={i === activeTabIndex} onClick={() => setActiveTabIndex(i)} />
                { notLast && <span key={`sep-${i}`} className="text-apple-midgray">/</span>}
              </React.Fragment>
            );
          })
        }
      </div>
      <div>
        { tabs[activeTabIndex].view }
      </div>
    </div>
  )
}