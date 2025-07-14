// src/App.jsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Grow from "./components/grow";
import Icons from "./components/icons";

function App() {
  return (
    <div className="app-background min-h-screen text-light">
      <Icons /> 
      <Navbar />
      <HeroSection />
      <Grow />
    </div>
  );
}

export default App;
