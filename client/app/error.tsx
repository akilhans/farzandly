'use client';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-5">
      <h1 className="text-2xl sm:text-3xl font-black text-slate-800">Nimadir xato ketdi</h1>
      <p className="text-slate-500">Sahifani yuklashda muammo yuz berdi. Iltimos, qayta urinib ko‘ring.</p>
      <button onClick={reset} className="btn-primary px-6 py-3 cursor-pointer">Qayta urinish</button>
    </div>
  );
}
