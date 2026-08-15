import { Heart } from "lucide-react";

import FooterPokemon from "./FooterPokemon";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030712]">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center">
          {/* Pokemon */}
          <FooterPokemon />

          {/* Logo */}
          <h2 className="mt-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-4xl font-black text-transparent">
            PokéVerse
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Catch • Discover • Compare • Explore
          </p>

          {/* Divider */}
          <div className="my-6 h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Copyright */}
          <p className="flex items-center gap-2 text-center text-sm text-slate-500">
            Built with
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            for Pokémon Trainers
          </p>

          <p className="mt-2 text-xs text-slate-600">
            © 2026 PokéVerse. Pokémon belongs to Nintendo,
            Game Freak & The Pokémon Company.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;