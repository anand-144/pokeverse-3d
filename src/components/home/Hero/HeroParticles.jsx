import { motion } from "framer-motion";

import bug from "../../../assets/types/bug.svg";
import dark from "../../../assets/types/dark.svg";
import dragon from "../../../assets/types/dragon.svg";
import electric from "../../../assets/types/electric.svg";
import fairy from "../../../assets/types/fairy.svg";
import fighting from "../../../assets/types/fighting.svg";
import fire from "../../../assets/types/fire.svg";
import flying from "../../../assets/types/flying.svg";
import ghost from "../../../assets/types/ghost.svg";
import grass from "../../../assets/types/grass.svg";
import ground from "../../../assets/types/ground.svg";
import ice from "../../../assets/types/ice.svg";
import normal from "../../../assets/types/normal.svg";
import poison from "../../../assets/types/poison.svg";
import psychic from "../../../assets/types/psychic.svg";
import rock from "../../../assets/types/rock.svg";
import steel from "../../../assets/types/steel.svg";
import water from "../../../assets/types/water.svg";

const particles = [
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
];


function FloatingType({
  left,
  delay,
  duration,
  size,
  rotation,
  icon,
}) {
  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{
        left: `${left}%`,
        bottom: "-80px",
      }}
      animate={{
        y: [-20, -1400],
        rotate: [0, rotation],
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <img
        src={icon}
        alt=""
        className="object-contain opacity-80"
        style={{
          width: size,
          height: size,
          filter: "drop-shadow(0 0 10px rgba(255,255,255,0.25))",
        }}
      />
    </motion.div>
  );
}

function HeroParticles() {
  const items = Array.from({ length: 35 }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 10,
    size: 18 + Math.random() * 24,
    rotation: Math.random() > 0.5 ? 360 : -360,
    icon:
      particles[Math.floor(Math.random() * particles.length)],
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((item) => (
        <FloatingType
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}

export default HeroParticles;