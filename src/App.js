import Header from "./components/Header/Header";
import AboutMe from "./components/Body/AboutMe";
import MySkills from "./components/Body/MySkills";
import ContactMe from "./components/Body/ContactMe";
import Footer from "./components/Footer/Footer";
import { createContext, useState, useEffect } from "react";
import Aos from "aos";

export const ThemeContext = createContext(null);

function App() {
  const [theme,setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    Aos.init({ duration: 1000 })
  },[])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Header fn={toggleTheme} val={theme} />
        <AboutMe />
        <MySkills />
        <ContactMe />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
