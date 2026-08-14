import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import TypeCard from "./TypeCard";

function TypeGrid({
  selectedType,
  onTypeSelect,
}) {
  const [types, setTypes] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    async function fetchTypes() {
      try {
        setLoading(true);

        const response =
          await fetch(
            "https://pokeapi.co/api/v2/type"
          );

        const data =
          await response.json();

        const validTypes =
          data.results.filter(
            (type) =>
              ![
                "unknown",
                "shadow",
              ].includes(type.name)
          );

        const detailed =
          await Promise.all(
            validTypes.map(
              async (type) => {
                const typeResponse =
                  await fetch(
                    type.url
                  );

                const typeData =
                  await typeResponse.json();

                return {
                  name:
                    type.name,
                  count:
                    typeData
                      .pokemon
                      .length,
                };
              }
            )
          );

        setTypes(detailed);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchTypes();
  }, []);

  const filteredTypes =
    useMemo(() => {
      return types.filter(
        (type) =>
          type.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [types, search]);

  return (
    <section>
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Type Explorer
          </h2>

          <p className="mt-2 text-slate-400">
            Browse every Pokémon
            type and discover
            their battle strengths.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full xl:w-[320px]">
          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-500
            "
          />

          <input
            type="text"
            placeholder="Search type..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="
              w-full
              h-12
              pl-11
              pr-4
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              text-white
              placeholder:text-slate-500
              outline-none
            "
          />
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8">
        <span
          className="
            inline-flex
            px-4 py-2
            rounded-full
            border border-white/10
            bg-white/[0.03]
            text-sm text-slate-300
          "
        >
          {filteredTypes.length} Types
          Available
        </span>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {[...Array(18)].map(
            (_, index) => (
              <div
                key={index}
                className="
                  h-32
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.03]
                  animate-pulse
                "
              />
            )
          )}
        </div>
      ) : (
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5"
        >
          {filteredTypes.map(
            (type, index) => (
              <motion.div
                key={type.name}
                layout
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay:
                    index * 0.03,
                }}
              >
                <TypeCard
                  type={type.name}
                  count={type.count}
                  selected={
                    selectedType ===
                    type.name
                  }
                  onClick={
                    onTypeSelect
                  }
                />
              </motion.div>
            )
          )}
        </motion.div>
      )}
    </section>
  );
}

export default TypeGrid;