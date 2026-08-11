import { Search } from "lucide-react";

function MoveSearch({
  search,
  setSearch,
}) {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-cyan-500/5 blur-xl" />

      <div className="relative flex items-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <div className="pl-5">
          <Search
            size={18}
            className="text-cyan-400"
          />
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search moves..."
          className="w-full bg-transparent px-4 py-4 text-white placeholder:text-slate-500 focus:outline-none"
        />

        <div className="mr-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
            Scan
          </span>
        </div>
      </div>
    </div>
  );
}

export default MoveSearch;