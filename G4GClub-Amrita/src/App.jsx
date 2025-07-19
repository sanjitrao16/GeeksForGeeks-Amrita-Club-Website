import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import HeroPage from "./components/HeroPage.jsx";
import Domain from "./components/Domain.jsx";
import Team from "./components/Team.jsx";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <HeroPage></HeroPage>
      <Domain></Domain>
      <Team></Team>
    </>
  );
}

export default App;
