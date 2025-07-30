import Logo from "../assets/images/logo.png";

export default function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between py-3 px-10 bg-[#3AB284]">
        {/* GFG Amrita Campus Body Logo*/}
        <img src={Logo} alt="Logo" width="165px" height="165px" />

        <nav className="pr-10">
          <ul className="flex gap-10 text-lg text-white font-semibold">
            <li >
              <a href="/" className="text-white hover:bg-white hover:text-green-500 px-4 py-2 rounded-xl transition-all duration-350 cursor-pointer">Home</a>
            </li>
            <li >
              <a href="#events" className="text-white hover:bg-white hover:text-green-500 px-4 py-2 rounded-xl transition-all duration-350 cursor-pointer">Events</a>
            </li>
            <li >
              <a href="/events" className="text-white hover:bg-white hover:text-green-500 px-4 py-2 rounded-xl transition-all duration-350 cursor-pointer">Gallery</a>
            </li>
            <li >
              <a href="#contact-us" className="text-white hover:bg-white hover:text-green-500 px-4 py-2 rounded-xl transition-all duration-350 cursor-pointer">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
