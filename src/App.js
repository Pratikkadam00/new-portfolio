import React, { useEffect, useState, useRef } from "react";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import StaticHeading from "./components/StaticHeading";

const Section = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.4, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transform transition-all duration-[2000ms] ease-in-out delay-150 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-500">
      <StaticHeading />

      <Section>
        <Experience />
      </Section>

      <Section>
        <Projects />
      </Section>

      <Section>
        <Skills />
      </Section>
      
        <Footer />
      
    </div>
  );
};

export default App;
