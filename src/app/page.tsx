import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/home";
import { div } from "framer-motion/client";
import AboutSection from "./components/about";
import EmailSection from "./components/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <EmailSection/>
      </div>
    </div>
  );
}
