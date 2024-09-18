import React from "react";

const Experience = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>

      {/* Glassy background for each experience card */}
      <div className="backdrop-blur-lg bg-white bg-opacity-10 border border-white/30 shadow-xl rounded-lg p-4">
        <h3 className="font-semibold text-white">Company Name</h3>
        <p className="text-gray-200">Position - Date</p>
        <p className="mt-2 text-gray-100">Description of what I did here.</p>
      </div>

      {/* Repeat similar blocks for more experience */}
    </div>
  );
};

export default Experience;
