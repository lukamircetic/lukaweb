import React, { useState } from "react";
import "./projectstable.css";
import { allProjects } from "./ProjectData";

type Tab = "biomedical" | "software" | "all";

const ProjectsTable = () => {
  const onlyBiomed = allProjects.filter(
    (project) => project.type === "biomedical"
  );
  const onlySoftware = allProjects.filter(
    (project) => project.type === "software"
  );
  console.log("b", onlyBiomed, "s", onlySoftware);
  const [projects, setProjects] = useState(allProjects);
  const [activeTab, setActiveTab] = useState("all");

  const switchTabs = (tab: Tab) => {
    if (tab === "biomedical") {
      setActiveTab("biomedical");
      setProjects(onlyBiomed);
    } else if (tab === "software") {
      setActiveTab("software");
      setProjects(onlySoftware);
    } else {
      setActiveTab("all");
      setProjects(allProjects);
    }
  };
  return (
    <div className="projects-table-container">
      <div className="top-part-pt">
        <div className="pl-button-div">
          <button
            onClick={() => switchTabs("all")}
            className={activeTab === "all" ? "pl-button-activate" : "pl-button"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ marginRight: "10px" }}
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
            All
          </button>
          <button
            onClick={() => switchTabs("software")}
            className={
              activeTab === "software" ? "pl-button-activate" : "pl-button"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ marginRight: "10px" }}
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            Software
          </button>
          <button
            onClick={() => switchTabs("biomedical")}
            className={
              activeTab === "biomedical" ? "pl-button-activate" : "pl-button"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ marginRight: "10px" }}
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            Biomedical
          </button>
        </div>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-tile">
            <header>
              <div className="tile-top">
                <div className="pl-big-icon">
                  {project.type === "software" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  )}
                </div>
                <div className="pl-links">
                  {project.githubLink !== "" ? (
                    <a
                      className="pl-icon"
                      href={`${project.githubLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="pl-icon"
                        height="56"
                        width="34"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  ) : (
                    <></>
                  )}
                  {project.demoLink !== "" ? (
                    <a
                      className="icon-a"
                      href={`${project.demoLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="pl-icon"
                        width="34"
                        height="56"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="tile-title">{project.name}</div>
              <div className="tile-description">{project.shortDescription}</div>
            </header>
            <footer>
              <ul className="pl-lang-list">
                {project.languages.map((lang) => (
                  <li>{lang}</li>
                ))}
              </ul>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTable;
