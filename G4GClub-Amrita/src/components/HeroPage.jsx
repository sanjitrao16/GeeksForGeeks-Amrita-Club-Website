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

          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus ullam blanditiis <br />
            doloribus sequi.A eius necessitatibus minus nesciunt labore modi ea
            culpa! Eum veniam <br />
            at explicabo dolorem exercitationem consectetur eaque blanditiis
            illum nulla suscipit totam
            <br /> qui harum dolor, voluptatem repellendus sit voluptatum
            distinctio? Facere, praesentium! <br /> Minima voluptas inventore
            suscipit repellendus.
          </p>

          <div className="Social-Media mt-15 flex gap-5">
            <a href="#">
              <img
                src={LinkedIn}
                alt="LinkedIn-Logo"
                width="30px"
                height="30px"
              />
            </a>
            <a href="#">
              <img src={GitHub} alt="GitHub-Logo" width="30px" height="30px" />
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
