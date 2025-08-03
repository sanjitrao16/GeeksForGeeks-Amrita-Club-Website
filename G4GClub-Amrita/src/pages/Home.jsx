import HeroPage from "../components/HeroPage.jsx";
import Domain from "../components/Domain.jsx";
import Events from "../components/Events.jsx";
import Team from "../components/Team.jsx";
import About from "../components/About.jsx";
import Developers from "../components/Developers.jsx";
import ContactUs from "../components/ContactUs.jsx";

export default function Home() {
  return (
    <>
      <HeroPage />
      <Domain />
      <Events />
      <Team />
      <About />
      <Developers />
      <ContactUs />
    </>
  );
}
