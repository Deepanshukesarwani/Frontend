import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ButtonStyle from "./Button";

function MenuSection() {
    const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8); // Trigger after scrolling 350px
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div className=" fixed top-[5rem] z-50 border-black overflow-hidden rounded-[1rem] bg-black shadow-md transition-all duration-300 flex items-center justify-center gap-4 w-[70%]"
    animate={{ top: scrolled ? "0%" : "5rem" }}
    >
     {/* <ButtonStyle/>
     <ButtonStyle/>
     <ButtonStyle/>
     <ButtonStyle/>
     <ButtonStyle/>
     <ButtonStyle/> */}
    </motion.div>
  )
}

export default MenuSection
