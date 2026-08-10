import { TbPokeball } from "react-icons/tb";

import generationData from "./generationData";

function GenerationTimeline() {
  return (
    <div className="mb-20 hidden items-center justify-center lg:flex">
      {generationData.map((generation, index) => (
        <div
          key={generation.id}
          className="flex items-center"
        >
          <div className="flex flex-col items-center">
            <div
              className={`
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                ${generation.color}
                shadow-lg
              `}
            >
              <TbPokeball className="size-6 text-white" />
            </div>

            <span className="mt-3 text-sm font-semibold text-zinc-300">
              {generation.region}
            </span>
          </div>

          {index !== generationData.length - 1 && (
            <div className="mx-4 h-[2px] w-28 bg-gradient-to-r from-red-500/30 to-white/10" />
          )}
        </div>
      ))}
    </div>
  );
}

export default GenerationTimeline;