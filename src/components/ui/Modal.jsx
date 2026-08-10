import { AnimatePresence, motion } from "framer-motion";

function Modal({ open, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40"
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-50
              w-[90%]
              max-w-lg
              -translate-x-1/2
              -translate-y-1/2
              rounded-3xl
              border
              border-white/10
              bg-[#111827]
              p-6
            "
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Modal;