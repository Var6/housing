import React from "react";

export interface HoverEffectItem {
  title: string;
  description: string;
  link: string;
}

export function HoverEffect({ items }: { items: HoverEffectItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <a
          key={item.link}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl hover:border-blue-400"
        >
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
            {item.title}
          </h3>
          <p className="mt-2 text-slate-600 text-sm">{item.description}</p>
          <span className="mt-4 inline-block text-blue-600 text-xs font-semibold group-hover:underline">
            Visit →
          </span>
        </a>
      ))}
    </div>
  );
}
