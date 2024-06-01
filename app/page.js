import Hero from "./components/Hero";
import Features from "./components/Features";
import Advantages from "./components/Advantages";
import Testimonials from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Download from "./components/Download";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features/>
      <Advantages/>
      <Testimonials/>
      <FAQ/>
      <Pricing/>
      <Download/>
    </div>
  );
}
