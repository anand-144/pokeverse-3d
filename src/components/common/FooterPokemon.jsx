import PokemonCanvas from "../pokemon/PokemonCanvas";

function FooterPokemon() {
  return (
    <div className="h-48 w-48">
      <PokemonCanvas
        model="/models/pokemon/pikachu.glb"
        animation="Dance"
        scale={2}
        position={[0, -1.8, 0]}
      />
    </div>
  );
}

export default FooterPokemon;