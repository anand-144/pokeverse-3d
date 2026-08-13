import PokeballScene from "./PokeballScene";

function RandomAnimation({
  loading,
  onGenerate,
}) {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        min-h-[500px]
        overflow-hidden
        relative
      "
    >
      <div className="absolute top-6 left-6">
        <h3 className="text-2xl font-black text-white">
          Random Generator
        </h3>

        <p className="mt-2 text-slate-400">
          Click the Poké Ball
        </p>
      </div>

      <PokeballScene
        loading={loading}
        onGenerate={onGenerate}
      />
    </div>
  );
}

export default RandomAnimation;