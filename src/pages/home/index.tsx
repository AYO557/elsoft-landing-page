import hero_image from "@/assets/images/generated_hero.jpg";
import Button from "../../components/basic/button";
import HomeDetailSection from "./details";
import Consultancy from "./consultancy";

const Home = () => {
  return (
    <main className="px-5">
      <article
        className="h-[85vh] w-full rounded-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero_image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full flex flex-col justify-center items-center sm:gap-5 gap-3 text-white">
          <h1 className="sm:text-7xl text-2xl font-bold">Welcome to ElSoft</h1>
          <p className="sm:text-xl w-[60%] text-center">
            We are a team of experienced software developers who are dedicated
            to providing high-quality software solutions to our clients.
          </p>

          <Button label="Contact Us" />
        </div>
      </article>
      <HomeDetailSection/>
      <Consultancy/>
      
    </main>
  );
};

export default Home;
