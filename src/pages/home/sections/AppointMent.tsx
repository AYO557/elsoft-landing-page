import { Mail, MapPinHouse, User } from "lucide-react";
import ContactsUs from "./ContactsUs";
import Button from "../../../components/basic/button";

const Appointment = () => {
  return (
    <article className=" sm:bg-blue-100 sm:py-28 px-1 sm:px-16 flex flex-col-reverse sm:flex-row sm:gap-14 mt-24">
      <section className="bg-white px-7 py-16 flex flex-col items-center justify-center gap-10 rounded-xl w-full">
        <h1 className="text-center text-3xl sm:text-5xl font-extrabold sm:w-sm">
          Make An Appointment
        </h1>
        <form action="" className="flex flex-col gap-4 w-full">
          <div className="pr-3 pl-6 bg-[#F5F4FF] w-full justify-between items-center flex py-5 gap-2.5 rounded-md">
            <input
              className="focus:outline-none"
              type="text"
              placeholder="Full Name"
            />{" "}
            <User />
          </div>
          <div className="pr-3 pl-6 bg-[#F5F4FF] w-full justify-between items-center flex py-5 gap-2.5 rounded-md">
            <input
              className="focus:outline-none"
              type="email"
              placeholder="Email Address"
            />{" "}
            <Mail />
          </div>
          <div className="pr-3 pl-6 bg-[#F5F4FF] w-full justify-between items-center flex py-5 gap-2.5 rounded-md">
            <input
              className="focus:outline-none"
              type="text"
              placeholder="House Address"
            />{" "}
            <MapPinHouse />
          </div>
          <div className="flex flex-col  sm:flex-row gap-8">
            <div className="pr-3 pl-6 bg-[#F5F4FF] w-full justify-between items-center flex py-5 gap-2.5 rounded-md">
              <input type="date" className="w-full focus:outline-none" />{" "}
            </div>{" "}
            <div className=" pl-6 bg-[#F5F4FF] w-full justify-between pr-3 items-center flex py-5 gap-2.5 rounded-md">
              <input type="time" className="w-full focus:outline-none" />
            </div>
          </div>
          <div className="pr-3 pl-6 bg-[#F5F4FF] w-full justify-between items-center flex py-5 gap-2.5 rounded-md">
            <input
              className="focus:outline-none"
              type="text"
              placeholder="Message"
            />
          </div>
          <Button label="Submit message" />
        </form>
      </section>

      <ContactsUs />
    </article>
  );
};

export default Appointment;
