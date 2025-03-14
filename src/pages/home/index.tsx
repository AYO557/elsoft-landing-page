import HomeDetailSection from "./sections/Details";
import Consultancy from "./sections/Consultancy";
import Hero from "./sections/Hero";
import Appointment from "./sections/AppointMent";

const Home = () => {
  return (
    <main className="sm:px-5 px-2">
      <Hero />

      <HomeDetailSection />

      <Consultancy />

      <Appointment />
    </main>
  );
};

export default Home;
