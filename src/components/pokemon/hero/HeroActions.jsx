import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  FaScaleBalanced,
  FaVolumeHigh,
} from "react-icons/fa6";
import { MdOutlineAnimation } from "react-icons/md";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HeroActions({
  pokemon,
  isShiny,
  setIsShiny,
  favorite,
  toggleFavorite,
  playCry,
  setShow3DModal,
}) {
const handleCompare = () => {
  if (!pokemon) return;

  localStorage.setItem(
    "compareLeft",
    JSON.stringify({
      name: pokemon.name,
    })
  );
};

  return (
    <section className="mt-12">
      <div className="flex flex-wrap justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            setIsShiny((prev) => !prev)
          }
          className={`group relative overflow-hidden rounded-2xl border px-6 py-4 font-semibold transition-all ${
            isShiny
              ? "border-yellow-400 bg-yellow-400 text-black"
              : "border-white/10 bg-white/5 text-white"
          }`}
        >
          <span className="flex items-center gap-2">
            ✨
            {isShiny
              ? "Shiny Active"
              : "Enable Shiny"}
          </span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={playCry}
          className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white"
        >
          <span className="flex items-center gap-2">
            <FaVolumeHigh />
            Cry
          </span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            setShow3DModal(true)
          }
          className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white"
        >
          <span className="flex items-center gap-2">
            <MdOutlineAnimation />
            Animated View
          </span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleFavorite}
          className={`rounded-2xl border px-6 py-4 ${
            favorite
              ? "border-red-500 bg-red-500 text-white"
              : "border-white/10 bg-white/5 text-white"
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

        <Link
          to="/compare"
          onClick={handleCompare}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white"
          >
            <span className="flex items-center gap-2">
              <FaScaleBalanced />
              Compare
            </span>
          </motion.div>
        </Link>
      </div>

      <div className="mx-auto mt-10 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

export default HeroActions;