import { motion } from "framer-motion";

import ScannerRing from "./ScannerRing";

function HeroScanner({
  pokemon,
  image,
  isShiny,
  accentColor,
}) {
  return (
    <section className="relative flex min-h-[750px] items-center justify-center overflow-hidden">
      {/* Scanner Rings */}
      <ScannerRing
        accentColor={accentColor}
      />

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[320px] w-[320px] rounded-full blur-[120px]"
        style={{
          backgroundColor:
            accentColor,
        }}
      />

      {/* Shiny Aura */}
      {isShiny && (
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute h-[420px] w-[420px] rounded-full bg-yellow-400 blur-[100px]"
        />
      )}

      {/* Scanner Circle */}
      <div className="absolute flex h-[420px] w-[420px] items-center justify-center rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm">
        <div
          className="absolute h-[360px] w-[360px] rounded-full border"
          style={{
            borderColor:
              accentColor + "50",
          }}
        />

        <div
          className="absolute h-[280px] w-[280px] rounded-full border"
          style={{
            borderColor:
              accentColor + "30",
          }}
        />
      </div>

      {/* Pokemon Image */}
      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20"
      >
        <motion.img
          src={image}
          alt={pokemon.name}
          whileHover={{
            scale: 1.05,
          }}
          className="h-[420px] w-[420px] object-contain drop-shadow-[0_25px_80px_rgba(0,0,0,0.8)]"
        />
      </motion.div>

      {/* Scanner Target */}
      <div className="absolute h-[500px] w-[500px]">
        <div className="absolute left-1/2 top-0 h-12 w-[2px] -translate-x-1/2 bg-white/20" />

        <div className="absolute bottom-0 left-1/2 h-12 w-[2px] -translate-x-1/2 bg-white/20" />

        <div className="absolute left-0 top-1/2 h-[2px] w-12 -translate-y-1/2 bg-white/20" />

        <div className="absolute right-0 top-1/2 h-[2px] w-12 -translate-y-1/2 bg-white/20" />
      </div>

      {/* Scan Line */}
      <motion.div
        animate={{
          y: [-220, 220, -220],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute z-10 h-[2px] w-[420px]"
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${accentColor},
            transparent
          )`,
          boxShadow: `0 0 20px ${accentColor}`,
        }}
      />

      {/* HUD Labels */}
      <div className="absolute left-10 top-10">
        <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Species
          </p>

          <p className="mt-1 text-sm font-semibold text-white capitalize">
            {pokemon.name}
          </p>
        </div>
      </div>

      <div className="absolute right-10 top-10">
        <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Status
          </p>

          <p
            className="mt-1 text-sm font-semibold"
            style={{
              color: accentColor,
            }}
          >
            ACTIVE
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-12">
        <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Scanner
          </p>

          <p className="mt-1 text-sm font-semibold text-white">
            ONLINE
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 right-12">
        <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Type
          </p>

          <p
            className="mt-1 text-sm font-semibold capitalize"
            style={{
              color: accentColor,
            }}
          >
            {
              pokemon.types?.[0]?.type
                ?.name
            }
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroScanner;