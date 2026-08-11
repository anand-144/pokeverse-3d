import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function EvolutionConnector({
  trigger = "Evolution",
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Requirement */}
      <div className="mb-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
          {trigger}
        </span>
      </div>

      {/* Animated Line */}
      <div className="relative hidden h-[2px] w-24 overflow-hidden rounded-full bg-white/10 lg:block">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-y-0 w-12 bg-cyan-400"
        />
      </div>

      {/* Arrow */}
      <motion.div
        animate={{
          x: [0, 6, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="mt-3 hidden text-cyan-400 lg:block"
      >
        <FaArrowRight size={20} />
      </motion.div>

      {/* Mobile */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
        className="my-4 text-cyan-400 lg:hidden"
      >
        ↓
      </motion.div>
    </div>
  );
}

export default EvolutionConnector;