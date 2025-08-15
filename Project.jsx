import React from "react";
import "./Project.css"; // Import CSS for styling

const projects = [
  {
    title: "To Do App",
    description: "A task management app to keep track of your daily tasks.",
    techStack: "HTML, CSS, JavaScript",
    projectLink: "https://todoapp.example.com"
  },
  {
    title: "NewsApp",
    description: "A news aggregation app that pulls articles from various sources which include technology, health, and finance that fetch the data from News API.",
    techStack: "React Js, Bootstrap, News API",
    projectLink: "https://newsapp.example.com"
  },
  {
    title: "Social-Media App",
    description: "A full-fledged social media site built with React , in this project I implemented features like user authentication, real-time messaging, and a dynamic news feed,user can create posts, follow other users, and receive updates.",
    techStack: "React, JavaScript, CSS",
    projectLink: "https://social-media-app.example.com"
  },
   {
    title: "Agency.Ai",
    description: "A full-fledged social media site built with React , in this project I implemented features like user authentication, real-time messaging, and a dynamic news feed,user can create posts, follow other users, and receive updates.",
    techStack: "React, JavaScript, CSS",
    projectLink: "https://agency-ai.example.com"
  },

];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span><strong>Tech Stack:</strong> {project.techStack}</span>
            <div className="project-link">
            {project.projectLink && (
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
