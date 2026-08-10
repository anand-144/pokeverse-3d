import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

import FooterPokemon from "./FooterPokemon";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-red-500/10 bg-black">
      {/* Multi Color Glow */}
      <div className="absolute left-20 top-10 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />

      <div className="absolute right-20 top-10 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="absolute left-1/3 bottom-0 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />

      <div className="absolute right-1/3 bottom-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        {/* Pikachu + Logo */}
        ```jsx
        <div className="flex flex-col items-center">
          <FooterPokemon />

          <h2 className="mt-2 bg-gradient-to-r from-red-500 via-yellow-400 to-orange-400 bg-clip-text text-4xl font-black text-transparent">
            PokéVerse 3D
          </h2>

          <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />

            Pokémon Database Online
          </div>
        </div>
        ```

        {/* Navigation */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <Link
            to="/pokedex"
            className="text-slate-400 transition hover:text-red-400"
          >
            Pokédex
          </Link>

          <Link
            to="/types"
            className="text-slate-400 transition hover:text-yellow-400"
          >
            Types
          </Link>

          <Link
            to="/generations"
            className="text-slate-400 transition hover:text-green-400"
          >
            Generations
          </Link>

          <Link
            to="/favorites"
            className="text-slate-400 transition hover:text-pink-400"
          >
            Favorites
          </Link>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="flex items-center justify-center gap-2 text-sm text-slate-500">
            © 2026 PokéVerse 3D • Built with
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            for Pokémon fans
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
