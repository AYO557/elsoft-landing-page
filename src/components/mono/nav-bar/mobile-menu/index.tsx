import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { paths } from "@/constants/data";
import { Path } from "@/constants/types";
import angleDown from "@/assets/icons/angle_down.svg";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <Menu className="sm:hidden" onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <X className="sm:hidden" onClick={() => setIsOpen(!isOpen)} />
      )}

      <menu
        className={`sm:hidden flex flex-col gap-5 w-full fixed top-14 left-0 bg-blue-100 transition-all duration-300 ${
          isOpen ? "h-[95vh] py-3" : "h-0 overflow-hidden"
        }`}
      >
        {paths.map(({ path, pathName, icon }: Path) => {
          return (
            <li
              className={`p-3 border-b border-blue-500 ${
                icon ? "flex gap-2 items-center" : ""
              }`}
            >
              <NavLink to={path}>{pathName}</NavLink>
              {icon && <img src={angleDown} alt="" />}
            </li>
          );
        })}
      </menu>
    </>
  );
}

export default MobileMenu;
