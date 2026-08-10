import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ExplorerCard({ item }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
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
        bg-white/[0.08]
        backdrop-blur-xl
      "
    >
      {/* Gradient Glow */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${item.color}
          opacity-0
          blur-3xl
          transition
          duration-500
          group-hover:opacity-40
        `}
      />

      {/* Pokemon Artwork */}
      <motion.img
        src={item.pokemon}
        alt=""
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-10px]
          bottom-[-10px]
          h-44
          opacity-[0.18]
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:opacity-[0.28]
        "
      />

      {/* Watermark Icon */}
      <div
        className="
          absolute
          top-4
          right-4
          opacity-[0.06]
          transition
          duration-500
          group-hover:scale-110
          group-hover:opacity-[0.12]
        "
      >
        <img
          src={item.icon}
          alt=""
          className="h-32 w-32 object-contain"
        />
      </div>

      {/* Scanner Sweep */}
      <div
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-x-full
        "
      />

      {/* Content */}
      <div className="relative z-10 p-7">
        <div
          className={`
            inline-flex
            h-[72px]
            w-[72px]
            items-center
            justify-center
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-br
            ${item.color}
            p-4
            shadow-[0_0_30px_rgba(255,255,255,0.08)]
            transition
            duration-500
            group-hover:rotate-6
            group-hover:scale-110
          `}
        >
          <img
            src={item.icon}
            alt={item.title}
            className="
              h-10
              w-10
              object-contain
              drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]
            "
          />
        </div>

        <h3 className="mt-6 text-3xl font-black text-white">
          {item.title}
        </h3>

        <p className="mt-4 max-w-[260px] leading-relaxed text-zinc-300">
          {item.description}
        </p>

        {/* Status Badge */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
          <span
            className={`
              h-2
              w-2
              rounded-full
              bg-gradient-to-r
              ${item.color}
            `}
          />

          Active Module
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Link
            to={item.path}
            className="
              inline-flex
              items-center
              gap-2
              font-semibold
              text-zinc-300
              transition
              group-hover:text-white
            "
          >
            Open Module

            <ArrowRight
              className="
                size-4
                transition
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          <div
            className={`
              h-3
              w-3
              rounded-full
              bg-gradient-to-r
              ${item.color}
              shadow-[0_0_20px_rgba(255,255,255,0.5)]
            `}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ExplorerCard;
