// import { useEffect, useState } from "react";
import Footer from "./Components/footer";
import HackathonSection from "./Components/Hackathon";
import HeroSection from "./Components/Hero";
import MenuSection from "./Components/menuSection";
import Navbar from "./Components/Navbar";
import ScrollingLogos from "./Components/ScrollingLogos";
import Hackindiaimg from "/hackindia.png";

function App() {
  return (
    <>
      <div className="  max-w-[100vw]">
        <Navbar />
        <div className="flex  items-center gap-8 px-6 bg-black h-[4rem]">
          {/* Logo */}
          <div className="w-[15%] bg-black">
            <img src={Hackindiaimg} alt="HackIndia Logo" className="h-10 w-[100%] object-contain" />
          </div>

          {/* Menu Section */}
          <div className="">
          <MenuSection />
          </div>
        </div>
        <div className=" absolute">
          <HeroSection />
          <div className="flex flex-col items-center w-[100%]">
            <ScrollingLogos />
          </div>
          <div>
            <HackathonSection />
          </div>
          <div className="flex flex-col items-center w-[100%]">
            <ScrollingLogos />
          </div>
          <div className="w-[100%]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
