function MoveStats({
  power,
  accuracy,
  pp,
}) {
  const stats = [
    {
      label: "Power",
      value: power || "--",
    },
    {
      label: "Accuracy",
      value: accuracy || "--",
    },
    {
      label: "PP",
      value: pp || "--",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            {stat.label}
          </p>

          <p className="mt-1 text-lg font-black text-white">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MoveStats;