import AbilityHeader from "./abilities/AbilityHeader";
import AbilityCard from "./abilities/AbilityCard";
import AbilityScanner from "./abilities/AbilityScanner";

function PokemonAbilities({ pokemon }) {
  const primaryAbility =
    pokemon.abilities.find(
      (ability) => !ability.is_hidden
    );

  const hiddenAbility =
    pokemon.abilities.find(
      (ability) => ability.is_hidden
    );

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
      {/* HUD Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="relative z-10">
        <AbilityHeader />

        <div className="mt-8 grid gap-6">
          <AbilityCard
            title="Primary Ability"
            type="STANDARD"
            ability={primaryAbility}
            color="cyan"
          />

          {hiddenAbility && (
            <AbilityCard
              title="Hidden Ability"
              type="RARE TRAIT"
              ability={hiddenAbility}
              color="yellow"
            />
          )}

          <AbilityScanner pokemon={pokemon} />
        </div>
      </div>

      {/* Corners */}
      <div className="absolute left-6 top-6 h-8 w-8 border-l-2 border-t-2 border-cyan-400/50" />

      <div className="absolute right-6 top-6 h-8 w-8 border-r-2 border-t-2 border-cyan-400/50" />

      <div className="absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-cyan-400/50" />

      <div className="absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-cyan-400/50" />
    </section>
  );
}

export default PokemonAbilities;