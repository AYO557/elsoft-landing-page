import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import SubscribeInput from "@/components/basic/input/SubscribeInput";
import newsletter_image from "@/assets/images/newsletter.svg";

function Footer() {
  return (
    <footer className="w-full relative bg-blue-500 sm:mt-60 text-white">
      <Header />

      <section className="flex sm:flex-row flex-col justify-between sm:pt-60 pb-20 sm:px-40 sm:gap-40 gap-20 sm:text-left text-center">
        <div className="sm:w-[30%] flex flex-col gap-7">
          <h1 className="text-3xl font-bold">Elsoft</h1>

          <p className="text-sm leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta
            eaque consequatur repellendus consectetur sapiente iure voluptate
            sit?
          </p>

          <div className="flex gap-10 justify-center sm:justify-start">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>

        <div className="sm:w-[70%] flex sm:flex-row flex-col sm:justify-between items-center sm:items-start sm:gap-0 gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="font-bold">Company</h3>
            <ul className="flex flex-col gap-3">
              <li>About Us</li>
              <li>Services</li>
              <li>Community</li>
              <li>Testimonial</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-bold">Support</h3>
            <ul className="flex flex-col gap-3">
              <li>Help Center</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Feedback</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-bold">Links</h3>
            <ul className="flex flex-col gap-3">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-bold">Contact Us</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2">
                <Phone />
                <span>+234-567-890-123</span>
              </li>
              <li className="flex gap-2">
                <Mail />
                <span>elsoft@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-600 flex sm:flex-row flex-col justify-between items-center py-7 sm:px-40">
        <p>&copy; 2023 Elsoft. All rights reserved.</p>

        <div className="flex sm:flex-row flex-col gap-5">
          <p>Powered by Elsoft</p>
          <p>Established in 2023</p>
          <p>Legal</p>
          <p>Site Map</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

function Header() {
  return (
    <section className="sm:absolute sm:-top-56 sm:left-1/2 sm:-translate-x-1/2 sm:bg-[rgb(42,42,121,0.8)] sm:w-[85%] rounded-2xl flex sm:flex-row flex-col gap-20 sm:gap-0 py-14 sm:px-20 px-2 justify-end sm:text-left text-center">
      <div className="sm:absolute sm:h-[110%] sm:w-[450px] sm:-top-28 sm:left-40 rounded-2xl flex justify-center items-center">
        <img src={newsletter_image} alt="newsletter" />
      </div>

      <div className="sm:w-[40%] flex flex-col justify-center gap-5 text-white">
        <h3 className="text-xl font-bold">
          Subscribe to our newsletter to get the latest news and updates in our
          collections
        </h3>
        <p className="text-lg">Get the latest news and updates in your inbox</p>

        <div className="sm:w-[400px]">
          <SubscribeInput />
        </div>

        <p className="text-sm leading-7">
          You can unsubscribe at any time. <br />
          For more details, read our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
