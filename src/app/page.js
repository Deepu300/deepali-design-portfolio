import { HeroHeader, Projects } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <HeroHeader />
      <Projects />
    </main>
  );
}
