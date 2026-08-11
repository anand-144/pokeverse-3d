import { Link } from "react-router-dom";

function PokemonEvolution({
  evolutionChain,
}) {
  if (!evolutionChain) return null;

  const evolutions = [];

  let current =
    evolutionChain.chain;

  while (current) {
    evolutions.push({
      name:
        current.species.name,
      url: current.species.url,
    });

    current =
      current.evolves_to?.[0];
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Evolution Chain
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {evolutions.map(
          (pokemon, index) => {
            const id =
              pokemon.url
                .split("/")
                .filter(Boolean)
                .pop();

            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

            return (
              <div
                key={pokemon.name}
                className="flex items-center gap-6"
              >
                <Link
                  to={`/pokemon/${id}`}
                  className="group"
                >
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/5">
                    <img
                      src={image}
                      alt={
                        pokemon.name
                      }
                      className="mx-auto h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-110"
                    />

                    <h3 className="mt-4 text-center text-lg font-bold capitalize text-white">
                      {pokemon.name}
                    </h3>
                  </div>
                </Link>

                {index !==
                  evolutions.length -
                    1 && (
                  <span className="text-4xl text-slate-500">
                    →
                  </span>
                )}
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default PokemonEvolution;