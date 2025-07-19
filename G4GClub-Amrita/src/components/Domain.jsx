export default function Domain() {
  const domains = {
    "Domain-1": {
      title: "Data Structures & Algorithms",
      description:
        "This domain focuses on mastering efficient data organization and processing. Students learn data structures and algorithms vital for optimizing code and solving complex problems. Proficiency in DSA is crucial for technical interviews and securing placements in leading tech companies.",
    },
    "Domain-2": {
      title: "Competitive Programming",
      description:
        "This domain is dedicated to enhancing problem-solving abilities and coding proficiency under timed conditions. Participants will develop skills in designing and implementing efficient algorithms to excel in coding competitions and technical assessments.",
    },
    "Domain-3": {
      title: "AI & ML",
      description:
        "This domain explores the principles and applications of Artificial Intelligence and Machine Learning. Topics covered include machine learning algorithms, neural networks, natural language processing, and computer vision, enabling students to understand and build intelligent systems.",
    },
    "Domain-4": {
      title: "Mobile App Development",
      description:
        "This domain provides comprehensive knowledge and practical skills for creating mobile applications. Students will learn the frameworks and tools necessary to design, develop, and deploy functional applications for various mobile platforms.",
    },
    "Domain-5": {
      title: "Web Development",
      description:
        "This domain covers the core technologies and methodologies used in building websites and web applications. It encompasses both front-end (user interface) and back-end (server-side logic) development, equipping students to create dynamic and interactive web solutions.",
    },
    "Domain-6": {
      title: "Internet of Things (IoT)",
      description:
        "This domain introduces the concepts and applications of the Internet of Things. Students will explore how physical devices are interconnected and learn to integrate hardware and software components to develop smart, connected systems and innovative IoT solutions.",
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
              <p className="text-sm text-[#265645] mb-3 text-justify">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
