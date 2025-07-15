import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Grow from "./components/Grow/grow";
import Icons from "./components/icons";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="bg-[#13141f] text-white min-h-screen">
      <Icons />
      <Navbar />
      <HeroSection />
      <Grow />
      <Services />
    </div>
  );
}

export default App;
