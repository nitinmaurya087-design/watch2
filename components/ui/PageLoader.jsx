'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-[#07080d] text-white">
      <div className="space-y-4 text-center">
        <div className="text-4xl font-semibold tracking-[0.2em]">NM</div>
        <div className="text-sm uppercase tracking-[0.45em] text-slate-400">NITIN MAURYA</div>
      </div>
    </div>
  );
}
