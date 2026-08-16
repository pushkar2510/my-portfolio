import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { profileData } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="pb-8 text-center space-y-3 px-4 border-t border-neutral-800/60 pt-6">
      <div className="flex items-center justify-center gap-5">
        {profileData.socials.github && (
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-neutral-500 hover:text-amber-400 transition-colors p-1"
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
            className="text-neutral-500 hover:text-amber-400 transition-colors p-1"
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
            className="text-neutral-500 hover:text-amber-400 transition-colors p-1"
          >
            <Instagram className="w-4 h-4" />
          </a>
        )}
      </div>
      <p className="text-neutral-500 text-xs">
        © {new Date().getFullYear()} {profileData.name}. All rights reserved.
      </p>
    </footer>
  );
};
