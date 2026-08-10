import HeroParticles from "./HeroParticles";
import HeroContent from "./HeroContent";
import HeroPokeball from "./HeroPokeball";

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Floating Type Icons */}
      <HeroParticles />

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[180px]" />

      {/* Left Glow */}
      <div className="absolute top-40 left-20 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />

      {/* Right Glow */}
      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

      {/* Radar Ring 1 */}
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/10" />

      {/* Radar Ring 2 */}
      <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid min-h-screen items-center gap-12 lg:grid-cols-2">
          <HeroContent />

          <div className="flex justify-center lg:justify-end">
            <HeroPokeball />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;