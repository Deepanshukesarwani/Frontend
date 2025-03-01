// import { useEffect, useState } from "react";
import Footer from "./Components/footer";
import HackathonSection from "./Components/Hackathon";
import HeroSection from "./Components/Hero";
import MenuSection from "./Components/menuSection";
import Navbar from "./Components/Navbar";
import ScrollingLogos from "./Components/ScrollingLogos";
import Hackindiaimg from "/hackindia.png";
import bottomBoder from "/public/bottomBordere.svg";
function App() {
  return (
    <>
      <div className="h-screen max-w-[100vw] bg-black">
        <Navbar />
        <div>
          <img
            src={bottomBoder} // Place the file inside "public/" and reference it here
            alt="Navbar Border"
            className="w-full"
          />
        </div>
        {/* HERO SECTION */}
        <section>
          <HeroSection />
        </section>
        <section>
          <ScrollingLogos />
        </section>
        <section>
          <HackathonSection />
        </section>
        <section>
          <ScrollingLogos />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
