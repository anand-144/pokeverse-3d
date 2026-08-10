import HeroSection from "../components/home/Hero/HeroSection";
import FeaturedSection from "../components/home/Featured/FeaturedSection";
import GenerationSection from "../components/home/Generations/GenerationSection";
import ExplorerSection from "../components/home/Explorer/ExplorerSection";

function Home() {
  return (
    <main className="relative overflow-hidden bg-zinc-950">
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]" />

      {/* Left Glow */}
      <div className="absolute top-[40%] left-0 h-[400px] w-[400px] rounded-full bg-red-500/5 blur-[120px]" />

      {/* Right Glow */}
      <div className="absolute top-[70%] right-0 h-[400px] w-[400px] rounded-full bg-red-500/5 blur-[120px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <FeaturedSection />
        <GenerationSection />
        <ExplorerSection />
      </div>
    </main>
  );
}

export default Home;