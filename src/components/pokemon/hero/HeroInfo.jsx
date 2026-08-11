import { motion } from "framer-motion";
import {
  FaRulerVertical,
  FaWeightHanging,
  FaDna,
  FaGlobe,
} from "react-icons/fa";

function HeroInfo({
  pokemon,
  species,
}) {
  const category =
    species?.genera?.find(
      (item) =>
        item.language.name === "en"
    )?.genus || "Unknown";

  const generation =
    species?.generation?.name
      ?.replace("generation-", "Gen ")
      ?.toUpperCase() ||
    "Unknown";

  return (
    <section className="mt-12">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {/* Height */}
        <motion.div
          whileHover={{
            y: -5,
          }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-cyan-400">
              <FaRulerVertical />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Height
              </p>

              <h3 className="mt-1 text-2xl font-black text-white">
                {(
                  pokemon.height / 10
                ).toFixed(1)}
                m
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Weight */}
        <motion.div
          whileHover={{
            y: -5,
          }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-orange-400">
              <FaWeightHanging />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Weight
              </p>

              <h3 className="mt-1 text-2xl font-black text-white">
                {(
                  pokemon.weight / 10
                ).toFixed(1)}
                kg
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Category */}
        <motion.div
          whileHover={{
            y: -5,
          }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-purple-400">
              <FaDna />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Category
              </p>

              <h3 className="mt-1 text-lg font-bold text-white">
                {category}
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Generation */}
        <motion.div
          whileHover={{
            y: -5,
          }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-green-400">
              <FaGlobe />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Generation
              </p>

              <h3 className="mt-1 text-lg font-bold text-white">
                {generation}
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroInfo;