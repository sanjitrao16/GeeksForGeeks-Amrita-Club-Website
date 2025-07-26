import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import HeroPage from "./components/HeroPage.jsx";
import Domain from "./components/Domain.jsx";
import Team from "./components/Team.jsx";
import Events from "./components/Events.jsx";
import About from "./components/About.jsx";
import Developers from "./components/Developers.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Gallery from "./components/Gallery.jsx";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <>
      <NavBar onNavigate={setActiveSection} />
      {activeSection === "gallery" ? (
        <Gallery />
      ) : (
        <>
          <HeroPage />
          <Domain />
          <Events />
          <Team />
          <About />
          <Developers />
          <ContactUs />
        </>
      )}
    </>
  );
}

export default App;
