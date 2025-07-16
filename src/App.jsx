import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Grow from "./components/Grow/grow";
import Services from "./components/Services/Services";
import PortfolioSection from "./components/PortfolioSection";
import ThreeDMarquee from "./components/ThreeDMarquee";


function App() {
  return (
    <div className="bg-[#13141f] text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <Grow />
      <Services />
      <PortfolioSection />
      <ThreeDMarquee />
    </div>
  );
}

export default App;
