// Skills.js
import React from "react";

const skillsData = ["JavaScript", "React", "Node.js", "CSS", "Tailwind CSS"];

const Skills = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex justify-center items-center"
          >
            <span className="text-lg font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
