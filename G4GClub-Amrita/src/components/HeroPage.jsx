import Illustration from "../assets/images/illustration.png";
import LinkedIn from "../assets/social-media/LinkedIn-Logo.svg";
import GitHub from "../assets/social-media/GitHub.svg";

export default function HeroPage() {
  return (
    <>
      <div className="Hero-Section flex justify-around">
        <div className="Hero-Text py-8">
          <h1 className="text-4xl text-white font-light leading-13">
            Welcome to{" "}
            <span className="font-extrabold text-[#265645]">GeeksForGeeks</span>
            <br /> Campus Body of
            <span className="font-extrabold text-[#265645]">
              {" "}
              Amrita Vishwa <br />
              Vidyapeetham, Chennai
            </span>
          </h1>

          <p className="mt-4 font-bold text-white">
            Code Today, Lead Tomorrow.
          </p>

          <div className="Social-Media mt-12 flex gap-6 items-center">
            <a
              href="#"
              className="group rounded-full bg-white shadow-lg hover:bg-[#265645] transition-colors duration-300 p-2 flex items-center justify-center border-2 border-[#265645]"
            >
              <img
                src={LinkedIn}
                alt="LinkedIn-Logo"
                width="22px"
                height="22px"
                className="group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
            </a>
            <a
              href="#"
              className="group rounded-full bg-white shadow-lg hover:bg-[#265645] transition-colors duration-300 p-2 flex items-center justify-center border-2 border-[#265645]"
            >
              <img
                src={GitHub}
                alt="GitHub-Logo"
                width="22px"
                height="22px"
                className="group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
            </a>
          </div>
        </div>

        <img
          src={Illustration}
          alt="Illustration"
          width="415px"
          height="435px"
        />
      </div>
    </>
  );
}
