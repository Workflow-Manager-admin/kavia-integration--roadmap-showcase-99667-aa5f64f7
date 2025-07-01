import React from "react";

// PUBLIC_INTERFACE
function RoadmapSlide() {
  /**
   * Slide listing product features/roadmap in clean format.
   */
  const roadmap = [
    {
      heading: "Integrations",
      items: [
        "Jira for Requirements Sync",
        "Confluence & Notion – Document Import/Exports & Sync",
        "Figma Integration for Enterprise",
        "Gerrit, GitLab, Bitbucket for Code Import",
        "AWS Enterprise Connect, Terraform Integration"
      ]
    },
    {
      heading: "Code & Review",
      items: [
        "Integration with Code Review/Validation Tools",
        "Refactor in Code Generation",
        "Code Maintenance with Live Preview",
        "Native/Embedded device support with Preview"
      ]
    },
    {
      heading: "Workflow & Customization",
      items: [
        "Extraction/Validation of User Stories from Figma",
        "Plan Phase Refactoring for Enterprise Customization",
        "Predefined Workflows: Plan · Design · Code"
      ]
    },
    {
      heading: "Testing & Export",
      items: [
        "Test Execution with Custom Tool Integration",
        "Export Test Cases to Enterprise Tools"
      ]
    }
  ];

  return (
    <div className="slide roadmap-slide">
      <h2 className="slide-title">Product Features & Roadmap</h2>
      <div className="roadmap-list">
        {roadmap.map((section) => (
          <div className="roadmap-section" key={section.heading}>
            <div className="roadmap-heading">{section.heading}</div>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx} className="roadmap-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoadmapSlide;
