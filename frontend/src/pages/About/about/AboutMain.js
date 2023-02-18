import { useContext } from "react";
import About from "./about/About.jsx";
import Intro from "./intro/Intro.jsx";
import Toggle from "./toggle/Toggle.jsx";
import { ThemeContext } from "../../context";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Page2 = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "transparent",
        color: darkMode && "white"
      }}
    >
      {/* <Toggle /> */}
      <Intro />
      <About />
    </div>
  );
};

export default Page2;
