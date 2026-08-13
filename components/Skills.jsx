'use client';

import { useState } from 'react';
import skills from '../data/skills';

const categories = [
  { title: 'Programming Languages', items: skills.languages },
  { title: 'Frontend', items: skills.frontend },
  { title: 'Technical Skills', items: skills.technical },
  { title: 'Creative Skills', items: skills.creative },
  { title: 'Tools & Platforms', items: skills.tools },
  { title: 'Non-Technical', items: skills.nonTechnical }
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState('Frontend');

  return (
    <div className="mx-auto max-w-[1140px] px-6 pb-24 lg:px-8">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Skills</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">A modern skillset with interactive context.</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
          I work across frontend, UI/UX, visual storytelling and developer tools to build polished web interfaces with strong interaction quality.
        </p>
      </div>
      <div className="grid gap-8 xl:grid-cols-[0.85fr_0.65fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.title} className="rounded-[28px] border border-white/10 bg-surface/90 p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                {category.items.map((skill) => (
                  <button
                    type="button"
                    key={skill}
                    onMouseEnter={() => setSelectedSkill(skill)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:border-accent hover:text-white"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[32px] border border-white/10 bg-[#090b15]/95 p-8 shadow-glow">
          <div className="text-sm uppercase tracking-[0.35em] text-accent">Skill Spotlight</div>
          <p className="mt-4 text-2xl font-semibold text-white">{selectedSkill}</p>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Hover over each skill to reveal a short description. These are the tools, languages and abilities I rely on to build frontend experiences.
          </p>
          <div className="mt-8 h-80 rounded-[28px] border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            <div className="flex h-full items-center justify-center text-center text-slate-300">
              <span className="max-w-sm">
                {selectedSkill} is part of my toolkit for building modern, responsive and interaction-driven web interfaces.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
