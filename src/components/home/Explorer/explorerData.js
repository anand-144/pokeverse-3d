import pokedex from "../../../assets/explore/pokedex.svg";
import types from "../../../assets/explore/dark.svg";
import random from "../../../assets/explore/random.svg";
import heart from "../../../assets/explore/heart.svg";


const explorerData = [
  {
    id: 1,
    title: "Pokédex",
    description:
      "Browse every Pokémon from every generation.",
    icon: pokedex,
    path: "/pokedex",
    color: "from-red-500 to-orange-500",
  },

  {
    id: 2,
    title: "Types",
    description:
      "Learn strengths, weaknesses and matchups.",
    icon: types,
    path: "/types",
    color: "from-yellow-500 to-amber-500",
  },

  {
    id: 3,
    title: "Random",
    description:
      "Generate a random Pokémon adventure.",
    icon: random,
    path: "/random",
    color: "from-green-500 to-emerald-500",
  },

  {
    id: 4,
    title: "Favorites",
    description:
      "Access your saved Pokémon collection.",
    icon: heart,
    path: "/favorites",
    color: "from-pink-500 to-rose-500",
  },
];

export default explorerData;
