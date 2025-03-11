import { NavLink } from "react-router-dom";
import angleDown from "@/assets/icons/angle_down.svg";
import { paths } from "@/constants/data";
import { Path } from "@/constants/types";

function DesktopMenu() {
  return (
    <menu className="sm:flex items-center gap-10 hidden">
      {paths.map(({ path, pathName, icon }: Path) => {
        return (
          <li className={`${icon ? "flex gap-2 items-center" : ""}`}>
            <NavLink to={path}>{pathName}</NavLink>
            {icon && <img src={angleDown} alt="" />}
          </li>
        );
      })}
    </menu>
  );
}

export default DesktopMenu;
