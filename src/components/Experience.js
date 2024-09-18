// Experience.js
import React from "react";

const Experience = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-semibold">Company Name</h3>
        <p className="text-gray-600">Position - Date</p>
        <p className="mt-2">Description of what I did here.</p>
      </div>
      {/* Repeat similar blocks for more experience */}
    </div>
  );
};

export default Experience;
