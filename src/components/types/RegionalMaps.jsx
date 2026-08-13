import { motion } from "framer-motion";
import { regions } from "../../data/regions";

function RegionalMaps({
  selectedRegion,
  onRegionSelect,
}) {
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-5">
      {regions.map((region) => (
        <motion.button
          key={region.id}
          whileHover={{
            y: -8,
          }}
          onClick={() =>
            onRegionSelect(
              region.id
            )
          }
          className={`
            overflow-hidden
            rounded-3xl
            border
            transition-all
            ${
              selectedRegion ===
              region.id
                ? "border-red-500/50"
                : "border-white/10"
            }
          `}
        >
          <img
            src={region.image}
            alt={region.name}
            className="
              h-48
              w-full
              object-cover
            "
          />

          <div className="p-4 bg-white/[0.03]">
            <h3 className="font-bold text-white">
              {region.name}
            </h3>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

export default RegionalMaps;