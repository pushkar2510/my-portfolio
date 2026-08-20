import React from "react";
import { Header } from "@/components/Header";
import { ProjectsList } from "@/components/ProjectsList";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { TabController } from "@/components/TabController";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-300 font-mono flex flex-col justify-between selection:bg-amber-400/20 selection:text-amber-300">
      <div>
        {/* Header / Hero Section */}
        <Header />

        {/* Main Content Area — all sections server-rendered for SEO */}
        <main className="max-w-2xl mx-auto px-4 sm:px-6 mb-12">
          <TabController
            projectsSection={<ProjectsList />}
            experienceSection={<ExperienceTimeline />}
            contactSection={<ContactForm />}
          />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

