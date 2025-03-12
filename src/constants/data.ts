
import { Path,HomeDetailsProp,ContactProp } from "./types";


const paths: Path[] = [
  { path: "/", pathName: "Home", icon: true },
  { path: "/about", pathName: "About" },
  { path: "/services", pathName: "Services", icon: true },
  { path: "/pages", pathName: "Pages", icon: true },
  { path: "/blog", pathName: "Blog" },
  { path: "/contact", pathName: "Contact" },
];


const HomeDetails: HomeDetailsProp[] = [
  { Heading: "AI & Machine Learning Solutions", body: "Innovative AI models to optimize workflows and drive intelligent automation" },
  { Heading: "Custom Software Development", body: "Scalable and efficient software solutions tailored for modern enterprises" },
  { Heading: "Cloud & DevOps Consulting", body: "Seamless cloud adoption with automated deployments and infrastructure scaling" },
  { Heading: "Cybersecurity & Risk Management", body: "Advanced threat detection and secure architecture implementation" },
  { Heading: "Enterprise App Modernization", body: "Upgrading legacy systems for enhanced performance and future scalability" },
  { Heading: "Data Engineering & Analytics", body: "Transform raw data into actionable insights with cutting-edge analytics" },
];

const contact:ContactProp[] = [
  {
    img: "icons8-online-support-100.png",
    type: "call us Any Time",
    details: "+(234) 000 000 0000",
  },
  {
    img: "icons8-urgent-message-100.png",
    type: "Email Address",
    details: "info@elsoft.com",
  },
  {
    img: "icons8-address-100.png",
    type: "Office Address",
    details: "12th Street, Kilimanjaro, Nigeria",
  },
];


export { paths,HomeDetails,contact };
