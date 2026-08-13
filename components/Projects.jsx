'use client';

import projects from '../data/projects';
import { ExternalLink, ChevronRight } from 'lucide-react';

export default function Projects() {
  return (
    <div className="mx-auto max-w-[1140px] px-6 pb-24 lg:px-8">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Selected Work</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">A collection of interfaces and digital experiences I've built.</h2>
      </div>
      <div className="grid gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`group overflow-hidden rounded-[32px] border border-white/10 bg-surface/90 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-[#111520]`}
          >
            <div className="grid gap-6 lg:grid-cols-[0.6fr_0.4fr] lg:items-start">
              <div className="space-y-5">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-accent">
                  <span>{project.date}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-slate-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-white"
                  >
                    Live Demo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0f18] shadow-glow">
                <div className="aspect-[16/10] bg-[radial-gradient(circle_at_top,_rgba(124,134,255,0.12),_transparent_38%)]" />
                <div className="absolute inset-0 flex items-end p-6">
                  <span className="rounded-full bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-200">
                    Preview
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
