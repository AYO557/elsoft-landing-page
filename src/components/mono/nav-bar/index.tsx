import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";

function NavBar() {
  return (
    <nav className="flex items-center justify-between sm:px-40 px-5 py-5">
      <div>ElSoft</div>

      <DesktopMenu />

      <div className="sm:flex gap-5 items-center hidden">
        <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer px-4 py-2 rounded-md font-bold">
          Contact Us
        </button>

        <button className="p-3 rounded-md bg-blue-100">
          <img src="" alt="" />
        </button>
      </div>

      <MobileMenu />
    </nav>
  );
}

export default NavBar;
