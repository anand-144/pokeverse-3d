import { motion } from "framer-motion";
import { regions } from "../../data/regions";

function RegionalMaps({
  selectedRegion,
  onRegionSelect,
  onMapOpen,
}) {
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-5">
      {regions.map((region) => (
        <motion.button
          key={region.id}
          onClick={() =>
            onRegionSelect(region.id)
          }
          className={` overflow-hidden rounded-3xl border transition-all  ${selectedRegion === region.id  ? "border-red-500/50" : "border-white/10" } `}
        >
          <motion.img
            layoutId={region.id}
            src={region.image}
            alt={region.name}
            onClick={(e) => {
              e.stopPropagation();
              onMapOpen(region);
            }}
            className=" h-48 w-full object-cover cursor-zoom-in  "
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