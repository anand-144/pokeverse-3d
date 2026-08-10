import ExplorerGrid from "./ExplorerGrid";

function ExplorerSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/[0.02] to-transparent" />

      {/* Radar Circle */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/5" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/5" />

      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/5" />

      {/* Scanner Dots */}
      <div className="absolute left-[20%] top-[30%] h-4 w-4 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.9)]" />

      <div className="absolute right-[25%] top-[60%] h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.9)]" />

      <div className="absolute left-[65%] top-[20%] h-5 w-5 rounded-full bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.9)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            Pokédex Command Center
          </span>

          <h2 className="mt-6 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text py-2 text-4xl font-black text-transparent md:text-6xl">
            Explore The Pokédex
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Everything you need to discover, compare, analyze and
            collect Pokémon from every generation.
          </p>
        </div>

        {/* Cards */}
        <ExplorerGrid />
      </div>
    </section>
  );
}

export default ExplorerSection;
