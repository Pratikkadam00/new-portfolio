import React, { useEffect, useState } from "react";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import StaticHeading from "./components/StaticHeading";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Calculate the card's position based on the scroll position
  const cardPosition = Math.max(window.innerHeight - scrollPosition * 1.5, 0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    const handleScrollThrottled = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollThrottled, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
    };
  }, []);

  return (
    <div className="relative bg-gray-100 min-h-screen">
      {/* Outer container with glassmorphism effect */}
      <div className="backdrop-blur-lg bg-white bg-opacity-10 border border-white/30 shadow-xl rounded-3xl p-8 transition-transform duration-200">
        <StaticHeading />
      </div>

      {/* Inner card content with glassmorphism effect */}
      <div
        className="absolute left-0 right-0 z-20 backdrop-blur-lg bg-white bg-opacity-10 border border-white/30 shadow-xl rounded-3xl p-8 transition-transform duration-200"
        style={{
          transform: `translateY(${cardPosition}px)`,
          top: 0,
        }}
      >
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
};

export default App;
