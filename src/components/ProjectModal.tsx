import React, { useEffect } from "react";
import { X, Github, Tag, ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-neutral-800/95 backdrop-blur-sm rounded-lg w-full max-w-2xl max-h-[95vh] overflow-y-auto border border-neutral-700/50">
        <div className="sticky top-0 bg-neutral-800/95 backdrop-blur p-4 sm:p-6 flex items-center justify-between border-b border-neutral-800">
          <h2 className="text-base sm:text-lg text-white truncate font-medium">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-neutral-500 hover:text-white transition-colors ml-4 flex-shrink-0 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-6">
          <div>
            <h3 className="text-white text-xs uppercase tracking-wider text-neutral-400 mb-2">
              overview
            </h3>
            <p className="text-neutral-300 leading-relaxed text-xs sm:text-sm">
              {project.fullDescription || project.description}
            </p>
          </div>

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h3 className="text-white text-xs uppercase tracking-wider text-neutral-400 mb-2">
                features
              </h3>
              <div className="space-y-1 text-xs sm:text-sm">
                {project.keyFeatures.map((feature, index) => (
                  <div key={index} className="text-neutral-300">
                    • {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-white text-xs uppercase tracking-wider text-neutral-400 mb-2">
              tech stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 rounded bg-neutral-900/90 text-amber-400/90 border border-neutral-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm pt-2 border-t border-neutral-700/50">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
              >
                <Github className="w-4 h-4" />
                <span>code</span>
              </a>
            )}
            {project.links.release && (
              <a
                href={project.links.release}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 font-medium"
              >
                <Tag className="w-3.5 h-3.5" />
                <span>release</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-medium"
              >
                <span>live</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.links.roblox && (
              <a
                href={project.links.roblox}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                play
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
