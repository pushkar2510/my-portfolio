import React from "react";
import { ArrowRight, Github, Tag, ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolioData";
import { projectsData } from "@/data/portfolioData";

interface ProjectsListProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ onSelectProject }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 animate-fadeIn">
      {projectsData.map((project) => (
        <div
          key={project.id}
          onClick={() => onSelectProject(project)}
          className="bg-neutral-800/25 hover:bg-neutral-800/45 p-4 rounded-lg border border-neutral-800/90 hover:border-amber-400/40 transition-all cursor-pointer group flex flex-col justify-between space-y-3"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-white text-sm sm:text-base font-semibold group-hover:text-amber-300 transition-colors truncate">
                {project.title}
              </h3>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </div>

            <p className="text-neutral-300 leading-relaxed text-xs line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="space-y-2.5 pt-1">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900/90 text-amber-400/90 border border-neutral-800"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900/50 text-neutral-500 border border-neutral-800/60">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Direct Links */}
            <div
              className="flex items-center gap-3.5 text-xs pt-2 border-t border-neutral-800/80"
              onClick={(e) => e.stopPropagation()}
            >
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <Github className="w-3 h-3" />
                  <span>code</span>
                </a>
              )}
              {project.links.release && (
                <a
                  href={project.links.release}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400/90 hover:text-amber-300 transition-colors flex items-center gap-1 font-medium"
                >
                  <Tag className="w-3 h-3" />
                  <span>release</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-medium"
                >
                  <span>live</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {project.links.roblox && (
                <a
                  href={project.links.roblox}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  play
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
