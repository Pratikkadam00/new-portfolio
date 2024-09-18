import React, { useState, useEffect } from "react";


const TypingAnimation = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const typingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    let typingTimeout;
    const titles = [
      "FullStack Developer",
      "MERN Stack Developer",
      "Backend Developer",
      "Frontend Developer",
    ];
    const currentText = titles[titleIndex];

    const typeText = () => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayedText((prev) => prev + currentText.charAt(currentIndex));
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    };

    typingTimeout = setTimeout(typeText, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [currentIndex, isDeleting, titleIndex]);

  return (
    <div className="text-gray-600 text-4xl font-semibold transition-opacity duration-700 ease-in-out">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </div>
  );
};


export default TypingAnimation