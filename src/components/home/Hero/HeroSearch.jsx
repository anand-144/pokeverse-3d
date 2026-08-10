import { Search, Sparkles } from "lucide-react";

function HeroSearch() {
  return (
    <div className="relative mt-8">
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-red-500/10 blur-xl" />

      <div className="relative flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15">
          <Search className="size-5 text-red-400" />
        </div>

        <input
          type="text"
          placeholder="Search Pokémon, Type, Ability..."
          className="flex-1 bg-transparent text-white outline-none placeholder:text-zinc-500"
        />

        <button className="flex items-center gap-2 rounded-2xl bg-red-500 px-5 py-3 font-medium text-white transition hover:bg-red-600">
          <Sparkles className="size-4" />
          Scan
        </button>
      </div>
    </div>
  );
}

export default HeroSearch;