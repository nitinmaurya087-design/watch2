'use client';

const timeline = [
  {
    year: '2025 – Present',
    title: 'B.Tech Computer Science',
    institution: 'PW Institute of Innovation',
    university: 'Medhavi Skills University',
    details: 'SGPA: 6.3'
  },
  {
    year: '2024',
    title: 'Senior Secondary',
    institution: 'UP Board',
    university: '',
    details: '61%'
  },
  {
    year: '2022',
    title: 'Secondary',
    institution: 'UP Board',
    university: '',
    details: '70.5%'
  }
];

const coursework = [
  'Data Structures & Algorithms',
  'Object Oriented Programming',
  'Web Development',
  'Frontend Development'
];

export default function Education() {
  return (
    <div className="mx-auto max-w-[1140px] px-6 pb-24 lg:px-8">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Education</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Academic timeline with relevant coursework.</h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.78fr_0.55fr]">
        <div className="space-y-8 rounded-[32px] border border-white/10 bg-surface/90 p-6 shadow-soft">
          {timeline.map((item, index) => (
            <div key={item.year} className="relative pl-8">
              <span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-accent" />
              <div className="rounded-3xl border border-white/10 bg-[#0d0f18]/95 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{item.year}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.institution}{item.university ? ` • ${item.university}` : ''}</p>
                <p className="mt-2 text-sm text-slate-300">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[32px] border border-white/10 bg-[#0d0f18]/95 p-6 shadow-glow">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Relevant Coursework</p>
          <div className="mt-8 space-y-4">
            {coursework.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
