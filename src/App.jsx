import "./App.css";
import { HeroSection } from "./components/HeroSection.jsx";
import { FooterSection } from "./components/FooterSection.jsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "./constants/theme.js";

function App() {
  return (
    <>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <div className="App">
            <HeroSection></HeroSection>
            <FooterSection></FooterSection>
          </div>
        </ThemeProvider>
      </CssBaseline>
    </>
  );
}

export default App;
