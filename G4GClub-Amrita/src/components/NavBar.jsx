import Logo from "../assets/images/logo.png";

export default function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between py-3 px-10 bg-[#3AB284]">
        {/* GFG Amrita Campus Body Logo*/}
        <img src={Logo} alt="Logo" width="165px" height="165px" />

        <nav className="pr-10">
          <ul className="flex gap-10 text-lg text-white font-semibold">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">Events</a>
            </li>
            <li>
              <a href="/events">Gallery</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
