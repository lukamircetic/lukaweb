import { ArrowUpRight } from "lucide-react";

interface Project {
  name: string;
  shortDescription: string;
  githubLink: string;
  demoLink: string;
}

const projects: Project[] = [
  {
    name: "Codex Reference Repos",
    shortDescription:
      "An easier way to keep track of the repos you reference in your projects.",
    githubLink: "https://github.com/lukamircetic/codex-reference-repos",
    demoLink: "",
  },
  {
    name: "Reading List API",
    shortDescription:
      "Server that saves the links and summaries of articles you've read.",
    githubLink: "https://github.com/lukamircetic/reading-list-api",
    demoLink: "",
  },
  {
    name: "NBA Shots",
    shortDescription:
      "Shot charting for NBA shooting data — interactive visuals over millions of shot events.",
    githubLink: "https://github.com/lukamircetic/nba-shots",
    demoLink: "https://www.nbashots.lukamircetic.ca/",
  },
  {
    name: "Flappy Bird ML",
    shortDescription:
      "Flappy bird game with a neural network training itself in real time.",
    githubLink: "https://github.com/lukamircetic/flappybirdneuralnet",
    demoLink: "https://lukamircetic.github.io/flappybirdneuralnet/",
  },
];

function Projects() {
  return (
    <div className="max-w-2xl flex flex-col gap-3">
      {projects.map((p) => {
        const name = p.name.toLowerCase().replace(/\s+/g, "_");
        return (
          <div key={p.name}>
            <div className="flex items-baseline gap-3">
              <span className="text-sm sm:text-base text-whitetext">
                {name}
              </span>
              <div className="ml-auto flex items-center gap-4 text-xs">
                {p.githubLink && (
                  <a
                    href={p.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-secondary inline-flex items-center gap-0.5"
                  >
                    github <ArrowUpRight size={12} />
                  </a>
                )}
                {p.demoLink && (
                  <a
                    href={p.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-secondary inline-flex items-center gap-0.5"
                  >
                    app <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>
            <span className="block text-slate-300 text-xs sm:text-sm">
              {p.shortDescription}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
