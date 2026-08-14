import { useState } from "react";
import { motion } from "framer-motion"

import TypesHero from "../components/types/TypesHero";
import TypeStats from "../components/types/TypeStats";
import TypeGrid from "../components/types/TypeGrid";
import TypeRelations from "../components/types/TypeRelations";
import TypePokemonList from "../components/types/TypePokemonList";
import RegionalMaps from "../components/types/RegionalMaps";
import GymEmblems from "../components/types/GymEmblems";

import BackgroundParticles from "../components/landing/BackgroundParticles";

function Types() {
  const [selectedType, setSelectedType] = useState("fire");
  const [selectedRegion, setSelectedRegion] = useState("kanto");
  const [selectedMap, setSelectedMap] = useState(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712]">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/15 blur-[180px] rounded-full" />

      <div className="absolute top-[15%] right-0 w-[500px] h-[500px] bg-blue-500/15 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 left-[20%] w-[450px] h-[450px] bg-yellow-500/10 blur-[180px] rounded-full" />

      <div className="absolute top-[55%] right-[15%] w-[400px] h-[400px] bg-purple-500/10 blur-[180px] rounded-full" />

      <div className="absolute top-[35%] left-[10%] w-[350px] h-[350px] bg-green-500/10 blur-[180px] rounded-full" />

      {/* Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[1200px] h-[1200px] border border-white/5 rounded-full" />

        <div className="absolute w-[900px] h-[900px] border border-white/5 rounded-full" />

        <div className="absolute w-[650px] h-[650px] border border-white/5 rounded-full" />

        <div className="absolute w-[450px] h-[450px] border border-white/5 rounded-full" />
      </div>

      {/* Particle Layer */}
      <BackgroundParticles />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero */}
        <TypesHero />

        {/* Stats */}
        <section className="max-w-7xl mx-auto px-4 md:px-6">
          <TypeStats />
        </section>

        {/* Types Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 mt-12">
          <TypeGrid
            selectedType={selectedType}
            onTypeSelect={setSelectedType}
          />
        </section>

        {/* Type Details */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 mt-16">
          <div className=" relative mb-10">
            <h2 className="text-5xl font-black text-white capitalize">
              {selectedType} Type
            </h2>

            <p className="mt-4 text-slate-400 max-w-2xl">
              Explore strengths, weaknesses, resistances,
              immunities and Pokémon belonging to the
              {selectedType} type.
            </p>
          </div>

          <div className="grid xl:grid-cols-[380px_1fr] gap-8">
            <TypeRelations type={selectedType} />

            <TypePokemonList type={selectedType} />
          </div>
        </section>

        {/* Regional Maps */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 mt-24">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-white">
              Pokémon Regions
            </h2>

            <p className="mt-2 text-slate-400">
              Explore every Pokémon region and discover
              its gym badges.
            </p>
          </div>

          <RegionalMaps
            selectedRegion={selectedRegion}
            onRegionSelect={setSelectedRegion}
            onMapOpen={setSelectedMap}
          />
        </section>

        {/* Gym Emblems */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 mt-16 pb-24">
          <GymEmblems region={selectedRegion} />
        </section>
      </div>
      {selectedMap && (
        <div
          onClick={() => setSelectedMap(null)}
          className="fixed inset-0 z-50 bg-black/80backdrop-blur-sm flex items-center justify-center p-4 "
        >
          <motion.img
            layoutId={selectedMap.id}
            src={selectedMap.image}
            alt={selectedMap.name}
            className=" max-w-6xl w-full max-h-[90vh] object-contain rounded-2xl"
          />
        </div>
      )}
    </main>
  );
}

export default Types;