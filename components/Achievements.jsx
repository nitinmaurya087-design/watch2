'use client';

import achievements from '../data/achievements';

export default function Achievements() {
  return (
    <div className="mx-auto max-w-[1140px] px-6 pb-24 lg:px-8">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Achievements & Activities</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Events, learning experiences and collaborative activities.</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item) => (
          <div key={item.title} className="rounded-[28px] border border-white/10 bg-surface/90 p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{item.subtitle}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.organization}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-white/10 bg-[#0d0f18]/95 p-6 shadow-glow">
          <p className="text-xs uppercase tracking-[0.35em] text-accent">Inter-College Football Tournament</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Winner</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">PW Institute of Innovation</p>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-[#0d0f18]/95 p-6 shadow-glow">
          <p className="text-xs uppercase tracking-[0.35em] text-accent">Karate</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Yellow Belt Holder</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">Bino Ryu Karate International</p>
        </div>
      </div>
    </div>
  );
}
