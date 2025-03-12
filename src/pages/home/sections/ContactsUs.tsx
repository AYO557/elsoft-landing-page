import { contact } from "@/constants/data";
import { ContactProp } from "@/constants/types";

const ContactsUs = () => {

  return (
    <section className="flex flex-col gap-6 sm:gap-9 items-center justify-center">
      <h1 className="text-3xl sm:text-5xl font-extrabold">
        To Make Request or Contact Us
      </h1>
      <div className="flex flex-col gap-5">
        <p className="text-gray-500">
          At Elsoft, we are dedicated to delivering innovative IT solutions and
          services that empower businesses to thrive in the digital age.
        </p>

        <div className="flex flex-col gap-6">
          {contact.map((data:ContactProp) => (
            <div className="flex gap-4 items-center font-bold">
                <div className="bg-blue-900 p-4 rounded-xl">
                    <img src={`./${data.img}`} alt=""  className="size-8 sm:size-14"/>
                </div>
              <div className="">
                <p className="text-gray-500">{data.type}</p>
                <h3 className="sm:text-2xl">{data.details}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactsUs;
