import { User } from "lucide-react";
import Button from "../../components/basic/button";

const Consultancy = () => {
  return (
    <article className="flex gap-10 py-14 px-12">
      <div className="flex gap-2 self-center">
        <div className="size-80 rounded-xl bg-green-400 relative">
          <div className="absolute -bottom-5 -left-3 items-center gap-2 p-3 flex bg-blue-200 rounded-lg">
            <div>
              <User />
            </div>
            <div className="flex flex-col text-sm">
              <h3 className="text-2xl font-bold">5000+</h3>{" "}
              <p>Satisfied Clients</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2  mt-14">
          <div className="h-28 w-48 rounded-2xl bg-amber-400"></div>
        <div className="h-40 w-44 rounded-2xl  bg-blue-300 flex items-center justify-center px-2 text-center flex-col">
          <h3 className="font-bold px-1 text-4xl">10k+</h3>
          <p>projects delivered globally</p>
        </div>
      </div></div>
      <div className="flex flex-col gap-4">
        <h3>TECH CONSULTING FIRM</h3>
        <h2 className="text-4xl font-extrabold">
          Empowering Businesses with <span className="text-blue-700">Cutting-Edge Solutions</span>
        </h2>
        <p className="text-gray-500">
          Unlock innovation with expert guidance, tailored strategies, and
          scalable software solutions for modern enterprises.
        </p>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
        <Button label="About Elsoft +" /></div>
      </div>
    </article>
  );
};

export default Consultancy;
