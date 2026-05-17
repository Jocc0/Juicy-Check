export function App() {
  return (
    <main className="min-h-screen bg-[#020406] text-white flex items-center justify-center px-6 py-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-[#07101e]/80 px-10 py-16 shadow-[0_40px_120px_rgba(10,22,50,0.45)] sm:px-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.28),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(30,64,175,0.24),_transparent_25%)]" />
        <div className="relative z-10 max-w-2xl text-center">
          <div className="mb-5 inline-flex rounded-full bg-blue-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-sky-300 shadow-[0_0_0_1px_rgba(56,189,248,0.15)]">
            Juicy Check
          </div>
          <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">
            Juicy Check
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Une interface épurée, sombre et moderne pour démarrer votre
            application. Noir profond, bleu électrique et un effet de verre
            subtil pour un rendu vivant.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/70"
            >
              Découvrir
            </a>
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-slate-200">
              Design noir & bleu
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
