import { motion } from "framer-motion";

function Loader() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-[#050816]
      "
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          h-20
          w-20
          rounded-full
          border-[8px]
          border-red-500
          border-t-white
        "
      />
    </div>
  );
}

export default Loader;