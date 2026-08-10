import GenerationCard from "./GenerationCard";
import GenerationTimeline from "./GenerationTimeline";

import generationData from "./generationData";

function GenerationSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/5 blur-[150px]" />

      {/* Left Glow */}
      <div className="absolute left-0 top-40 h-[300px] w-[300px] rounded-full bg-green-500/5 blur-[120px]" />

      {/* Right Glow */}
      <div className="absolute right-0 bottom-20 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="inline-flex items-center rounded-full border border-orange-600/60 bg-orange-500/20 px-5 py-2 text-sm font-medium text-zinc-300 backdrop-blur-md">
            Pokémon Regions
          </span>

          <h2 className="mt-8 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-400 bg-clip-text py-2 text-4xl font-black text-transparent md:text-6xl">
            Travel Through Every Generation
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Journey from Kanto to Paldea and discover the Pokémon,
            regions and adventures that shaped every generation.
          </p>
        </div>

        {/* Timeline */}
        <GenerationTimeline />

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {generationData.map((generation) => (
            <GenerationCard
              key={generation.id}
              generation={generation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GenerationSection;