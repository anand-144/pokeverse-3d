import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import TypesHero from "../components/types/TypesHero";
import TypeStats from "../components/types/TypeStats";
import TypeGrid from "../components/types/TypeGrid";
import TypeRelations from "../components/types/TypeRelations";
import TypePokemonList from "../components/types/TypePokemonList";
import RegionalMaps from "../components/types/RegionalMaps";
import GymEmblems from "../components/types/GymEmblems";

import BackgroundParticles from "../components/landing/BackgroundParticles";

const typeGlow = {
  fire: "bg-orange-500/20",
  water: "bg-blue-500/20",
  grass: "bg-green-500/20",
  electric: "bg-yellow-500/20",
  psychic: "bg-pink-500/20",
  ghost: "bg-purple-500/20",
  dragon: "bg-indigo-500/20",
  dark: "bg-slate-500/20",
};

function TypesPage() {
  const [selectedType, setSelectedType] = useState("fire");

  const [selectedRegion, setSelectedRegion] =
    useState("kanto");

  const [selectedMap, setSelectedMap] =
    useState(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712]">
      {/* Dynamic Type Aura */}
      <div
        className={`absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[220px] transition-all duration-700 ${
          typeGlow[selectedType] ||
          "bg-orange-500/20"
        }`}
      />

      {/* Static Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full" />

      {/* Orbit Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[1400px] h-[1400px] border border-white/5 rounded-full" />

        <div className="absolute w-[1000px] h-[1000px] border border-white/5 rounded-full" />

        <div className="absolute w-[700px] h-[700px] border border-white/5 rounded-full" />
      </div>

      <BackgroundParticles />

      <div className="relative z-10">
        {/* Hero */}
        <TypesHero selectedType={selectedType} />

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1600px] mx-auto px-6 mt-20"
        >
          <TypeStats />
        </motion.section>

        {/* Types */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1600px] mx-auto px-6 mt-20"
        >
          <TypeGrid
            selectedType={selectedType}
            onTypeSelect={setSelectedType}
          />
        </motion.section>

        {/* Details Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1600px] mx-auto px-6 mt-24"
        >
          <div className="mb-12">
            <span className="inline-flex px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300">
              Type Analysis
            </span>

            <h2 className="mt-4 text-5xl md:text-6xl font-black capitalize bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
              {selectedType} Type
            </h2>

            <p className="mt-5 text-slate-400 max-w-3xl text-lg">
              Discover battle advantages,
              weaknesses, resistances,
              immunities and every Pokémon
              connected to the {selectedType}
              type.
            </p>
          </div>

          <div className="grid xl:grid-cols-[420px_1fr] gap-8">
            <TypeRelations type={selectedType} />

            <TypePokemonList type={selectedType} />
          </div>
        </motion.section>

        {/* Regions */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1600px] mx-auto px-6 mt-28"
        >
          <div className="mb-10">
            <span className="inline-flex px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300">
              World Map
            </span>

            <h2 className="mt-4 text-5xl font-black text-white">
              Pokémon Regions
            </h2>

            <p className="mt-4 text-slate-400 max-w-2xl">
              Travel through every Pokémon
              region and uncover gym badges,
              league paths and iconic
              locations.
            </p>
          </div>

          <RegionalMaps
            selectedRegion={selectedRegion}
            onRegionSelect={setSelectedRegion}
            onMapOpen={setSelectedMap}
          />
        </motion.section>

        {/* Gym Badges */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1600px] mx-auto px-6 mt-20 pb-28"
        >
          <GymEmblems region={selectedRegion} />
        </motion.section>
      </div>

      {/* Map Modal */}
      <AnimatePresence>
        {selectedMap && (
          <motion.div
            onClick={() =>
              setSelectedMap(null)
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
          >
            <motion.img
              layoutId={selectedMap.id}
              src={selectedMap.image}
              alt={selectedMap.name}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="w-full max-w-7xl max-h-[90vh] object-contain rounded-3xl border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default TypesPage;