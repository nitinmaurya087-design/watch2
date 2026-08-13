'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-bg/95 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-4 text-sm text-slate-300 lg:px-8">
        <a href="#home" className="font-semibold text-white hover:text-accent">
          NM.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-accent hover:text-accent"
          >
            Let's Talk
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:border-accent hover:text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 bg-bg/98 border-t border-white/10 pb-6 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-[1140px] flex-col gap-5 px-6 pt-6 text-sm text-slate-300 lg:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3 text-white transition hover:bg-accentSoft"
            >
              <Mail className="h-4 w-4" />
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
