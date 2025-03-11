import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";

function NavBar() {
  return (
    <nav className="flex items-center justify-between sm:px-40 px-5 py-5">
      <div>ElSoft</div>

      <DesktopMenu />

      <div className="sm:flex gap-5 items-center hidden">
        <button className="bg-[#1d1d70] text-white px-4 py-2 rounded-md">
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
