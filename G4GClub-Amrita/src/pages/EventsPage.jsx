import React from "react";
import LeftArrow from "../assets/icons/Chevron left.svg";
import RightArrow from "../assets/icons/Chevron right.svg";

export default function EventsPage() {
  // (Ideally move this object to a context/store for DRYness!)
  const pastEvents = {
    "Event-1": {
      title: "GeeksforGeeks Campus Body Inauguration",
      date: "04-07-2025",
      description:
        "Inauguration of the GeeksforGeeks Campus Body at Amrita University.",
      image: "#",
    },
    "Event-2": {
      title: "DSA & Placement Guidance with Raghav Garg",
      date: "20-07-2025",
      description: "A online workshop on DSA and placement guidance.",
      image: "#",
    },
    "Event-3": {
      title: "Resume Builder Event",
      date: "28-07-2025",
      description: "An event focused on building effective resumes.",
      image: "#",
    },
  };

  const upcomingEvents = {};

  function renderEvents(events) {
    if (!events || Object.keys(events).length === 0) {
      return (
        <div className="text-gray-500 text-center w-full py-8 bg-gray-50 rounded-lg shadow-inner font-medium">
          No events at the moment.
        </div>
      );
    }
    return (
      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5">
        {Object.entries(events).map(([key, event]) => (
          <div
            key={key}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div className="w-full mb-4 flex items-center justify-center bg-gray-50 overflow-hidden border border-gray-200 rounded-lg">
              <img
                src={event.image}
                alt={event.title}
                className="object-cover w-full h-40"
              />
            </div>
            <h3 className="text-lg font-bold text-[#265645] mb-1 text-center">
              {event.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2 text-center">
              {event.date}
            </p>
            <p className="text-sm text-gray-700 text-center">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-center text-[#265645] drop-shadow mb-10 tracking-wide">
        All Events
      </h1>
      <section className="mb-14">
        <h2 className="text-xl text-[#265645] font-bold mb-4">Past Events</h2>
        {renderEvents(pastEvents)}
      </section>
      <section>
        <h2 className="text-xl text-[#265645] font-bold mb-4">
          Upcoming Events
        </h2>
        {renderEvents(upcomingEvents)}
      </section>
    </div>
  );
}
