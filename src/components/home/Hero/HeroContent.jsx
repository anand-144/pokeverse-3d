import HeroSearch from "./HeroSearch";
import HeroStats from "./HeroStats";

function HeroContent() {
  return (
    <div className="relative">
     <div className="mt-40 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 backdrop-blur-xl">
        <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

        <span className="text-sm font-medium text-red-400">
          Pokédex Command Center
        </span>
      </div>

      <h1 className="mt-8 text-5xl font-extrabold text-red-500 leading-none md:text-7xl lg:text-8xl">
        Discover
        <span className="mt-2 block bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
          Every Pokémon
        </span>
      </h1>

      <p className="text-muted-foreground mt-8 max-w-xl text-lg leading-relaxed md:text-xl text-white">
        Explore generations, compare stats, discover evolutions,
        and build your ultimate Pokémon collection.
      </p>

      <div className="mt-10">
        <HeroSearch />
      </div>

      <div className="mt-10">
        <HeroStats />
      </div>
    </div>
  );
}

export default HeroContent;