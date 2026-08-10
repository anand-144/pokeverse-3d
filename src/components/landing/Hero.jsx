import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const fadeUp = (delay = 0) =>
  reduceMotion
    ? {}
    : {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay },
    };

function Hero() {

  const navigate = useNavigate();

  return (
    <div className="max-w-[650px]">
      {/* Eyebrow */}
      <motion.div
        {...fadeUp(0)}
        className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-red-300"
      >
        Interactive 3D Pokédex
      </motion.div>

      {/* Heading */}
      <motion.h1
        {...fadeUp(0.15)}
        className="mt-6 text-[88px] font-black uppercase leading-[0.9] tracking-tight"
      >
        Enter The

        <span className="block text-white">
          World Of
        </span>

        <span className="block bg-gradient-to-r from-red-500 via-orange-600  to-yellow-400 bg-clip-text text-transparent">
          Pokémon
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        {...fadeUp(0.3)}
        className="mt-7 max-w-[600px] text-lg leading-relaxed text-slate-400"
      >
        Discover every Pokémon through immersive 3D models, detailed
        statistics, evolutions, abilities, regions and legendary stories in
        one modern Pokédex experience.
      </motion.p>

      {/* Actions */}
      <motion.div
        {...fadeUp(0.45)}
        className="mt-10 flex items-center gap-4"
      >
        <button
          type="button"
          onClick={() => navigate(ROUTES.HOME)}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-5 text-sm font-semibold text-white shadow-lg shadow-red-500/25 transition-all hover:bg-red-400 hover:shadow-red-500/40"
        >
          Enter Pokédex

          <ArrowRight
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/10"
        >
          <Play size={16} aria-hidden="true" />
          Watch Trailer
        </button>
      </motion.div>
    </div>
  );
}

export default Hero;
