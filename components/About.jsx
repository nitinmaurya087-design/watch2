'use client';

const qualities = [
  'Clean UI',
  'Responsive design',
  'User experience',
  'Motion',
  'Performance',
  'Reusable components'
];

export default function About() {
  return (
    <div className="mx-auto flex max-w-[1140px] flex-col gap-12 px-6 pb-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:items-start">
        <div>
          <div className="text-sm uppercase tracking-[0.35em] text-accent">A little about me.</div>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">I build modern interfaces with thoughtful motion.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            I&apos;m Nitin Maurya, a Computer Science student and Frontend Developer focused on creating modern web experiences. I enjoy turning ideas into clean, interactive interfaces and experimenting with animation, visual design and frontend technologies.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {qualities.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-surface/90 p-6 shadow-soft">
          <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(124,134,255,0.15),_transparent_45%)]" />
          <div className="relative rounded-[28px] border border-white/10 bg-[#090b15]/95 p-6 text-slate-200 shadow-glow">
            <div className="space-y-4 text-sm">
              <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Profile Card</div>
              <div>
                <p className="text-xl font-semibold text-white">NITIN MAURYA</p>
                <p className="mt-2 text-sm text-slate-300">Frontend Developer</p>
                <p className="text-sm text-slate-300">UI/UX Designer</p>
              </div>
              <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                Based in India
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
