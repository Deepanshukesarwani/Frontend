const HeroSection = () => {
    return (
      <section className="relative bg-black text-white py-16 px-6 text-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
  
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Logo & Title */}
          <div className="flex justify-center items-center gap-4">
            <img src="/hackindia-logo.png" alt="HackIndia Logo" className="h-12" />
            <h1 className="text-5xl font-bold">
              <span className="bg-orange-500 text-black px-2 py-1 rounded-md">Hack</span>India
              <span className="text-purple-400">2025</span>
            </h1>
          </div>
  
          {/* Subtitle */}
          <p className="mt-4 text-lg text-gray-300">
            India's Biggest Web3 & AI Hackathon
          </p>
  
          {/* Date Range Box */}
          <div className="mt-6">
            <span className="bg-purple-600 px-6 py-2 rounded-lg text-lg">
              February 28 - September 28
            </span>
          </div>
  
          {/* Stats Section */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-lg">
            <div className="text-orange-500 font-semibold">💰 $150+ Price Pool</div>
            <div className="text-yellow-400 font-semibold">🏫 150+ Universities</div>
            <div className="text-red-500 font-semibold">🎓 25,000+ Students</div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  