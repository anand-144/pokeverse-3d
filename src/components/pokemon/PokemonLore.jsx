function PokemonLore({ species }) {
  const flavorText =
    species?.flavor_text_entries?.find(
      (entry) => entry.language.name === "en"
    );

  if (!flavorText) return null;

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h2 className="mb-6 text-3xl font-bold text-white">
        Pokédex Entry
      </h2>

      <div className="rounded-2xl bg-black/20 p-6">
        <p className="text-lg leading-relaxed text-slate-300">
          {flavorText.flavor_text
            .replace(/\f/g, " ")
            .replace(/\n/g, " ")}
        </p>
      </div>
    </section>
  );
}

export default PokemonLore;