import GitHub from "../assets/social-media/GitHub.svg";
import LinkedIn from "../assets/social-media/LinkedIn-Logo.svg";

export default function Developers() {
  const developers = {
    Dev1: {
      name: "Sanjit Rao",
      github: "https://github.com/sanjitrao16",
      linkedin: "https://www.linkedin.com/in/sanjitrao16/",
      image: "#",
    },
    Dev2: {
      name: "Lohith Guru",
      github: "https://github.com/LOHITHPRO",
      linkedin: "https://www.linkedin.com/in/lohithpro/",
      image: "#",
    },
  };
  return (
    <>
      <div className="Developers-Section mt-3 p-3 bg-[#265645] text-white">
        <h2 className="text-center text-2xl font-extrabold mb-6 tracking-wide drop-shadow">
          Website Developers
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
          {Object.entries(developers).map(([key, dev]) => (
            <div key={key} className="flex flex-col items-center">
              <img
                src={dev.image}
                alt={`Profile`}
                className="w-28 h-28 rounded-full mb-4 border-4 border-white object-cover shadow"
              />
              <h3 className="text-xl font-bold mb-1 text-center">{dev.name}</h3>
              <div className="flex space-x-6">
                <a
                  href={dev.github}
                  className="text-white hover:underline font-medium transition-colors duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={GitHub}
                    alt="GitHub"
                    width="20px"
                    height="20px"
                    className="invert"
                  />
                </a>
                <a
                  href={dev.linkedin}
                  className="text-white hover:underline font-medium transition-colors duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={LinkedIn}
                    alt="LinkedIn"
                    width="20px"
                    height="20px"
                    className="brightness-0 invert"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
