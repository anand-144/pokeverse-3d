import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  FaCube,
  FaScaleBalanced,
  FaVolumeHigh,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HeroActions({
  isShiny,
  setIsShiny,
  favorite,
  toggleFavorite,
  playCry,
  addToCompare,
  setShow3DModal,
}) {
  return (
    <section className="mt-12">
      <div className="flex flex-wrap justify-center gap-4">
        {/* Shiny */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() =>
            setIsShiny((prev) => !prev)
          }
          className={`group relative overflow-hidden rounded-2xl border px-6 py-4 font-semibold transition-all ${
            isShiny
              ? "border-yellow-400 bg-yellow-400 text-black"
              : "border-white/10 bg-white/5 text-white hover:border-white/20"
          }`}
        >
          <span className="relative z-10 flex items-center gap-2">
            ✨
            {isShiny
              ? "Shiny Active"
              : "Enable Shiny"}
          </span>
        </motion.button>

        {/* Cry */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={playCry}
          className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white transition-all hover:border-green-400/30 hover:bg-green-400/10"
        >
          <span className="flex items-center gap-2">
            <FaVolumeHigh />
            Cry
          </span>
        </motion.button>

        {/* 3D View */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() =>
            setShow3DModal(true)
          }
          className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white transition-all hover:border-cyan-400/30 hover:bg-cyan-400/10"
        >
          <span className="flex items-center gap-2">
            <FaCube />
            3D View
          </span>
        </motion.button>

        {/* Favorite */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={toggleFavorite}
          className={`rounded-2xl border px-6 py-4 transition-all ${
            favorite
              ? "border-red-500 bg-red-500 text-white"
              : "border-white/10 bg-white/5 text-white hover:border-red-500/30 hover:bg-red-500/10"
          }`}
        >
          <span className="flex items-center gap-2">
            {favorite ? (
              <FaHeart />
            ) : (
              <FaRegHeart />
            )}

            {favorite
              ? "Favorited"
              : "Favorite"}
          </span>
        </motion.button>

        {/* Compare */}
        <Link
          to="/compare"
          onClick={addToCompare}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white transition-all hover:border-blue-500/30 hover:bg-blue-500/10"
          >
            <span className="flex items-center gap-2">
              <FaScaleBalanced />
              Compare
            </span>
          </motion.div>
        </Link>
      </div>

      {/* HUD Divider */}
      <div className="mx-auto mt-10 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

export default HeroActions;