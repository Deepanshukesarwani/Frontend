// import { useEffect, useState } from "react";
import Footer from "./Components/footer";
import HackathonSection from "./Components/Hackathon";
import HeroSection from "./Components/Hero";

import Navbar from "./Components/Navbar";
import ScrollingLogos from "./Components/ScrollingLogos";

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
        <section className="bg-red-200 ">
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
