let pokemonModels = null;

export async function getPokemonModels() {
  if (pokemonModels) {
    return pokemonModels;
  }

  const res = await fetch(
    "https://pokemon-3d-api.onrender.com/v1/pokemon"
  );

  const data = await res.json();

  pokemonModels =
    data.pokemon || data;

  return pokemonModels;
}