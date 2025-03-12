import { User } from "lucide-react";
import Button from "@/components/basic/button";
import CountUp from "react-countup";


const Consultancy = () => {
 
  return (
    <article className="flex flex-col lg:flex-row gap-20 py-14 mx-12 items-center  justify-center">
      <div className="flex md:flex-row flex-col gap-2 self-center">
        <div className="md:size-80 w-[75vw] sm:w-[80vw] h-80 rounded-xl bg-[url('/image2.jpg')] bg-center bg-cover relative">
          <img src="/doodle1.png" className="absolute -top-12 -left-10" alt="" />
          <div className="absolute -bottom-5 -left-3 items-center gap-2 p-3 flex bg-blue-200 rounded-lg">
            <div>
              <User />
            </div>
            <div className="flex flex-col text-sm">
              <h3 className="text-2xl font-bold "><CountUp start={0} end={5000} duration={3} delay={1} enableScrollSpy />+</h3>{" "}
              <p className="font-semibold">Satisfied Clients</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-2  mt-14">
          <div className="md:h-28 h-60 md:mt-0 w-[80vw] mt-10 md:w-48 rounded-2xl bg-[url('/image1.jpg')] bg-center bg-cover relative">
            <img src="/doodle2.png" className="absolute -top-22 left-1" alt="" />
          </div>
          <div className="h-40 w-44 rounded-2xl  bg-blue-300 flex items-center justify-center  flex-col text-center">
            <h3 className="font-bold p-2 text-3xl sm:text-4xl"><CountUp start={0} end={10} duration={6} delay={1} enableScrollSpy />k+</h3>
            <p className="font-semibold">projects delivered globally</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:w-md">
        <h3>TECH CONSULTING FIRM</h3>
        <h2 className="text-4xl font-extrabold">
          Empowering Businesses with{" "}
          <span className="text-blue-700">Cutting-Edge Solutions</span>
        </h2>
        <p className="text-gray-500">
          Unlock innovation with expert guidance, tailored strategies, and
          scalable software solutions for modern enterprises.
        </p>
        <div className="flex gap-2 items-center ">
          <div className="flex flex-col gap-6 border-2 border-r-0 pl-4 border-blue-600 py-2">
            <div className="size-16 bg-blue-100 items-center justify-center flex rounded-full">
            <img src="/icons8-tools-50.png" alt="" className="size-6" /></div>
            <div className="size-16 bg-blue-100 items-center justify-center flex rounded-full">
            <img src="icons8-team-50.png" alt="" className="size-6" /></div>
          </div>
          <div className="flex flex-col gap-9 justify-center h-full">
            <div>
              <h3 className="text-xl font-bold">Inventory management</h3>{" "}
              <p>Muchas variaciones de los pasajes de.</p>
            </div>
            <div>
              <h3  className="text-xl font-bold">Experienced Team</h3>{" "}
              <p>Muchas variaciones de los pasajes de.</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Button label="About Elsoft +" />
        </div>
      </div>
    </article>
  );
};

export default Consultancy;
