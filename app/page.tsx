import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSellers from "../components/BestSellers";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <BestSellers />
      <WhyChoose />
    </>
  );
}