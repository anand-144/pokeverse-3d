import {
  FaSatelliteDish,
  FaShield,
} from "react-icons/fa6";

function WeaknessHeader() {
  return (
    <div className="flex flex-col gap-6 border-b border-white/10 pb-8 xl:flex-row xl:items-center xl:justify-between">
      {/* Left */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
          Type Matchup Analyzer
        </p>

        <h2 className="mt-3 text-4xl font-black text-white">
          Battlefield Effectiveness
        </h2>

        <p className="mt-2 text-slate-400">
          Defensive strengths, weaknesses,
          resistances and immunity scan.
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-3 rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-3">
          <FaSatelliteDish className="text-green-400" />

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Scanner
            </p>

            <p className="font-bold text-green-400">
              Online
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3">
          <FaShield className="text-cyan-400" />

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Status
            </p>

            <p className="font-bold text-cyan-400">
              Verified
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeaknessHeader;