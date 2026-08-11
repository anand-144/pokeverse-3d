import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

function Hero3DModal({
  show,
  onClose,
  pokemon,
}) {
  if (!pokemon) return null;

  const image =
    pokemon.sprites?.other?.home
      ?.front_default ||
    pokemon.sprites?.other?.[
      "official-artwork"
    ]?.front_default ||
    pokemon.sprites?.front_default;

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 50,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed left-1/2 top-1/2 z-[101] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 px-6"
          >
            <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/20 bg-[#08101f]/95 p-10 backdrop-blur-2xl">
              {/* Scanner Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />

              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10"
              >
                <IoClose size={24} />
              </button>

              <div className="relative z-10">
                {/* Scanner Viewer */}
                <div className="relative mx-auto flex h-80 w-80 items-center justify-center">
                  <div className="absolute h-80 w-80 rounded-full border border-cyan-400/20" />

                  <div className="absolute h-64 w-64 rounded-full border border-cyan-400/15" />

                  <div className="absolute h-48 w-48 rounded-full border border-cyan-400/10" />

                  <div className="absolute h-full w-[2px] bg-cyan-400/20" />

                  <div className="absolute h-[2px] w-full bg-cyan-400/20" />

                  <motion.img
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    src={image}
                    alt={pokemon.name}
                    className="relative z-10 h-64 w-64 object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.8)]"
                  />
                </div>

                {/* Name */}
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
                    Pokédex Scanner
                  </p>

                  <h2 className="mt-3 text-5xl font-black uppercase text-white">
                    {pokemon.name}
                  </h2>

                  <p className="mt-3 text-slate-400">
                    Species analysis and scanner
                    visualization module.
                  </p>
                </div>

                {/* Button */}
                <div className="mt-10 flex justify-center">
                  <button
                    onClick={onClose}
                    className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-8 py-3 font-semibold text-cyan-300 transition-all hover:bg-cyan-500/20"
                  >
                    Close Scanner
                  </button>
                </div>
              </div>

              {/* HUD Corners */}
              <div className="absolute left-6 top-6 h-8 w-8 border-l-2 border-t-2 border-cyan-400/50" />

              <div className="absolute right-6 top-6 h-8 w-8 border-r-2 border-t-2 border-cyan-400/50" />

              <div className="absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-cyan-400/50" />

              <div className="absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-cyan-400/50" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Hero3DModal;