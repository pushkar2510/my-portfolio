"use client";

import React, { useState } from "react";
import { TabNav, TabType } from "@/components/TabNav";

interface TabControllerProps {
  projectsSection: React.ReactNode;
  experienceSection: React.ReactNode;
  contactSection: React.ReactNode;
}

export const TabController: React.FC<TabControllerProps> = ({
  projectsSection,
  experienceSection,
  contactSection,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("projects");

  return (
    <>
      {/* Main Navigation Tabs */}
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* All sections rendered in DOM for SEO; visibility toggled via CSS */}
      <div style={{ display: activeTab === "projects" ? "block" : "none" }}>
        {projectsSection}
      </div>

      <div style={{ display: activeTab === "experience" ? "block" : "none" }}>
        {experienceSection}
      </div>

      <div style={{ display: activeTab === "contact" ? "block" : "none" }}>
        {contactSection}
      </div>
    </>
  );
};

