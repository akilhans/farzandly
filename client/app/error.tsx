'use client';

import { T } from '@/components/T';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-5">
      <h1 className="text-2xl sm:text-3xl font-black text-slate-800"><T k="err.1" /></h1>
      <p className="text-slate-500"><T k="err.2" /></p>
      <button onClick={reset} className="btn-primary px-6 py-3 cursor-pointer"><T k="err.3" /></button>
    </div>
  );
}
