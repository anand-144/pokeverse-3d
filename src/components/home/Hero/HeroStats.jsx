import { Globe, Layers3, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Sparkles,
    value: "1025+",
    label: "Pokémon",
  },
  {
    icon: Globe,
    value: "9",
    label: "Regions",
  },
  {
    icon: Layers3,
    value: "18",
    label: "Types",
  },
];

function HeroStats() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-red-500/30
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15">
                <Icon className="size-5 text-red-400" />
              </div>

              <h3 className="text-3xl font-black text-white">
                {item.value}
              </h3>

              <p className="mt-1 text-sm text-zinc-400">
                {item.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeroStats;