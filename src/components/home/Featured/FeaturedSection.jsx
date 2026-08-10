import FeaturedCard from "./FeaturedCard";

function FeaturedSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Main Glow */}
      <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-500/5 blur-[180px]" />

      {/* Left Glow */}
      <div className="absolute left-0 top-40 h-[300px] w-[300px] rounded-full bg-orange-500/5 blur-[120px]" />

      {/* Right Glow */}
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-red-500/5 blur-[120px]" />

      {/* Divider */}
      <div className="mx-auto mb-20 h-px max-w-6xl bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-400 backdrop-blur-md">
            Featured Pokémon
          </span>

         <h2 className="mt-8 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text py-2 text-4xl leading-tight font-black text-transparent md:text-6xl">
            Today's Spotlight
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Discover legendary Pokémon, fan favorites and iconic creatures
            from every generation.
          </p>
        </div>

        <FeaturedCard />
      </div>
    </section>
  );
}

export default FeaturedSection;