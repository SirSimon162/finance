import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Download from "./components/Download";
import Testimonials from "./components/Testimonial";
import Features from "./components/Features";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features/>
      <Testimonials/>
      <FAQ/>
      <Pricing/>
      <Download/>
    </div>
  );
}
