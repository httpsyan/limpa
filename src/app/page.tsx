import { Header } from "../components/header";
import { Hero } from "../components/hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-36 mb-32">
      <Header />
      <Hero />
    </div>
  );
}
