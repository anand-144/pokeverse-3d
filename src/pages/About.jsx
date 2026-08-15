import { motion } from "framer-motion";
import {
  Heart,
  Database,
  Globe,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Database,
    title: "PokéAPI Powered",
    description:
      "Real-time Pokémon data sourced directly from the PokéAPI.",
  },
  {
    icon: Zap,
    title: "Fast & Modern",
    description:
      "Built with React, Vite, Tailwind CSS, and Framer Motion.",
  },
  {
    icon: Globe,
    title: "Explore Regions",
    description:
      "Discover Pokémon across every generation and region.",
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description:
      "Create your own collection of favorite Pokémon.",
  },
];

function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]" />

      {/* Left Glow */}
      <div className="absolute left-0 top-[40%] h-[400px] w-[400px] rounded-full bg-red-500/5 blur-[120px]" />

      {/* Right Glow */}
      <div className="absolute right-0 top-[70%] h-[400px] w-[400px] rounded-full bg-red-500/5 blur-[120px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300">
            About Project
          </span>

          <h1 className="mt-6 bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Pokémon Explorer
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            A modern Pokémon encyclopedia built for trainers,
            collectors, and fans. Explore Pokémon, discover
            regions, compare stats, save favorites, and dive
            deep into the Pokémon universe.
          </p>
        </motion.div>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl lg:p-12"
        >
          <h2 className="text-3xl font-black text-white">
            About This Project
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Pokémon Explorer is a fan-made project designed to
            provide an immersive Pokémon experience. Browse
            Pokémon from every generation, explore types and
            abilities, compare Pokémon stats, and build your
            personal collection through the favorites system.
          </p>

          <p className="mt-5 leading-8 text-zinc-400">
            The project focuses on beautiful UI design,
            smooth animations, and fast performance while
            delivering accurate Pokémon information powered
            by the PokéAPI.
          </p>
        </motion.div>

        {/* Features */}
        <section className="mt-20">
          <h2 className="mb-10 text-center text-4xl font-black text-white">
            Features
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -8 }}
                  className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
                    <Icon
                      size={26}
                      className="text-red-400"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-zinc-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-20">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl lg:p-12">
            <h2 className="text-3xl font-black text-white">
              Built With
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                "React",
                "Vite",
                "Tailwind CSS",
                "Framer Motion",
                "React Router",
                "PokéAPI",
                "React-three"
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-zinc-500">
            Made with ❤️ for Pokémon fans around the world.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;