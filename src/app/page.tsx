import { Feature } from "../components/feature";
import { Hero } from "../components/hero";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="flex flex-col gap-24 !pt-0 md:gap-54">
        <Hero />
        <Feature />
      </div>
    </main>
  );
}
