import { TbPokeball } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { ROUTES } from "../../constants/routes";

const navLinks = [
  {
    label: "Home",
    path: ROUTES.HOME,
  },
  {
    label: "Pokédex",
    path: ROUTES.POKEDEX,
  },
  {
    label: "Types",
    path: ROUTES.TYPES,
  },
  {
    label: "Random",
    path: ROUTES.RANDOM,
  },
  {
    label: "Favourite",
    path: ROUTES.FAVORITES,
  },
  {
    label: "About",
    path: ROUTES.ABOUT,
  },
];




function Navbar() {

  const [hidden, setHidden] =
    useState(false);

  useEffect(() => {
    const checkScanner = () => {
      setHidden(
        document.body.classList.contains(
          "scanner-open"
        )
      );
    };

    checkScanner();

    const observer =
      new MutationObserver(checkScanner);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () =>
      observer.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed top-6 left-1/2 z-50 w-[96%] -translate-x-1/2"
    >
      <div
        className="
          relative
          flex
          h-[84px]
          items-center
          justify-between

          rounded-[28px]

          border
          border-white/10

          bg-black/20

          px-10

          backdrop-blur-2xl

          overflow-hidden

          shadow-[0_15px_60px_rgba(0,0,0,0.35)]
        "
      >
        {/* Top Glow */}

        <div
          className="
            absolute
            left-0
            top-0

            h-px
            w-full

            bg-gradient-to-r
            from-transparent
            via-red-500/60
            to-transparent
          "
        />

        {/* Background Glow */}

        <div
          className="
            absolute
            left-0
            top-1/2

            h-32
            w-32

            -translate-y-1/2

            rounded-full

            bg-red-500/15

            blur-[70px]
          "
        />

        {/* Logo */}

        <Link to={ROUTES.LANDING}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="
              relative
              z-10

              flex
              items-center
              gap-4

              cursor-pointer
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-full

                bg-gradient-to-br
                from-red-500
                via-red-600
                to-red-700

                shadow-[0_0_35px_rgba(239,68,68,0.4)]
              "
            >
              <TbPokeball
                size={26}
                className="text-white"
              />
            </div>

            <div>
              <h1
                className="
                  text-2xl
                  text-white
                  tracking-tight
                  font-bold
                "
              >
                PokéVerse
              </h1>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[4px]
                  text-slate-500
                "
              >
                Interactive 3D Experience
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Navigation */}

        <nav
          className="
            absolute
            left-1/2
            top-1/2

            flex

            -translate-x-1/2
            -translate-y-1/2

            items-center
            gap-12
          "
        >
          {navLinks.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -2 }}
            >
              <Link
                to={item.path}
                className="
                  group
                  relative

                  text-[15px]
                  font-medium

                  text-slate-300

                  transition-colors
                  duration-300

                  hover:text-white
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    left-1/2
                    -bottom-3

                    h-[2px]
                    w-0

                    -translate-x-1/2

                    bg-red-500

                    transition-all
                    duration-300

                    group-hover:w-full
                  "
                />
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;