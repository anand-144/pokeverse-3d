import { motion } from "framer-motion";
import {
  Flame,
  Droplets,
  Zap,
  Leaf,
  Snowflake,
  Ghost,
  Shield,
  Mountain,
  Bug,
  Brain,
  Moon,
  Gem,
  Bird,
  Sparkles,
  Sword,
} from "lucide-react";

import { typeColors } from "../../utils/typeColors";

const typeIcons = {
  fire: Flame,
  water: Droplets,
  electric: Zap,
  grass: Leaf,
  ice: Snowflake,
  ghost: Ghost,
  steel: Shield,
  rock: Mountain,
  ground: Mountain,
  bug: Bug,
  psychic: Brain,
  dark: Moon,
  dragon: Sparkles,
  fairy: Sparkles,
  flying: Bird,
  fighting: Sword,
};

function TypeCard({
  type,
  selected,
  onClick,
  count,
}) {
  const color =
    typeColors[type] || "#ffffff";

  const Icon =
    typeIcons[type] ||
    Sparkles;

  return (
    <motion.button
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onClick={() => onClick(type)}
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        text-left
        p-5
        transition-all
        duration-300
        ${
          selected
            ? "border-white/20 bg-white/[0.08]"
            : "border-white/10 bg-white/[0.03]"
        }
      `}
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          blur-3xl
          transition-all
          duration-500
          group-hover:opacity-25
        "
        style={{
          background: color,
        }}
      />

      {/* Top Accent */}
      <div
        className="absolute top-0 left-0 h-[3px] w-full"
        style={{
          background: color,
        }}
      />

      {/* Shine */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-700
          bg-gradient-to-r
          from-transparent
          via-white/[0.04]
          to-transparent
          -translate-x-full
          group-hover:translate-x-full
        "
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="
            h-14
            w-14
            rounded-2xl
            border
            border-white/10
            bg-white/5
            flex
            items-center
            justify-center
          "
        >
          <Icon
            size={24}
            style={{
              color,
            }}
          />
        </div>

        {/* Name */}
        <h3
          className="
            mt-5
            text-2xl
            font-black
            capitalize
          "
          style={{
            color,
          }}
        >
          {type}
        </h3>

        {/* Count */}
        <p className="mt-2 text-slate-400 text-sm">
          {count || "--"} Pokémon
        </p>

        {/* Selected Badge */}
        <div className="mt-4">
          {selected ? (
            <span
              className="
                inline-flex
                px-3
                py-1
                rounded-full
                text-xs
                font-medium
                border
                border-white/10
                bg-white/10
                text-white
              "
            >
              Active Type
            </span>
          ) : (
            <span
              className="
                inline-flex
                px-3
                py-1
                rounded-full
                text-xs
                border
                border-white/10
                text-slate-500
              "
            >
              Select Type
            </span>
          )}
        </div>
      </div>

      {/* Selected Ring */}
      {selected && (
        <motion.div
          layoutId="selected-type"
          className="
            absolute
            inset-0
            rounded-[28px]
            border-2
            pointer-events-none
          "
          style={{
            borderColor: color,
          }}
        />
      )}
    </motion.button>
  );
}

export default TypeCard;