import React, { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>

      {/* Experience block */}
      <div
        ref={experienceRef}
        className={`transform transition-opacity duration-1500 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 shadow-lg rounded-lg p-4`}
      >
        <h3 className="font-semibold text-gray-800">Company Name</h3>
        <p className="text-gray-600">Position - Date</p>
        <p className="mt-2 text-gray-700">Description of what I did here.</p>
      </div>

      {/* Additional experience blocks can be added similarly */}
    </div>
  );
};

export default Experience;
