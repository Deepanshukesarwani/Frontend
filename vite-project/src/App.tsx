import Footer from "./Components/footer";
import HackathonSection from "./Components/Hackathon";
import HeroSection from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ScrollingLogos from "./Components/ScrollingLogos";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <div className="flex flex-col items-center">
      <ScrollingLogos />
    </div>
    <div>
      <HackathonSection />
    </div>
    <div className="flex flex-col items-center">
      <ScrollingLogos />
    </div>
    <div>
      <Footer/>
    </div>
      
    </>
  );
}

export default App;
