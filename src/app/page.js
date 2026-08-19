import { Projects } from "@/components";
import HomeHero from "@/components/HomeHero/HomeHero";
import FallingPetals from "@/components/FallingPetals/FallingPetals";

export default function Home() {
  return (
    <main className="home-page flex flex-col">
      <HomeHero />
      <div id="projects" className="home-projects">
        <FallingPetals />
        <Projects />
      </div>
    </main>
  );
}
