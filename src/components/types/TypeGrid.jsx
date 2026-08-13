import { useEffect, useState } from "react";
import TypeCard from "./TypeCard";

function TypeGrid({
  selectedType,
  onTypeSelect,
}) {
  const [types, setTypes] =
    useState([]);

  useEffect(() => {
    async function fetchTypes() {
      const res = await fetch(
        "https://pokeapi.co/api/v2/type"
      );

      const data =
        await res.json();

      const filtered =
        data.results.filter(
          (type) =>
            ![
              "unknown",
              "shadow",
            ].includes(type.name)
        );

      const detailed =
        await Promise.all(
          filtered.map(
            async (type) => {
              const res =
                await fetch(
                  type.url
                );

              const data =
                await res.json();

              return {
                name: type.name,
                count:
                  data.pokemon
                    .length,
              };
            }
          )
        );

      setTypes(detailed);
    }

    fetchTypes();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
      {types.map((type) => (
        <TypeCard
          key={type.name}
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
      ))}
    </div>
  );
}

export default TypeGrid;