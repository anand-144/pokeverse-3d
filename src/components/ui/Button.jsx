import { motion } from "framer-motion";

function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}) {
  const variants = {
    primary:
      "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/30",

    secondary:
      "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30",

    outline:
      "border border-white/20 hover:bg-white/10 text-white",

    ghost:
      "hover:bg-white/10 text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3
        rounded-xl
        font-medium
        transition-all
        duration-300
        cursor-pointer
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}

export default Button;