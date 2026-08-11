import { typeColors } from "../../../utils/typeColors";

function MoveTypeBadge({
  type,
}) {
  return (
    <span
      className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
      style={{
        backgroundColor:
          typeColors[type] ||
          "#64748b",
      }}
    >
      {type}
    </span>
  );
}

export default MoveTypeBadge;