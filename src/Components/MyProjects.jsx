import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const MyProjects = () => {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    fetch("/projectDetails.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);
  console.log(projectData);
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        My Projects
      </h2>
      <div className="flex flex-col gap-6">
        {projectData.map((project) => (
          <div
            key={project.projectId}
            className="rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row md:gap-4 items-center"
          >
            <img
              src={project.projectImage}
              alt={project.name}
              className="w- md:w-1/2 md:h-96 flex-1 object-cover"
            />
            <div className="p-6 md:w-1/2 md:flex md:flex-col md:justify-center md:items-center">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                {project.name}
              </h3>
              <Link
                to={`projectDetails/${project.projectId}`}
                className="inline-block mt-4 px-5 py-2 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/80 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
