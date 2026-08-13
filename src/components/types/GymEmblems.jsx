import { gymBadges } from "../../data/gymBadges";

function GymEmblems({ region }) {
  const badges =
    gymBadges[region] || [];

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
      <h2 className="text-3xl font-black text-white mb-8">
        Gym Badges
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge) => (
          <div
            key={badge}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
              text-center
            "
          >
            <div className="text-4xl mb-3">
              🏅
            </div>

            <h3 className="font-semibold text-white">
              {badge}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GymEmblems;