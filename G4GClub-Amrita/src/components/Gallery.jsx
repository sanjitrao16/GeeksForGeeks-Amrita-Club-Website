import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.png";
import illustration from "../assets/images/illustration.png";
import vector1 from "../assets/vectors/Vector.png";
import vector2 from "../assets/vectors/Vector_2.png";

// Add random placeholder images for demo
const images = [
  { src: logo, alt: "Logo" },
  { src: illustration, alt: "Illustration" },
  { src: vector1, alt: "Vector 1" },
  { src: vector2, alt: "Vector 2" },
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", alt: "Random 1" },
  { src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", alt: "Random 2" },
  { src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", alt: "Random 3" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80", alt: "Random 4" },
];

function useFadeInOnScroll() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
}

export default function Gallery() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  return (
    <div className="Gallery-Section min-h-screen py-12 px-4 bg-gradient-to-br from-[#3AB284]/80 to-[#265645]/90 flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-white mb-10 drop-shadow text-center tracking-wide">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-5xl">
        {images.map((img, idx) => {
          const [fadeRef, isVisible] = useFadeInOnScroll();
          // Animation logic: fade in on scroll, fade out if another is hovered
          let opacity = isVisible ? 1 : 0;
          let scale = isVisible ? 1 : 0.95;
          let zIndex = 1;
          let boxShadow = "0 2px 16px 0 rgba(58,178,132,0.10)";
          if (hoveredIdx !== null) {
            if (hoveredIdx === idx) {
              opacity = 1;
              scale = 1.05;
              zIndex = 10;
              boxShadow = "0 8px 32px 0 rgba(58,178,132,0.25)";
            } else {
              opacity = 0.3;
              scale = 0.97;
              zIndex = 0;
            }
          }
          return (
            <div
              key={img.alt + idx}
              ref={fadeRef}
              className={`rounded-2xl overflow-hidden shadow-xl border-4 border-[#3AB284] bg-white/80 transition-all duration-700 ease-out transform cursor-pointer`}
              style={{
                minHeight: 250,
                opacity,
                zIndex,
                boxShadow,
                transform: `scale(${scale})`,
                transition: "opacity 0.5s, transform 0.5s, box-shadow 0.5s, z-index 0s"
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover bg-gradient-to-t from-[#CFFFE6]/60 to-white/80"
                draggable={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
} 