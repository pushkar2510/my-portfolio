import React from "react";
import { Mail, FileText, Github, Linkedin, Instagram, MapPin } from "lucide-react";
import { profileData } from "@/data/portfolioData";

export const Header: React.FC = () => {
  return (
    <header className="pt-8 sm:pt-12 pb-6">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-sm font-mono">&gt;</span>
                <h1 className="text-2xl sm:text-3xl text-white font-bold tracking-tight lowercase">
                  {profileData.name}
                </h1>
              </div>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                {profileData.role}
              </p>
            </div>
            <div className="sm:text-right space-y-1 text-xs text-neutral-500 flex-shrink-0">
              <p className="text-amber-400/90 font-medium">{profileData.experience}</p>
              <p className="flex items-center sm:justify-end gap-1">
                <MapPin className="w-3 h-3 text-neutral-600" />
                {profileData.location}
              </p>
            </div>
          </div>

          {/* Action Buttons & Profiles in Hero */}
          <div className="flex items-center flex-wrap gap-2 pt-2 border-t border-neutral-800/80">
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Send Email"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800/70 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded text-xs transition-colors border border-neutral-700/60"
            >
              <Mail className="w-3.5 h-3.5 text-neutral-400" />
              <span className="hidden sm:inline">{profileData.email}</span>
              <span className="sm:hidden">email</span>
            </a>

            <a
              href={profileData.resumeUrl || "#resume"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 hover:text-amber-300 rounded text-xs transition-colors border border-amber-400/30 font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>resume</span>
            </a>

            <div className="flex items-center gap-1 ml-auto">
              {profileData.socials.github && (
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-1.5 text-neutral-400 hover:text-amber-400 transition-colors rounded hover:bg-neutral-800"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {profileData.socials.linkedin && (
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-1.5 text-neutral-400 hover:text-amber-400 transition-colors rounded hover:bg-neutral-800"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {profileData.socials.instagram && (
                <a
                  href={profileData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-1.5 text-neutral-400 hover:text-amber-400 transition-colors rounded hover:bg-neutral-800"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
