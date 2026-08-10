import { motion } from "framer-motion";

function Particle({ index }) {
  const left = Math.random() * 100;
  const delay = Math.random() * 5;
  const duration = 6 + Math.random() * 6;

  return (
    <motion.div
      className="
        absolute
        h-1
        w-1
        rounded-full
        bg-red-500
      "
      style={{
        left: `${left}%`,
        bottom: "-20px",
      }}
      animate={{
        y: [-20, -900],
        opacity: [0, 1, 0],
        scale: [0, 1.2, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

function BackgroundParticles() {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
    >
      {[...Array(40)].map((_, index) => (
        <Particle
          key={index}
          index={index}
        />
      ))}
    </div>
  );
}

export default BackgroundParticles;