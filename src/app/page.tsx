"use client";

import React, { useState } from "react";
import type { Project } from "@/data/portfolioData";
import { Header } from "@/components/Header";
import { TabNav, TabType } from "@/components/TabNav";
import { ProjectsList } from "@/components/ProjectsList";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactForm } from "@/components/ContactForm";
import { ProjectModal } from "@/components/ProjectModal";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-300 font-mono flex flex-col justify-between selection:bg-amber-400/20 selection:text-amber-300">
      <div>
        {/* Header / Hero Section */}
        <Header />

        {/* Main Content Area */}
        <main className="max-w-2xl mx-auto px-4 sm:px-6 mb-12">
          {/* Main Navigation Tabs */}
          <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* TAB 1: PROJECTS */}
          {activeTab === "projects" && (
            <ProjectsList onSelectProject={setSelectedProject} />
          )}

          {/* TAB 2: EXPERIENCE */}
          {activeTab === "experience" && <ExperienceTimeline />}

          {/* TAB 3: CONTACT FORM */}
          {activeTab === "contact" && <ContactForm />}
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
