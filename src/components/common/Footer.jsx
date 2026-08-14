import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

import FooterPokemon from "./FooterPokemon";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/10 bg-zinc-950">
      {/* Yellow Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="absolute left-20 bottom-0 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute right-20 top-10 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        {/* Pokemon */}
        <div className="relative flex flex-col items-center">
          {/* Radar Rings */}
          <div className="absolute top-10 h-44 w-44 rounded-full border border-yellow-500/10" />

          <div className="absolute top-0 h-64 w-64 rounded-full border border-yellow-500/5" />

          <FooterPokemon />

          <h2 className="mt-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-5xl font-black text-transparent">
            PokéVerse
          </h2>

          <div className="mt-3 flex items-center gap-2 rounded-full border border-yellow-500/10 bg-yellow-500/5 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.9)]" />

            <span className="text-xs font-medium tracking-[0.2em] text-zinc-400 uppercase">
              Pokédex Online
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/pokemon/:id"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 transition hover:border-yellow-500/20 hover:bg-yellow-500/10 hover:text-yellow-300"
          >
            Pokédex
          </Link>

          <Link
            to="/types"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 transition hover:border-yellow-500/20 hover:bg-yellow-500/10 hover:text-yellow-300"
          >
            Types
          </Link>

          <Link
            to="/generations"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 transition hover:border-yellow-500/20 hover:bg-yellow-500/10 hover:text-yellow-300"
          >
            Generations
          </Link>

          <Link
            to="/favorites"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 transition hover:border-yellow-500/20 hover:bg-yellow-500/10 hover:text-yellow-300"
          >
            Favorites
          </Link>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="flex items-center justify-center gap-2 text-sm text-zinc-500">
            © 2026 PokéVerse • Built with
            <Heart className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            for Pokémon Trainers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
