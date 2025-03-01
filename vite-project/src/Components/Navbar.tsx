// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const img =
//   "https://s3-alpha-sig.figma.com/img/942e/422d/db97ca76b35c74671e7ac8eefd3fce76?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UrcwDQ-jR8EJPoNfok4wkOGC57DSnv-OKcLUKOcjnH6LD2iKnJJaudcJmod0mA1XFnZSYuR39RvmLRmPEg0BOXWb7KpuZPS0hen6H0wBShHUowmUe4OdxRI0Nhhb6Qqprba70umGBk~Tq3lDoC5FAgMYdhxSjCjAJZqlRuAWiv39HxSZpWQJ14txDsusbfFn9spRiJK3mKK0ybxu6F011GWOOkXB3lKjTOAzMBj9PCObP0B1T3lAdVHGQJHUwXXGBkTcyF5DEGWawPw-jWqjKhO6IPPI9JvbEGQdr-Gu6Ebkf6lGF5TfSHLYFPyp4FIxS94LmBXBoz7t~4aCw4Hp-g__";
// import signIn from "/signup.png"; // Replace with actual path

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-black text-white p-4 relative border-b border-purple-600">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <img src={img} alt="Logo" className="h-10" />

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8">
//           <img src={signIn} alt="Sign In" className="h-10" />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Navigation with Animation */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.3 }}
//           className="absolute top-full left-0 w-full bg-black p-4 flex flex-col items-center gap-4 border-t border-purple-600 md:hidden"
//         >
//           <img src={signIn} alt="Sign In" className="h-10" />
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
 // Replace with actual path
const img =
  "https://s3-alpha-sig.figma.com/img/942e/422d/db97ca76b35c74671e7ac8eefd3fce76?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UrcwDQ-jR8EJPoNfok4wkOGC57DSnv-OKcLUKOcjnH6LD2iKnJJaudcJmod0mA1XFnZSYuR39RvmLRmPEg0BOXWb7KpuZPS0hen6H0wBShHUowmUe4OdxRI0Nhhb6Qqprba70umGBk~Tq3lDoC5FAgMYdhxSjCjAJZqlRuAWiv39HxSZpWQJ14txDsusbfFn9spRiJK3mKK0ybxu6F011GWOOkXB3lKjTOAzMBj9PCObP0B1T3lAdVHGQJHUwXXGBkTcyF5DEGWawPw-jWqjKhO6IPPI9JvbEGQdr-Gu6Ebkf6lGF5TfSHLYFPyp4FIxS94LmBXBoz7t~4aCw4Hp-g__";
import signIn from "/signup.png"; // Replace with actual path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative  bg-black text-white pt-4 border-b border-purple-600 h-16">
      <div className="container mx-auto flex justify-between  h-[100%]">
        {/* Logo */}
        <div className="ml-3.5 h-[100%] mb-2">
        <img src={img} alt="Logo" className="h-15" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 mr-6">
          <img src={signIn} alt="Sign In" className="h-10" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation with Animation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-black p-4 flex flex-col items-center gap-4 border-t border-purple-600 md:hidden z-30"
        >
          <img src={signIn} alt="Sign In" className="h-10" />
        </motion.div>
      )}     
    </nav>
  );
};

export default Navbar;

