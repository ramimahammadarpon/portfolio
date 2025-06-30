import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState([]);
  const project = projectData.find((p) => p.projectId === id);
  console.log(project);
  useEffect(() => {
    fetch("/projectDetails.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);
  return (
    <section className="max-w-4xl mx-auto p-6 ">
      <div className="space-y-6">
        <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-primary">{project?.name}</h1>
             <Link to="/" className="btn btn-secondary hidden md:flex">Go Back to Home</Link>
        </div>
        <img
          src={project?.projectImage}
          alt={project?.name}
          className="rounded-xl shadow-lg w-full"
        />
        <div>
          <h2 className="text-xl font-semibold mb-1">📄 Description</h2>
          <p className="text-gray-700">{project?.description}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">🛠 Tech Stack</h2>
          <ul className="flex flex-wrap gap-2">
            {project?.techStack.map((tech, index) => (
              <li
                key={index}
                className="bg-secondary text-sm px-3 py-1 rounded-full text-white"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">🔗 Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href={project?.liveLink}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 Live Site
              </a>
            </li>
            <li>
              <a
                href={project?.githubRepo}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 GitHub Client Repository
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">⚠️ Challenges Faced</h2>
          <p className="text-gray-700">{project?.challenges}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">🚀 Future Plans</h2>
          <p className="text-gray-700">{project?.futurePlans}</p>
        </div>

        <Link to="/" className="btn btn-secondary">Go Back to Home</Link>
      </div>
    </section>
  );
};

export default ProjectDetails;
