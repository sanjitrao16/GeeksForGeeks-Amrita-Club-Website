export default function Domain() {
  const domains = {
    "Domain-1": {
      title: "Data Structures & Algorithms",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel natus nemo error. Esse debitis assumenda sed omnis ab consectetur?",
      lead: "Gowtham Hari S",
      linkedin: "https://www.linkedin.com/in/gowtham1310/",
    },
    "Domain-2": {
      title: "Competitive Programming",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel natus nemo error. Esse debitis assumenda sed omnis ab consectetur?",
      lead: "Sunil Raj",
      linkedin: "#",
    },
    "Domain-3": {
      title: "AI & ML",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel natus nemo error. Esse debitis assumenda sed omnis ab consectetur?",
      lead: "Sandeep Vigneshwar",
      linkedin: "https://www.linkedin.com/in/sandeepvigneshwar/",
    },
    "Domain-4": {
      title: "Mobile App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel natus nemo error. Esse debitis assumenda sed omnis ab consectetur?",
      lead: "Chandru S",
      linkedin: "https://www.linkedin.com/in/chandru1106/",
    },
    "Domain-5": {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel natus nemo error. Esse debitis assumenda sed omnis ab consectetur?",
      lead: "Sanjit Rao",
      linkedin: "https://www.linkedin.com/in/sanjitrao16/",
    },
    "Domain-6": {
      title: "Internet of Things (IoT)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel natus nemo error. Esse debitis assumenda sed omnis ab consectetur?",
      lead: "Pranav S",
      linkedin: "https://www.linkedin.com/in/pranav-srikarthik-762182284/",
    },
  };

  return (
    <>
      <div className="mt-3 p-3">
        <h2 className="text-center text-2xl font-extrabold mb-6 tracking-wide drop-shadow">
          Domains
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {Object.entries(domains).map(([key, domain]) => (
            <div
              key={key}
              className="bg-gradient-to-br from-[#e6f4ea] via-white to-[#b2dfdb] shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 rounded-2xl w-sm min-w-[260px] max-w-xs border border-[#265645] flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-3 rounded-full bg-[#265645] flex items-center justify-center text-white text-2xl font-bold shadow">
                {key.replace("Domain-", "")}
              </div>
              <p className="text-center font-bold text-lg text-[#265645] mb-2">
                {domain.title}
              </p>
              <p className="text-sm text-[#265645] mb-3 text-center">
                {domain.description}
              </p>
              <a
                href={domain.linkedin}
                target="_blank"
                className="inline-block bg-[#265645] text-white font-semibold border-1 border-[#265645] text-xs px-3 py-1 rounded-full shadow hover:bg-white hover:text-[#265645] hover:border-1"
              >
                Lead: {domain.lead}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
