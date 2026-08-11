import { motion } from "framer-motion";

function ScannerRing({ accentColor }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* OUTER RING */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[620px] w-[620px] rounded-full border border-white/10"
      >
        <div
          className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full"
          style={{ backgroundColor: accentColor }}
        />

        <div
          className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full"
          style={{ backgroundColor: accentColor }}
        />

        <div
          className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full"
          style={{ backgroundColor: accentColor }}
        />

        <div
          className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
      </motion.div>

      {/* MIDDLE RING */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[500px] w-[500px] rounded-full border border-white/15"
      >
        <div
          className="absolute left-1/2 top-0 h-10 w-[2px] -translate-x-1/2"
          style={{ backgroundColor: accentColor }}
        />

        <div
          className="absolute bottom-0 left-1/2 h-10 w-[2px] -translate-x-1/2"
          style={{ backgroundColor: accentColor }}
        />

        <div
          className="absolute left-0 top-1/2 h-[2px] w-10 -translate-y-1/2"
          style={{ backgroundColor: accentColor }}
        />

        <div
          className="absolute right-0 top-1/2 h-[2px] w-10 -translate-y-1/2"
          style={{ backgroundColor: accentColor }}
        />
      </motion.div>

      {/* INNER RING */}
      <div
        className="absolute h-[380px] w-[380px] rounded-full border-2"
        style={{
          borderColor: accentColor,
          boxShadow: `0 0 40px ${accentColor}40`,
        }}
      />

      {/* PULSE RING */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.05, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[420px] w-[420px] rounded-full border"
        style={{
          borderColor: accentColor,
        }}
      />

      {/* CROSSHAIR VERTICAL */}
      <div
        className="absolute h-[700px] w-[1px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,.3), transparent)",
        }}
      />

      {/* CROSSHAIR HORIZONTAL */}
      <div
        className="absolute h-[1px] w-[700px]"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,.3), transparent)",
        }}
      />

      {/* DIAGONAL 1 */}
      <div
        className="absolute h-[520px] w-[1px] rotate-45"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,.15), transparent)",
        }}
      />

      {/* DIAGONAL 2 */}
      <div
        className="absolute h-[520px] w-[1px] -rotate-45"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,.15), transparent)",
        }}
      />

      {/* SCANNER SWEEP */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[520px] w-[520px]"
      >
        <div
          className="absolute left-1/2 top-0 h-1/2 w-[2px] origin-bottom -translate-x-1/2"
          style={{
            background: `linear-gradient(to top, transparent, ${accentColor})`,
          }}
        />
      </motion.div>

      {/* CENTER DOT */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute h-4 w-4 rounded-full"
        style={{
          backgroundColor: accentColor,
          boxShadow: `0 0 30px ${accentColor}`,
        }}
      />

      {/* CORNER HUD MARKERS */}
      <div className="absolute h-[720px] w-[720px]">
        <div
          className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2"
          style={{ borderColor: accentColor }}
        />

        <div
          className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2"
          style={{ borderColor: accentColor }}
        />

        <div
          className="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2"
          style={{ borderColor: accentColor }}
        />

        <div
          className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2"
          style={{ borderColor: accentColor }}
        />
      </div>
    </div>
  );
}

export default ScannerRing;