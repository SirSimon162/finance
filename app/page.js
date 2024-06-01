import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Download from "./components/Download";

export default function Home() {
  return (
    <div>
      <Hero />
      <FAQ/>
      <Pricing/>
      <Download/>
    </div>
  );
}
