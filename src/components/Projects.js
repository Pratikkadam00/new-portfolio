// Projects.js
import React from "react";

const projectsData = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of project one.",
    image: "path/to/image1.jpg",
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of project two.",
    image: "path/to/image2.jpg",
    link: "https://example.com/project2",
  },
];

const Projects = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-2 text-blue-500 hover:underline"
              >
                <svg
                  className="w-5 h-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 16.5v-3.75H6V10h7.5V6.75L18 12l-4.5 4.5z" />
                </svg>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
