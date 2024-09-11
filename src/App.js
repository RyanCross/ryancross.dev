import "./App.css";
import { NavBar } from "./components/NavBar.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { FooterSection } from "./components/FooterSection.jsx";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
