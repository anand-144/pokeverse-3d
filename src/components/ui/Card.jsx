import { motion } from "framer-motion";

function Card({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className={`
        bg-white/5
        backdrop-blur-md
        border border-white/10
        rounded-3xl
        p-6
        shadow-xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default Card;