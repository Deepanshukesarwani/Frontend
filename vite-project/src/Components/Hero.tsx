import ButtonStyle from "./Button";
import MenuSection from "./menuSection";
import videoUrl from "/bgVideo.mp4";
const imgSingularity =
  "https://s3-alpha-sig.figma.com/img/5205/8608/4ff18847d83ad83389f4cf79d0d06b51?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gJYseYSLZ9vk4WmefY4YpJ32HtERH2kEd-bxvGAkHgB0AS-h6n-mhaf~ZyfmdVJOtOprdifaClYki8gCCH2T4FzDRNUewol9oAVHYC1mk3sXOg1-oav6ol1c494~2M0U4-05X1-OXoywCN97T4fHXGcGbmIsfTgHMRkrBPT8VWukWfXpbySgfPUHEEHMi~Rxy028nVW6AN3hnT~kUHq-sM2UPCRrId6f6k~xAolIWBtStWOzB4RoDHkvYmMXM3GUfTvx1yXaL1HQn5sekLn9bINzMhlnjqLjQVEURer0BVSoDNjve86iwBw2VmoYtjOb7-N2GiX50c~ovUbi5yYVGA__";
const HeroSection = () => {
  return (
    <section className="relative bg-black text-white mt-0 py-16 px-6 text-center w-[100%] ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="flex items-center h-[50px] w-[200px] bg-amber-400">
 
  <div className="ml-4 flex items-center bg-amber-300">
     {/* Adds spacing between image and menu */}
     <div className="bg-red-400 w-[140px]">
 
     </div>
    <div>
    <MenuSection />
    </div>
  </div>
</section>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col  justify-center items-center gap-10">
          <img src={imgSingularity} alt="HackIndia Logo" className="h-15" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6 leading-tight">
          <span className="bg-orange-500 text-black px-2 py-1 rounded-md">Hack</span>
          India <span className="text-purple-400">2025</span>
        </h1>
        </div>

        <p className="mt-4 text-lg text-gray-300">
          India's Biggest Web3 & AI Hackathon
        </p>

        <div className="mt-6">
          <span className="bg-purple-600 px-6 py-2 rounded-lg text-lg">
            February 28 - September 28
          </span>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-lg">
          <div className="text-orange-500 font-semibold">
            💰 $150+ Price Pool
          </div>
          <div className="text-yellow-400 font-semibold">
            🏫 150+ Universities
          </div>
          <div className="text-red-500 font-semibold">🎓 25,000+ Students</div>
        </div>
        <div className=" mt-4 p-0 mb-0">

        <ButtonStyle name="Register now !"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
