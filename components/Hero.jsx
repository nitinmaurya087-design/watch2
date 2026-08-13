'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import HeroScene from './3d/HeroScene';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="mx-auto flex max-w-[1140px] flex-col gap-12 px-6 pb-24 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300 shadow-soft">
            HELLO, I&apos;M
          </div>
          <div className="mt-8 max-w-2xl">
            <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              NITIN <span className="text-accent">MAURYA</span>
            </h1>
            <p className="mt-4 text-xl font-medium text-slate-300 sm:text-2xl">
              Frontend Developer & UI/UX Designer
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              I design and build modern, responsive and interactive web experiences where clean interfaces meet thoughtful motion.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accentSoft"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
              >
                Let&apos;s Connect
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-12 grid gap-4 text-sm text-slate-400 sm:grid-cols-2">
              {['</>', 'JS', 'UI/UX', 'GSAP', 'NEXT.JS'].map((item) => (
                <span key={item} className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.18em] text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="absolute -left-8 top-8 h-28 w-28 rounded-full border border-accent/30 bg-accent/5 blur-2xl" />
          <div className="absolute right-0 top-20 h-20 w-20 rounded-full border border-white/10 bg-white/5 blur-2xl" />
          <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#0d0f18] p-6 shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,134,255,0.18),_transparent_35%)]" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="order-2 lg:order-1 lg:w-1/2">
                {mounted && <HeroScene />}
              </div>
              <div className="order-1 w-full rounded-[28px] border border-white/10 bg-slate-950/80 p-4 shadow-glow lg:order-2 lg:w-[42%] lg:p-6">
                <img
                  src="/images/hero-profile.png"
                  alt="Creative developer portrait of Nitin Maurya"
                  className="h-full w-full rounded-[24px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
