import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

import Pokemon3DViewer from "./Pokemon3DViewer";
import usePokemon3DModel from "../../../hooks/usePokemon3DModel";

function Hero3DModal({
  show,
  onClose,
  pokemon,
}) {
  const {
    modelUrl,
    loading,
  } = usePokemon3DModel(
    pokemon?.id
  );

  if (!pokemon) return null;


  useEffect(() => {
  if (show) {
    document.body.classList.add(
      "scanner-open"
    );

    document.body.style.overflow =
      "hidden";
  } else {
    document.body.classList.remove(
      "scanner-open"
    );

    document.body.style.overflow =
      "auto";
  }

  return () => {
    document.body.classList.remove(
      "scanner-open"
    );

    document.body.style.overflow =
      "auto";
  };
}, [show]);

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
            className="fixed inset-0 z-[9998] bg-black/90 backdrop-blur-md"
          />

          {/* Fullscreen Scanner */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-[9999]"
          >
            <div className="relative h-screen w-screen overflow-hidden bg-[#08101f]">

              {/* Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[300px]" />

              {/* Scanner Rings */}
              <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/5" />

              <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

              <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

              {/* Scanner Crosshair */}
              <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-cyan-400/10" />

              <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-cyan-400/10" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-8 top-8 z-50 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-white backdrop-blur-xl transition-all hover:bg-white/10"
              >
                <IoClose size={28} />
              </button>

              {/* Header */}
              <div className="absolute left-10 top-8 z-40">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
                  Pokédex Scanner
                </p>

                <h2 className="mt-3 text-5xl font-black uppercase text-white">
                  {pokemon.name}
                </h2>

                <p className="mt-2 text-slate-400">
                  Interactive 3D Pokémon Visualization
                </p>
              </div>

              {/* Types */}
              <div className="absolute left-10 top-40 z-40 flex gap-3">
                {pokemon.types?.map((type) => (
                  <div
                    key={type.type.name}
                    className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-cyan-300"
                  >
                    {type.type.name}
                  </div>
                ))}
              </div>

              {/* Viewer */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="h-[70vh] w-[70vh] max-h-[700px] max-w-[700px]">
                  {loading ? (
                    <div className="flex h-full items-center justify-center">
                      <div className="h-20 w-20 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />
                    </div>
                  ) : modelUrl ? (
                    <Pokemon3DViewer
                      modelUrl={modelUrl}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-2xl font-semibold text-cyan-400">
                      Model Not Available
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom HUD */}
              <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-6 rounded-2xl border border-cyan-400/20 bg-black/50 px-8 py-4 backdrop-blur-xl">

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    National Dex
                  </p>

                  <p className="text-lg font-bold text-white">
                    #{pokemon.id}
                  </p>
                </div>

                <div className="h-10 w-px bg-white/10" />

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Height
                  </p>

                  <p className="text-lg font-bold text-white">
                    {(pokemon.height / 10).toFixed(1)} m
                  </p>
                </div>

                <div className="h-10 w-px bg-white/10" />

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Weight
                  </p>

                  <p className="text-lg font-bold text-white">
                    {(pokemon.weight / 10).toFixed(1)} kg
                  </p>
                </div>
              </div>

              {/* HUD Corners */}
              <div className="absolute left-8 top-8 h-12 w-12 border-l-2 border-t-2 border-cyan-400/50" />

              <div className="absolute right-8 top-8 h-12 w-12 border-r-2 border-t-2 border-cyan-400/50" />

              <div className="absolute bottom-8 left-8 h-12 w-12 border-b-2 border-l-2 border-cyan-400/50" />

              <div className="absolute bottom-8 right-8 h-12 w-12 border-b-2 border-r-2 border-cyan-400/50" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Hero3DModal;