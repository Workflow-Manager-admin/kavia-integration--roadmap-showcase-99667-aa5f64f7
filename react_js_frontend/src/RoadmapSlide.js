import React from "react";

// PUBLIC_INTERFACE
function RoadmapSlide() {
  /**
   * Displays the product roadmap as a modern, professional table suitable for slide decks.
   * Columns: Feature/Description, ETA (groups: Now, Next, Future).
   */
  const roadmapRows = [
    {
      desc: "Jira: Requirements Sync",
      eta: "Now"
    },
    {
      desc: "Confluence/Notion Docs: Import & Sync",
      eta: "Now"
    },
    {
      desc: "Figma Integration (Enterprise)",
      eta: "Now"
    },
    {
      desc: "Gerrit, GitLab, Bitbucket: Code Import",
      eta: "Now"
    },
    {
      desc: "AWS Connect, Terraform Integration",
      eta: "Now"
    },
    {
      desc: "Integration: Code Review/Validation Tools",
      eta: "Next"
    },
    {
      desc: "AI-powered Refactor in Code Generation",
      eta: "Next"
    },
    {
      desc: "Live Code & Preview",
      eta: "Next"
    },
    {
      desc: "Native/Embedded Device Support",
      eta: "Next"
    },
    {
      desc: "Smart Extraction: User Stories from Figma",
      eta: "Future"
    },
    {
      desc: "Enterprise Custom Plan-phase Refactoring",
      eta: "Future"
    },
    {
      desc: "Predefined Workflows: Plan · Design · Code",
      eta: "Future"
    },
    {
      desc: "Test Execution: Custom Tool Integration",
      eta: "Future"
    },
    {
      desc: "Test Case Export to Enterprise Tools",
      eta: "Future"
    }
  ];

  // Use a modern ppt-deck-inspired table, minimal orange accent.
  // We render a table with column headers, one row per feature.

  // Color helper for ETA badge
  const etaBadgeColor = (eta) => {
    if (eta === "Now") return "roadmap-eta-now";
    if (eta === "Next") return "roadmap-eta-next";
    return "roadmap-eta-future";
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
