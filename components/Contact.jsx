'use client';

import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState)
    });
    const result = await response.json();
    if (response.ok) {
      setStatus('Message sent successfully.');
      setFormState({ name: '', email: '', message: '' });
    } else if (result.fallback) {
      setStatus('Email service not configured. Use direct email instead.');
    } else {
      setStatus(result.error || 'Unable to send message.');
    }
  };

  return (
    <div className="mx-auto max-w-[1140px] px-6 pb-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_0.75fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Have an idea?</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let&apos;s build something meaningful.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Whether it&apos;s a website, interactive experience or a new digital idea, I&apos;m always interested in creating something thoughtful.
          </p>
          <div className="mt-10 space-y-6 rounded-[32px] border border-white/10 bg-surface/90 p-6 shadow-soft">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Phone</p>
              <p className="mt-2 text-base text-white">+91 8317010462</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Email</p>
              <a
                href="mailto:nitinmaurya087@gmail.com"
                className="mt-2 inline-block text-base text-accent transition hover:text-white"
              >
                nitinmaurya087@gmail.com
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Email', href: 'mailto:nitinmaurya087@gmail.com' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/nitin-maurya' },
                { label: 'GitHub', href: 'https://github.com/nitinmaurya087-design' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-slate-200 transition hover:border-accent hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-[#0d0f18]/95 p-6 shadow-glow">
          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block text-sm text-slate-300">
              Name
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-3 w-full rounded-3xl border border-white/10 bg-[#090b15] px-4 py-3 text-white outline-none transition focus:border-accent"
                required
              />
            </label>
            <label className="block text-sm text-slate-300">
              Email
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-3 w-full rounded-3xl border border-white/10 bg-[#090b15] px-4 py-3 text-white outline-none transition focus:border-accent"
                required
              />
            </label>
            <label className="block text-sm text-slate-300">
              Message
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows="6"
                placeholder="Tell me about your project"
                className="mt-3 w-full rounded-3xl border border-white/10 bg-[#090b15] px-4 py-3 text-white outline-none transition focus:border-accent"
                required
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-4 text-sm font-semibold text-white transition hover:bg-accentSoft"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-slate-300">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
