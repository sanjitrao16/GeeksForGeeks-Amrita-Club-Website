import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import HeroPage from "./components/HeroPage.jsx";
import Domain from "./components/Domain.jsx";
import Team from "./components/Team.jsx";
import Events from "./components/Events.jsx";
import About from "./components/About.jsx";
import Developers from "./components/Developers.jsx";
import ContactUs from "./components/ContactUs.jsx";

function App() {
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
