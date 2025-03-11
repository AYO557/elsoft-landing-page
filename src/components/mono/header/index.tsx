import { ArrowRight, Mail, PhoneCall } from "lucide-react";

function Header() {
  return (
    <header className="sm:flex hidden items-center justify-between py-2 px-40 bg-[#1d1d70] font-medium text-white">
      <h4 className="flex items-center gap-2">
        <span>You can reach out to us via email... Contact Us</span>
        <ArrowRight size={15} />
      </h4>

      <div className="flex gap-10">
        <h4 className="flex items-center gap-2">
          <Mail size={15} />
          <span>elsoft@gmail.com</span>
        </h4>
        <h4 className="flex items-center gap-2">
          <PhoneCall size={15} />
          <span>+234-567-890-123</span>
        </h4>
      </div>
    </header>
  );
}

export default Header;
