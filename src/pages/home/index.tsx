import HomeDetailSection from "./sections/details";
import Consultancy from "./sections/consultancy";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <main className="sm:px-5 px-2">
      <Hero />

      <HomeDetailSection />

      <Consultancy />
    </main>
  );
};

export default Home;
