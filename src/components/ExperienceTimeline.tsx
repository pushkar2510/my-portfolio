import React from "react";
import { Calendar } from "lucide-react";
import { experienceData, calculateDuration } from "@/data/portfolioData";

export const ExperienceTimeline: React.FC = () => {
  return (
    <section aria-label="Work Experience" className="space-y-6 animate-fadeIn">
      <h2 className="sr-only">Work Experience</h2>
      <div className="relative border-l border-neutral-800 pl-4 sm:pl-6 space-y-8">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative group">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-amber-400 transition-colors" />

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-white text-sm sm:text-base font-medium">{exp.role}</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700/50">
                    {exp.type}
                  </span>
                </div>
                <span className="text-neutral-500 text-xs flex-shrink-0 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-neutral-600" />
                  <time>{calculateDuration(exp.startDate, exp.endDate)}</time>
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-amber-400/90 flex-wrap">
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-medium"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <span className="font-medium">{exp.company}</span>
                )}
                {exp.location && (
                  <span className="text-neutral-500">
                    • {exp.location} {exp.mode ? `(${exp.mode})` : ""}
                  </span>
                )}
              </div>

              {exp.description && exp.description.length > 0 && (
                <ul className="space-y-1 text-xs sm:text-sm text-neutral-400 leading-relaxed pt-1 list-none">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              )}

              {exp.skills && exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2 py-0.5 bg-neutral-800/80 text-neutral-400 rounded border border-neutral-800 hover:border-neutral-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
