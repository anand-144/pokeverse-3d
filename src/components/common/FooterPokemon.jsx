import PokemonCanvas from "../pokemonmodel/PokemonCanvas";

function FooterPokemon() {
  return (
    <div className="h-32 w-32">
      <PokemonCanvas
        model="/models/pokemon/pikachu.glb"
        animation="Dance"
        scale={1.8}
        position={[0, -1.6, 0]}
      />
    </div>
  );
}

export default FooterPokemon;