import { HomeDetails } from "@/constants/data";
import { HomeDetailsProp } from "@/constants/types";
import { ArrowUpRight, FileSpreadsheet } from "lucide-react";

const HomeDetailSection = () => {
  return (
    <article className="px-5 py-14">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {HomeDetails.map((data: HomeDetailsProp) => (
          <li className="rounded-xl border border-blue-400 flex flex-col py-9 gap-5 px-6 hover:bg-[url('/techsols.jpg')] bg-cover hover:bg-center bg-left transition-all hover:-translate-y-1 duration-200 hover:bg-black/70 group hover:text-white bg-blend-darken justify-between h-[26rem]">
            <div className="size-20 border border-blue-400  group-hover:border-white group-hover:border-2 group-hover:bg-blue-500 transition-colors duration-200 ease-out rounded-full flex items-center justify-center"><FileSpreadsheet size={35}/></div>
            <h2 className="text-3xl font-extrabold text-blue-950 group-hover:text-white">{data.Heading}</h2>
            <p>{data.body}</p>
            <button className="rounded-md p-3 flex gap-1.5 border border-blue-400 group-hover:border-black hover:text-white hover:bg-black hover:border-2 hover:border-white cursor-pointer w-fit font-bold mt-4">CTA <ArrowUpRight/></button>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default HomeDetailSection;
