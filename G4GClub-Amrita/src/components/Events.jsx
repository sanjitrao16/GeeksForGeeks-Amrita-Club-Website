import LeftArrow from "../assets/icons/Chevron left.svg";
import RightArrow from "../assets/icons/Chevron right.svg";

import { useRef, useEffect, useState } from "react";

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
  // Refs and state for scroll button visibility
  const pastRef = useRef(null);
  const [showPastLeft, setShowPastLeft] = useState(false);
  const [showPastRight, setShowPastRight] = useState(false);
  const upcomingRef = useRef(null);
  const [showUpcomingLeft, setShowUpcomingLeft] = useState(false);
  const [showUpcomingRight, setShowUpcomingRight] = useState(false);

  // Helper to check scroll button visibility
  const updateScrollButtons = (ref, setLeft, setRight) => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setLeft(scrollLeft > 0);
    setRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  // Dynamically update scroll buttons on data or container size change
  useEffect(() => {
    updateScrollButtons(pastRef, setShowPastLeft, setShowPastRight);
    updateScrollButtons(upcomingRef, setShowUpcomingLeft, setShowUpcomingRight);
    const handleResize = () => {
      updateScrollButtons(pastRef, setShowPastLeft, setShowPastRight);
      updateScrollButtons(
        upcomingRef,
        setShowUpcomingLeft,
        setShowUpcomingRight
      );
    };
    window.addEventListener("resize", handleResize);

    // Use ResizeObserver for container size/content changes
    const observers = [];
    if (pastRef.current) {
      const obs = new window.ResizeObserver(() => {
        updateScrollButtons(pastRef, setShowPastLeft, setShowPastRight);
      });
      obs.observe(pastRef.current);
      observers.push(obs);
    }
    if (upcomingRef.current) {
      const obs = new window.ResizeObserver(() => {
        updateScrollButtons(
          upcomingRef,
          setShowUpcomingLeft,
          setShowUpcomingRight
        );
      });
      obs.observe(upcomingRef.current);
      observers.push(obs);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
      observers.forEach((obs) => obs.disconnect());
    };
  }, [pastEvents, upcomingEvents]);

  // Attach scroll listeners
  useEffect(() => {
    const past = pastRef.current;
    const upcoming = upcomingRef.current;
    if (past) {
      const handler = () =>
        updateScrollButtons(pastRef, setShowPastLeft, setShowPastRight);
      past.addEventListener("scroll", handler);
      return () => past.removeEventListener("scroll", handler);
    }
  }, []);
  useEffect(() => {
    const upcoming = upcomingRef.current;
    if (upcoming) {
      const handler = () =>
        updateScrollButtons(
          upcomingRef,
          setShowUpcomingLeft,
          setShowUpcomingRight
        );
      upcoming.addEventListener("scroll", handler);
      return () => upcoming.removeEventListener("scroll", handler);
    }
  }, []);

  return (
    <>
      <div className="Events-Section mt-3 p-3" id="events">
        <h2 className="text-center text-2xl font-extrabold mb-6 tracking-wide drop-shadow">
          Events
        </h2>
        <div className="PastEvents ml-10">
          <h2 className="text-lg text-[#265645] font-bold mb-4">Past Events</h2>
          <div className="relative">
            {showPastLeft && (
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 border border-gray-200 hover:bg-gray-100 transition disabled:opacity-50"
                onClick={() => {
                  if (pastRef.current)
                    pastRef.current.scrollBy({
                      left: -350,
                      behavior: "smooth",
                    });
                }}
                aria-label="Scroll left"
                type="button"
              >
                <img src={LeftArrow} alt="Left Arrow" className="w-6 h-6" />
              </button>
            )}
            <div
              ref={pastRef}
              id="past-events-scroll"
              className="flex gap-6 overflow-x-hidden py-2 px-8 select-none"
              style={{
                scrollBehavior: "smooth",
                overscrollBehaviorX: "none",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
              onWheel={(e) => e.preventDefault()}
              tabIndex={-1}
            >
              {Object.keys(pastEvents).length === 0 ? (
                <div className="flex-shrink-0 w-80 text-center text-gray-500 text-base font-medium py-8 bg-gray-100 rounded-lg shadow-inner">
                  No events held till now.
                </div>
              ) : (
                Object.entries(pastEvents).map(([key, event]) => (
                  <div
                    key={key}
                    className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-shadow duration-200 border border-gray-200"
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
            {showPastRight && (
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 border border-gray-200 hover:bg-gray-100 transition disabled:opacity-50"
                onClick={() => {
                  if (pastRef.current)
                    pastRef.current.scrollBy({ left: 350, behavior: "smooth" });
                }}
                aria-label="Scroll right"
                type="button"
              >
                <img src={RightArrow} alt="Right Arrow" className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>

        <div className="UpcomingEvents ml-10 mt-8">
          <h2 className="text-lg text-[#265645] font-bold mb-4">
            Upcoming Events
          </h2>
          <div className="relative">
            {showUpcomingLeft && (
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 border border-gray-200 hover:bg-gray-100 transition disabled:opacity-50"
                onClick={() => {
                  if (upcomingRef.current)
                    upcomingRef.current.scrollBy({
                      left: -350,
                      behavior: "smooth",
                    });
                }}
                aria-label="Scroll left"
                type="button"
              >
                <img src={LeftArrow} alt="Left Arrow" className="w-6 h-6" />
              </button>
            )}
            <div
              ref={upcomingRef}
              id="upcoming-events-scroll"
              className="flex gap-6 overflow-x-hidden py-2 px-8 select-none"
              style={{
                scrollBehavior: "smooth",
                overscrollBehaviorX: "none",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
              onWheel={(e) => e.preventDefault()}
              tabIndex={-1}
            >
              {Object.keys(upcomingEvents).length === 0 ? (
                <div className="flex-shrink-0 w-80 text-center text-gray-500 text-base font-medium py-8 bg-gray-100 rounded-lg shadow-inner">
                  No future events scheduled.
                </div>
              ) : (
                Object.entries(upcomingEvents).map(([key, event]) => (
                  <div
                    key={key}
                    className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-shadow duration-200 border border-gray-200"
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
            {showUpcomingRight && (
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 border border-gray-200 hover:bg-gray-100 transition disabled:opacity-50"
                onClick={() => {
                  if (upcomingRef.current)
                    upcomingRef.current.scrollBy({
                      left: 350,
                      behavior: "smooth",
                    });
                }}
                aria-label="Scroll right"
                type="button"
              >
                <img src={RightArrow} alt="Right Arrow" className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
