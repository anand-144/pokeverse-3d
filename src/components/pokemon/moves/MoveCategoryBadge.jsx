const categoryStyles = {
  physical:
    "border-red-500/30 bg-red-500/10 text-red-300",

  special:
    "border-blue-500/30 bg-blue-500/10 text-blue-300",

  status:
    "border-green-500/30 bg-green-500/10 text-green-300",
};

function MoveCategoryBadge({
  category,
}) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${
        categoryStyles[
          category?.toLowerCase()
        ] ||
        "border-slate-500/30 bg-slate-500/10 text-slate-300"
      }`}
    >
      {category}
    </span>
  );
}

export default MoveCategoryBadge;