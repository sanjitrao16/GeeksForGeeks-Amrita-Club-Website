import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import HeroPage from "./components/HeroPage.jsx";
import Domain from "./components/Domain.jsx";
import Team from "./components/Team.jsx";
import Events from "./components/Events.jsx";
import About from "./components/About.jsx";
import Developers from "./components/Developers.jsx";
import ContactUs from "./components/ContactUs.jsx";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
function App() {
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <HeroPage></HeroPage>
      <Domain></Domain>
      <Events></Events>
      <Team></Team>
      <About></About>
      <Developers></Developers>
      <ContactUs></ContactUs>
    </>
  );
}

export default App;
