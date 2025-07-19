export default function Events() {
  const pastEvents = {
    "Event-1": {
      title: "GeeksforGeeks Campus Body Inauguration",
      date: "04-07-2025",
      description:
        "Inauguration of the GeeksforGeeks Campus Body at Amrita University.",
      image: "#",
    },
  };

  const upcomingEvents = {
    "Event-1": {
      title: "DSA & Placement Guidance with Raghav Garg",
      date: "20-07-2025",
      description: "A online workshop on DSA and placement guidance.",
      image: "#",
    },
  };
  return (
    <>
      <div className="Events-Section mt-3 p-3">
        <h2 className="text-center text-2xl font-extrabold mb-6 tracking-wide drop-shadow">
          Events
        </h2>
        <div className="PastEvents ml-10">
          <h2 className="text-lg text-[#265645] font-bold mb-4">Past Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.keys(pastEvents).length === 0 ? (
              <div className="col-span-full text-center text-gray-500 text-base font-medium py-8 bg-gray-100 rounded-lg shadow-inner">
                No events held till now.
              </div>
            ) : (
              Object.entries(pastEvents).map(([key, event]) => (
                <div
                  key={key}
                  className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-shadow duration-200 border border-gray-200"
                >
                  <div className="w-full mb-4 flex items-center justify-center bg-gray-50 overflow-hidden border border-gray-200 rounded-lg">
                    <img
                      src={event.image}
                      alt="Event-Image"
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
              ))
            )}
          </div>
        </div>

        <div className="UpcomingEvents ml-10 mt-8">
          <h2 className="text-lg text-[#265645] font-bold mb-4">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.keys(upcomingEvents).length === 0 ? (
              <div className="col-span-full text-center text-gray-500 text-base font-medium py-8 bg-gray-100 rounded-lg shadow-inner">
                No future events scheduled.
              </div>
            ) : (
              Object.entries(upcomingEvents).map(([key, event]) => (
                <div
                  key={key}
                  className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-shadow duration-200 border border-gray-200"
                >
                  <div className="w-full mb-4 flex items-center justify-center bg-gray-50 overflow-hidden border border-gray-200 rounded-lg">
                    <img
                      src={event.image}
                      alt="Event-Image"
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
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
