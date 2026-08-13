import { motion } from "framer-motion";
import { typeColors } from "../../utils/typeColors";

function TypeCard({
  type,
  selected,
  onClick,
  count,
}) {
  const color =
    typeColors[type] || "#ffffff";

  return (
    <motion.button
      whileHover={{
        y: -6,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onClick={() => onClick(type)}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        p-5
        text-left
        transition-all
        duration-300
        ${
          selected
            ? "border-white/30 bg-white/10"
            : "border-white/10 bg-white/[0.03]"
        }
      `}
    >
      <div
        className="absolute inset-0 opacity-20 blur-2xl"
        style={{
          background: color,
        }}
      />

      <div className="relative z-10">
        <h3
          className="text-xl font-black capitalize"
          style={{
            color,
          }}
        >
          {type}
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          {count || "--"} Pokémon
        </p>
      </div>
    </motion.button>
  );
}

export default TypeCard;