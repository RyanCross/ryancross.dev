import "./App.css";
import { HeroSection } from "./components/HeroSection.jsx";
import { FooterSection } from "./components/FooterSection.jsx";
import { ProjectsSection } from "./components/ProjectsSection.jsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "./constants/theme.js";
import { Stack }  from "@mui/material"

function App() {
  return (
    <>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Stack className="App">
            <HeroSection></HeroSection>
            <ProjectsSection></ProjectsSection>
            <FooterSection></FooterSection>
          </Stack>
        </ThemeProvider>
      </CssBaseline>
    </>
  );
}

export default App;
