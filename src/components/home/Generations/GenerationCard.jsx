import { motion } from "framer-motion";
import { TbPokeball } from "react-icons/tb";

function GenerationCard({ generation }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.06]
        backdrop-blur-xl
      "
    >
      {/* Region Glow */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${generation.color}
          opacity-0
          blur-3xl
          transition
          duration-500
          group-hover:opacity-40
        `}
      />

      {/* Pokeball Watermark */}
      <div className="absolute top-4 right-4">
        <TbPokeball
          className="
            size-40
            text-white/[0.04]
            transition
            duration-500
            group-hover:rotate-180
            group-hover:text-white/[0.08]
          "
        />
      </div>

      {/* Background Pokemon */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={generation.starters[1]}
          alt=""
          className="
            absolute
            right-[-20px]
            bottom-[-20px]
            h-56
            opacity-[0.18]
            transition
            duration-500
            group-hover:scale-110
            group-hover:opacity-[0.30]
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-7">
        {/* Badge */}
        <span
          className={`
            inline-flex
            rounded-full
            bg-gradient-to-r
            ${generation.color}
            px-4
            py-1.5
            text-xs
            font-bold
            tracking-wider
            text-white
          `}
        >
          Generation {generation.id}
        </span>

        {/* Region */}
        <h3
          className={`
            mt-5
            bg-gradient-to-r
            ${generation.color}
            bg-clip-text
            text-4xl
            font-black
            text-transparent
          `}
        >
          {generation.region}
        </h3>

        <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-zinc-300">
          Explore the legendary region that introduced iconic Pokémon,
          adventures and unforgettable battles.
        </p>

        {/* Stats Card */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Pokémon Count
          </p>

          <p className="mt-2 text-3xl font-black text-white">
            {generation.pokemon}
          </p>
        </div>

        {/* Mini Starters */}
        <div className="mt-6 flex gap-2">
          {generation.starters.map((starter) => (
            <img
              key={starter}
              src={starter}
              alt=""
              className="
                h-10
                w-10
                rounded-full
                border
                border-white/10
                bg-black/20
                p-1
                transition
                duration-300
                hover:scale-110
              "
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-semibold text-zinc-300">
            Explore Region →
          </span>

          <div
            className={`
              h-3
              w-3
              rounded-full
              bg-gradient-to-r
              ${generation.color}
              shadow-lg
            `}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default GenerationCard;