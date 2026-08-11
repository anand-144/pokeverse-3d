import { motion } from "framer-motion";

function StatsRadar({ pokemon }) {
  const stats = pokemon.stats.map(
    (stat) => stat.base_stat
  );

  const labels = [
    "HP",
    "ATK",
    "DEF",
    "SPA",
    "SPD",
    "SPE",
  ];

  const size = 280;
  const center = size / 2;
  const radius = 95;

  const getPoint = (
    value,
    index
  ) => {
    const angle =
      (Math.PI * 2 * index) / 6 -
      Math.PI / 2;

    const statRadius =
      (value / 255) * radius;

    return {
      x:
        center +
        Math.cos(angle) *
          statRadius,
      y:
        center +
        Math.sin(angle) *
          statRadius,
    };
  };

  const points = stats
    .map((value, index) => {
      const point = getPoint(
        value,
        index
      );

      return `${point.x},${point.y}`;
    })
    .join(" ");

  return (
    <div className="relative flex flex-col items-center justify-center rounded-[32px] border border-white/10 bg-white/[0.02] p-8">
      {/* Title */}
      <div className="mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-cyan-400">
          Radar Analysis
        </p>

        <h3 className="mt-2 text-2xl font-black text-white">
          Combat Profile
        </h3>
      </div>

      {/* Radar */}
      <div className="relative">
        {/* Rings */}
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

        <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

        {/* Scanner Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[80px]"
        />

        <svg
          width={size}
          height={size}
          className="relative z-10"
        >
          {/* Grid Hexagons */}
          {[1, 0.75, 0.5, 0.25].map(
            (scale) => {
              const hexPoints = Array.from(
                { length: 6 },
                (_, i) => {
                  const angle =
                    (Math.PI * 2 * i) /
                      6 -
                    Math.PI / 2;

                  return `${
                    center +
                    Math.cos(
                      angle
                    ) *
                      radius *
                      scale
                  },${
                    center +
                    Math.sin(
                      angle
                    ) *
                      radius *
                      scale
                  }`;
                }
              ).join(" ");

              return (
                <polygon
                  key={scale}
                  points={
                    hexPoints
                  }
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
              );
            }
          )}

          {/* Axis Lines */}
          {Array.from(
            { length: 6 },
            (_, i) => {
              const angle =
                (Math.PI * 2 * i) /
                  6 -
                Math.PI / 2;

              return (
                <line
                  key={i}
                  x1={center}
                  y1={center}
                  x2={
                    center +
                    Math.cos(
                      angle
                    ) *
                      radius
                  }
                  y2={
                    center +
                    Math.sin(
                      angle
                    ) *
                      radius
                  }
                  stroke="rgba(255,255,255,0.08)"
                />
              );
            }
          )}

          {/* Data Polygon */}
          <motion.polygon
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            points={points}
            fill="rgba(34,211,238,0.25)"
            stroke="#22d3ee"
            strokeWidth="3"
          />

          {/* Data Points */}
          {stats.map(
            (value, index) => {
              const point =
                getPoint(
                  value,
                  index
                );

              return (
                <circle
                  key={index}
                  cx={point.x}
                  cy={point.y}
                  r="5"
                  fill="#22d3ee"
                />
              );
            }
          )}
        </svg>

        {/* Labels */}
        {labels.map(
          (label, index) => {
            const angle =
              (Math.PI * 2 * index) /
                6 -
              Math.PI / 2;

            const labelRadius =
              145;

            const x =
              center +
              Math.cos(angle) *
                labelRadius;

            const y =
              center +
              Math.sin(angle) *
                labelRadius;

            return (
              <div
                key={label}
                className="absolute text-xs font-bold tracking-wider text-slate-300"
                style={{
                  left: x,
                  top: y,
                  transform:
                    "translate(-50%, -50%)",
                }}
              >
                {label}
              </div>
            );
          }
        )}
      </div>

      {/* Scanner Footer */}
      <div className="mt-8 flex gap-6 text-xs uppercase tracking-[0.3em] text-slate-500">
        <span>Scanning</span>
        <span>Analyzing</span>
        <span>Verified</span>
      </div>
    </div>
  );
}

export default StatsRadar;