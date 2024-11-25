import React from 'react';
import { DiagramBox } from './components/DiagramBox';

const diagramData = [
  {
    title: "WWW Energy Data",
    items: ["200+ Scrapes"]
  },
  {
    title: "Ansergy Forecast Models",
    items: ["Hourly out 20 Years", "Updated Daily"]
  },
  {
    title: "Wholesale Energy",
    items: [
      "Price Forecasts",
      "Historical Data",
      "Forward Data",
      "API-Driven",
      "Cash and Term Markets"
    ]
  },
  {
    title: "Equity Markets",
    items: [
      "EPS Forecasts",
      "Operational Cash Flows",
      "6000 Energy Company Valuations",
      "Public and Private Company"
    ]
  }
] as const;

export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-8">
      <div className="max-w-2xl mx-auto py-12">
        <div className="flex flex-col items-center justify-center gap-2">
          {diagramData.map((data, index) => (
            <DiagramBox
              key={index}
              title={data.title}
              items={data.items}
              isLast={index === diagramData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}