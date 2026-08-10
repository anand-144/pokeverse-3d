import Navbar from "../components/common/Navbar";
import Hero from "../components/landing/Hero";
import PokeballCanvas from "../components/landing/PokeballCanvas";
import BackgroundParticles from "../components/landing/BackgroundParticles";

const REGIONS = [
  { name: "Kanto", count: "151 Pokémon" },
  { name: "Johto", count: "100 Pokémon" },
  { name: "Hoenn", count: "135 Pokémon" },
  { name: "Sinnoh", count: "107 Pokémon" },
];

function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white over">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#050816]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Main Glow */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[220px]" />

      {/* Secondary Glow */}
      <div className="absolute right-20 top-32 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[180px]" />

      <BackgroundParticles />


      {/* Hero Section */}
      <section className="relative z-10 flex h-screen items-center justify-between px-24">
        <div className="w-[48%] pl-24">
          <Hero />
        </div>

        <div className="relative h-screen w-[45%]">
          <PokeballCanvas />
        </div>
      </section>
    </main>
  );
}

export default Landing;