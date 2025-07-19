import M1 from "../assets/members/Profile-Sanjit.jpg";
import LinkedIn from "../assets/social-media/LinkedIn-Logo.svg";

export default function Team() {
  const members = {
    "Member-1": {
      name: "Janani Srinivasan Anusha",
      role: "President",
      image: "#",
      linkedin: "#",
      github: "#",
      imageHeight: "300px",
      imageWidth: "300px",
    },
    "Member-2": {
      name: "Dharmadhaashan P",
      role: "Vice-President",
      image: "#",
      linkedin: "#",
      github: "#",
      imageHeight: "300px",
      imageWidth: "300px",
    },
    "Member-3": {
      name: "Nikil M",
      role: "Technical Head",
      image: "#",
      linkedin: "#",
      github: "#",
      imageHeight: "300px",
      imageWidth: "300px",
    },
    "Member-4": {
      name: "Manoj Mehra",
      role: "Event Management Head",
      image: "#",
      linkedin: "#",
      github: "#",
      imageHeight: "300px",
      imageWidth: "300px",
    },
    "Member-5": {
      name: "Ketha Aakash",
      role: "Techno-Creative Head",
      image: "#",
      linkedin: "#",
      github: "#",
      imageHeight: "300px",
      imageWidth: "300px",
    },
    "Member-6": {
      name: "Nithish L",
      role: "PR & Outreach Head",
      image: "#",
      linkedin: "#",
      github: "#",
      imageHeight: "300px",
      imageWidth: "300px",
    },
    "Member-7": {
      name: "Veda Chatiyode",
      role: "Marketing Head",
      image: "#",
      linkedin: "#",
      github: "#",
      imageHeight: "300px",
      imageWidth: "300px",
    },
    "Member-8": {
      name: "Janani H",
      role: "Social Media Head",
      image: "#",
      linkedin: "#",
      github: "#",
      imageHeight: "300px",
      imageWidth: "300px",
    },
  };
  return (
    <>
      <div className="mt-5 p-3">
        <h2 className="text-center text-2xl font-extrabold mb-6 tracking-wide drop-shadow">
          Our Core Team
        </h2>

        <div className="Team">
          <div className="Row-1 flex justify-center gap-5">
            {Object.entries(members)
              .slice(0, 2)
              .map(([key, member]) => (
                <div key={key} className="">
                  <img
                    src={member.image}
                    alt={`${key}`}
                    width={member.imageWidth}
                    height={member.imageHeight}
                  />
                  <p className="text-center">{member.name}</p>
                  <p className="text-center">{member.role}</p>
                  <div className="flex justify-center">
                    <a href={member.linkedin} target="_blank">
                      <img
                        src={LinkedIn}
                        alt="LinkedIn"
                        width="25px"
                        height="25px"
                      />
                    </a>
                  </div>
                </div>
              ))}
          </div>
          <div className="Row-2 flex justify-center gap-5 mt-6">
            {Object.entries(members)
              .slice(2, 6)
              .map(([key, member]) => (
                <div key={key} className="">
                  <img
                    src={member.image}
                    alt={`${key}`}
                    width={member.imageWidth}
                    height={member.imageHeight}
                  />
                  <p className="text-center">{member.name}</p>
                  <p className="text-center">{member.role}</p>
                  <div className="flex justify-center">
                    <a href={member.linkedin} target="_blank">
                      <img
                        src={LinkedIn}
                        alt="LinkedIn"
                        width="25px"
                        height="25px"
                      />
                    </a>
                  </div>
                </div>
              ))}
          </div>
          <div className="Row-3 flex justify-center gap-5 mt-6">
            {Object.entries(members)
              .slice(6, 8)
              .map(([key, member]) => (
                <div key={key} className="">
                  <img
                    src={member.image}
                    alt={`${key}`}
                    width={member.imageWidth}
                    height={member.imageHeight}
                  />
                  <p className="text-center">{member.name}</p>
                  <p className="text-center">{member.role}</p>
                  <div className="flex justify-center">
                    <a href={member.linkedin} target="_blank">
                      <img
                        src={LinkedIn}
                        alt="LinkedIn"
                        width="25px"
                        height="25px"
                      />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
