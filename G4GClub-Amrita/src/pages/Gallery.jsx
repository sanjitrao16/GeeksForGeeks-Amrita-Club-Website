import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.png";
import illustration from "../assets/images/illustration.png";
import vector1 from "../assets/vectors/Vector.png";
import vector2 from "../assets/vectors/Vector_2.png";

// Image array
const images = [
  { src: logo, alt: "Logo" },
  { src: illustration, alt: "Illustration" },
  { src: vector1, alt: "Vector 1" },
  { src: vector2, alt: "Vector 2" },
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", alt: "Random 1" },
  { src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", alt: "Random 2" },
  { src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", alt: "Random 3" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80", alt: "Random 4" },
  { src: logo, alt: "Logo" },
  { src: illustration, alt: "Illustration" },
  { src: vector1, alt: "Vector 1" },
  { src: vector2, alt: "Vector 2" },
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", alt: "Random 5" },
  { src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", alt: "Random 6" },
  { src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", alt: "Random 7" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80", alt: "Random 8" },
];

// Fade-in on scroll hook
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
  return (
    <div className="Gallery-Section min-h-screen py-12 px-4 bg-gradient-to-br from-[#cae0db]/80 to-[#265645]/90 flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-white mb-10 drop-shadow text-center tracking-wide">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-7xl">
        {images.map((img, idx) => {
          const [fadeRef, isVisible] = useFadeInOnScroll();
          const style = {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.95)",
            transition: "opacity 0.5s, transform 0.5s",
            boxShadow: "0 2px 16px rgba(58,178,132,0.1)",
            zIndex: 1,
          };

          return (
            <div
              key={img.alt + idx}
              ref={fadeRef}
              className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#3AB284] bg-white/80 transition-all duration-700 ease-out transform cursor-pointer"
              style={style}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                draggable={false}
                className="w-full h-48 object-cover bg-gradient-to-t from-[#CFFFE6]/60 to-white/80"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
