import { typeColors } from "../../../utils/typeColors";

function SimilarTypeBadge({
  type,
}) {
  return (
    <div
      className="rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.15em]"
      style={{
        borderColor: `${typeColors[type]}50`,
        backgroundColor: `${typeColors[type]}20`,
        color: typeColors[type],
      }}
    >
      {type}
    </div>
  );
}

export default SimilarTypeBadge;