import { Cta } from "../components/cta";
import { Feature } from "../components/feature";
import { Hero } from "../components/hero";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="flex flex-col md:gap-16 !pt-0 ">
        <Hero />
        <Feature />
        <Cta />
      </div>
    </main>
  );
}
