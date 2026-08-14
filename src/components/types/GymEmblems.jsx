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
            key={badge.name}
            className="rounded-2xlborder border-white/10 bg-white/5p-5 text-center"
          >
            <img
              src={badge.image}
              alt={badge.name}
              className=" h-20 w-20 mx-auto mb-3 object-contain"
            />

            <h3 className="font-semibold text-white">
              {badge.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GymEmblems;