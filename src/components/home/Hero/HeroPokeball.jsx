import PokeballCanvas from "../../landing/PokeballCanvas";

function HeroPokeball() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-96 w-96 rounded-full bg-red-500/20 blur-3xl" />

      <div className="relative z-10 h-[450px] w-[450px]">
        <PokeballCanvas />
      </div>
    </div>
  );
}

export default HeroPokeball;