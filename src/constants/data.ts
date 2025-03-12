
import { Path,HomeDetailsProp } from "./types";


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



export { paths,HomeDetails };
