import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between py-3 px-10 bg-[#3AB284]">
        {/* GFG Amrita Campus Body Logo */}
        <img src={Logo} alt="Logo" width="165px" height="165px" />
        <nav className="pr-10">
          <ul className="flex gap-10 text-lg text-white font-semibold">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:underline">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/#contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
