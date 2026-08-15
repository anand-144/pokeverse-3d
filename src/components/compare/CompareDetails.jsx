import {
  Ruler,
  Weight,
  Sparkles,
  Shield,
  Trophy,
} from "lucide-react";

function CompareDetails({
  leftData,
  rightData,
}) {
  if (!leftData || !rightData)
    return null;

  const details = [
    {
      label: "Height",
      icon: Ruler,
      left: leftData.height,
      right: rightData.height,
      unit: " m",
    },
    {
      label: "Weight",
      icon: Weight,
      left: leftData.weight,
      right: rightData.weight,
      unit: " kg",
    },
    {
      label: "Base Experience",
      icon: Sparkles,
      left:
        leftData.base_experience,
      right:
        rightData.base_experience,
      unit: "",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 mt-12">
      <div
        className="
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
        "
      >
        {/* Header */}
        <div className="text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              text-slate-300
            "
          >
            Pokémon Profile
          </span>

          <h2 className="mt-5 text-4xl font-black text-white">
            Physical Comparison
          </h2>

          <p className="mt-3 text-slate-400">
            Compare physical attributes,
            experience, abilities and
            Pokémon characteristics.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {details.map((item) => {
            const Icon =
              item.icon;

            const leftWinner =
              item.left >
              item.right;

            const rightWinner =
              item.right >
              item.left;

            return (
              <div
                key={item.label}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/5
                    "
                  >
                    <Icon
                      size={22}
                      className="text-yellow-400"
                    />
                  </div>

                  <h3 className="font-bold text-white">
                    {item.label}
                  </h3>
                </div>

                <div className="mt-6 space-y-4">
                  <div
                    className={`
                      rounded-2xl
                      border
                      p-4
                      ${
                        leftWinner
                          ? "border-green-500/20 bg-green-500/5"
                          : "border-white/10 bg-white/5"
                      }
                    `}
                  >
                    <p className="text-xs text-slate-400 capitalize">
                      {
                        leftData.name
                      }
                    </p>

                    <p className="mt-2 text-2xl font-black text-white">
                      {item.left}
                      {item.unit}
                    </p>
                  </div>

                  <div
                    className={`
                      rounded-2xl
                      border
                      p-4
                      ${
                        rightWinner
                          ? "border-green-500/20 bg-green-500/5"
                          : "border-white/10 bg-white/5"
                      }
                    `}
                  >
                    <p className="text-xs text-slate-400 capitalize">
                      {
                        rightData.name
                      }
                    </p>

                    <p className="mt-2 text-2xl font-black text-white">
                      {item.right}
                      {item.unit}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Abilities */}
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
            "
          >
            <div className="flex items-center gap-3">
              <Shield
                size={20}
                className="text-blue-400"
              />

              <h3 className="font-bold text-white">
                {leftData.name}
                {" "}Abilities
              </h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {leftData.abilities.map(
                (ability) => (
                  <span
                    key={
                      ability.ability
                        .name
                    }
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                      text-sm
                      capitalize
                      text-white
                    "
                  >
                    {
                      ability
                        .ability
                        .name
                    }
                  </span>
                )
              )}
            </div>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
            "
          >
            <div className="flex items-center gap-3">
              <Shield
                size={20}
                className="text-red-400"
              />

              <h3 className="font-bold text-white">
                {rightData.name}
                {" "}Abilities
              </h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {rightData.abilities.map(
                (ability) => (
                  <span
                    key={
                      ability.ability
                        .name
                    }
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                      text-sm
                      capitalize
                      text-white
                    "
                  >
                    {
                      ability
                        .ability
                        .name
                    }
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Types */}
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
            "
          >
            <h3 className="font-bold text-white">
              {leftData.name}
              {" "}Types
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {leftData.types.map(
                (type) => (
                  <span
                    key={
                      type.type.name
                    }
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-blue-500/10
                      px-4
                      py-2
                      text-sm
                      uppercase
                      text-blue-300
                    "
                  >
                    {
                      type.type.name
                    }
                  </span>
                )
              )}
            </div>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
            "
          >
            <h3 className="font-bold text-white">
              {rightData.name}
              {" "}Types
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {rightData.types.map(
                (type) => (
                  <span
                    key={
                      type.type.name
                    }
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-red-500/10
                      px-4
                      py-2
                      text-sm
                      uppercase
                      text-red-300
                    "
                  >
                    {
                      type.type.name
                    }
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div
          className="
            mt-8
            rounded-3xl
            border
            border-yellow-500/20
            bg-yellow-500/10
            p-6
            text-center
          "
        >
          <Trophy
            size={28}
            className="mx-auto text-yellow-400"
          />

          <h3 className="mt-4 text-2xl font-black text-white">
            Complete Battle Profile
          </h3>

          <p className="mt-2 text-slate-300">
            Physical attributes,
            abilities and types can
            greatly influence battle
            performance beyond raw stats.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CompareDetails;