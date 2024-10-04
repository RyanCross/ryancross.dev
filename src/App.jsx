import "./App.css";
import { HeroSection } from "./components/HeroSection.jsx";
import { FooterSection } from "./components/FooterSection.jsx";
import { ProjectsSection } from "./components/ProjectsSection.jsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "./constants/theme.js";
import Divider from "@mui/material/Divider";

function App() {
  return (
    <>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <div className="App">
            <HeroSection></HeroSection>
            <Divider variant="middle" flexItem="true" />
            <ProjectsSection></ProjectsSection>
            <Divider variant="middle" flexItem="true" />
            <FooterSection></FooterSection>
          </div>
        </ThemeProvider>
      </CssBaseline>
    </>
  );
}

export default App;
