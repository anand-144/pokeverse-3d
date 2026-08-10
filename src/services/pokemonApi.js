const BASE_URL = "https://pokeapi.co/api/v2";

export async function getTypes() {
  const res = await fetch(`${BASE_URL}/type`);

  if (!res.ok) {
    throw new Error("Failed to fetch types");
  }

  return res.json();
}

export async function getGenerations() {
  const res = await fetch(`${BASE_URL}/generation`);

  if (!res.ok) {
    throw new Error("Failed to fetch generations");
  }

  return res.json();
}

export async function getPokemonCount() {
  const res = await fetch(
    `${BASE_URL}/pokemon?limit=1`
  );

  if (!res.ok) {
    throw new Error(
      "Failed to fetch pokemon count"
    );
  }

  return res.json();
}