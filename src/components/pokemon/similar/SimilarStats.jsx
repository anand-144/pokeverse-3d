function SimilarStats({
  stats,
}) {
  const hp =
    stats.find(
      (stat) =>
        stat.stat.name === "hp"
    )?.base_stat || 0;

  const attack =
    stats.find(
      (stat) =>
        stat.stat.name ===
        "attack"
    )?.base_stat || 0;

  const defense =
    stats.find(
      (stat) =>
        stat.stat.name ===
        "defense"
    )?.base_stat || 0;

  const speed =
    stats.find(
      (stat) =>
        stat.stat.name ===
        "speed"
    )?.base_stat || 0;

  const bst = stats.reduce(
    (total, stat) =>
      total + stat.base_stat,
    0
  );

  const data = [
    {
      label: "HP",
      value: hp,
    },
    {
      label: "ATK",
      value: attack,
    },
    {
      label: "DEF",
      value: defense,
    },
    {
      label: "SPD",
      value: speed,
    },
    {
      label: "BST",
      value: bst,
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-2">
      {data.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-center"
        >
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
            {item.label}
          </p>

          <p className="mt-1 text-sm font-black text-white">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SimilarStats;