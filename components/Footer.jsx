'use client';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg/90 py-12">
      <div className="mx-auto flex max-w-[1140px] flex-col gap-8 px-6 text-slate-300 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">Nitin Maurya</p>
          <p className="mt-2 text-sm text-slate-400">Frontend Developer & UI/UX Designer</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <a href="https://github.com/nitinmaurya087-design" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/in/nitin-maurya" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            LinkedIn
          </a>
          <a href="https://x.com/NitinMaurya9780" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            X
          </a>
          <a href="mailto:nitinmaurya087@gmail.com" className="transition hover:text-white">
            Email
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1140px] px-6 text-sm text-slate-500 lg:px-8">
        © 2026 Nitin Maurya. Built with Next.js & creativity.
      </div>
    </footer>
  );
}
