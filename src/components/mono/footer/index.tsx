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
    <footer className="relative bg-blue-500 mt-60 text-white">
      <Header />

      <section className="flex justify-between pt-60 pb-20 px-40 gap-40">
        <div className="w-[30%] flex flex-col gap-7">
          <h1 className="text-3xl font-bold">Elsoft</h1>

          <p className="text-sm leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta
            eaque consequatur repellendus consectetur sapiente iure voluptate
            sit?
          </p>

          <div className="flex gap-10">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>

        <div className="w-[70%] flex justify-between">
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

      <section className="border-t border-gray-600 flex justify-between items-center py-7 px-40">
        <p>&copy; 2023 Elsoft. All rights reserved.</p>

        <div className="flex gap-5">
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
    <section className="absolute -top-56 left-1/2 -translate-x-1/2 bg-[rgb(42,42,121,0.8)] h-[40vh] w-[85%] rounded-2xl flex py-10 px-20 justify-end">
      <div className="absolute h-[110%] w-[450px] -top-28 left-40 rounded-2xl flex justify-center items-center">
        <img src={newsletter_image} alt="newsletter" />
      </div>

      <div className="w-[40%] flex flex-col justify-center gap-5 text-white">
        <h3 className="text-xl font-bold">
          Subscribe to our newsletter to get the latest news and updates in our
          collections
        </h3>
        <p className="text-lg">Get the latest news and updates in your inbox</p>

        <SubscribeInput />

        <p className="text-sm leading-7">
          You can unsubscribe at any time. <br />
          For more details, read our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
