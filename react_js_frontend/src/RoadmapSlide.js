import React from "react";

// PUBLIC_INTERFACE
function RoadmapSlide() {
  /**
   * Displays the product roadmap as a modern, professional table suitable for slide decks.
   * Columns: Feature/Description, ETA ("July", "August", "September" grouped by complexity).
   */
  // Features grouped by complexity and assigned month ETA:
  // July: Simpler features
  // August: Medium complexity
  // September: Complex/custom/enterprise features
  const roadmapRows = [
    {
      desc: "Jira: Requirements Sync",
      eta: "July"
    },
    {
      desc: "Confluence/Notion Docs: Import & Sync",
      eta: "July"
    },
    {
      desc: "Gerrit, GitLab, Bitbucket: Code Import",
      eta: "July"
    },
    {
      desc: "Integration: Code Review/Validation Tools",
      eta: "August"
    },
    {
      desc: "AI-powered Refactor in Code Generation",
      eta: "August"
    },
    {
      desc: "Live Code & Preview",
      eta: "August"
    },
    {
      desc: "Native/Embedded Device Support",
      eta: "August"
    },
    {
      desc: "Figma Integration (Enterprise)",
      eta: "September"
    },
    {
      desc: "AWS Connect, Terraform Integration",
      eta: "September"
    },
    {
      desc: "Smart Extraction: User Stories from Figma",
      eta: "September"
    },
    {
      desc: "Enterprise Custom Plan-phase Refactoring",
      eta: "September"
    },
    {
      desc: "Predefined Workflows: Plan · Design · Code",
      eta: "September"
    },
    {
      desc: "Test Execution: Custom Tool Integration",
      eta: "September"
    },
    {
      desc: "Test Case Export to Enterprise Tools",
      eta: "September"
    }
  ];

  // Color helper for ETA badge
  const etaBadgeColor = (eta) => {
    if (eta === "July") return "roadmap-eta-july";
    if (eta === "August") return "roadmap-eta-august";
    if (eta === "September") return "roadmap-eta-september";
    return "";
  };

  return (
    <div className="slide roadmap-slide-table-wrap">
      <h2 className="slide-title roadmap-main-title">Product Roadmap</h2>
      <div className="roadmap-slide-table-frame">
        <table className="roadmap-table" role="table" aria-label="Product Roadmap table">
          <thead>
            <tr>
              <th className="roadmap-th desc">Feature / Description</th>
              <th className="roadmap-th eta">ETA</th>
            </tr>
          </thead>
          <tbody>
            {roadmapRows.map((row, i) => (
              <tr className="roadmap-table-row" key={i}>
                <td className="roadmap-td desc">{row.desc}</td>
                <td className={`roadmap-td eta`}>
                  <span className={`roadmap-eta-badge ${etaBadgeColor(row.eta)}`} aria-label={row.eta}>
                    {row.eta}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="roadmap-table-footer-divider" aria-hidden="true"></div>
    </div>
  );
}

export default RoadmapSlide;
