import { hackathonStats } from "../data/hackathonData";

const HackathonSection = () => {
  return (
    <div className="bg-[#0D021F] text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Stats */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-md">
            {hackathonStats.universities}+
          </h2>
          <p className="text-lg text-gray-300">Universities participating</p>

          <div className="grid grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="text-3xl font-bold">{hackathonStats.judges}+</h3>
              <p className="text-gray-400">Judges</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">{hackathonStats.hackathons}</h3>
              <p className="text-gray-400">Hackathons</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">{hackathonStats.speakers}+</h3>
              <p className="text-gray-400">Great Speakers</p>
            </div>
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="flex-1">
          <div className="relative w-full h-64 md:h-96">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={hackathonStats.videoUrl}
              title="Hackathon Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonSection;
