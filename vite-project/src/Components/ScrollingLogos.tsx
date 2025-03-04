import { logos } from "../data/logos";

const ScrollingLogos = () => {
  return (
    <div className="relative  overflow-hidden bg-gray-100 py-4 w-[100%]">
      {/* Scrolling Wrapper */}
      <div className="flex gap-8 animate-scroll whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={`Logo ${index + 1}`}
            className="h-16 md:h-20 object-contain"
          />
        ))}
        {/* Duplicate logos for smooth infinite scrolling */}
        {logos.map((logo, index) => (
          <img
            key={`dup-${index}`}
            src={logo.src}
            alt={`Logo ${index + 1}`}
            className="h-16 md:h-20 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
