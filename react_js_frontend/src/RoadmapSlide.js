import React from "react";

// PUBLIC_INTERFACE
function RoadmapSlide() {
  /**
   * Displays the product roadmap as a modern, professional table suitable for slide decks.
   * Columns: Feature/Description, ETA ("July (Simple)", "August (Simple/Complex)", "September (Complex)" based on complexity).
   */
  // Features now explicitly marked as 'Simple' or 'Complex', and assigned ETA accordingly.
  const roadmapRows = [
    {
      desc: "Jira: Requirements Sync",
      eta: "July (Simple)",
      simpleOrComplex: "simple"
    },
    {
      desc: "Confluence/Notion Docs: Import & Sync",
      eta: "July (Simple)",
      simpleOrComplex: "simple"
    },
    {
      desc: "Gerrit, GitLab, Bitbucket: Code Import",
      eta: "July (Simple)",
      simpleOrComplex: "simple"
    },
    {
      desc: "Integration: Code Review/Validation Tools",
      eta: "August (Simple)",
      simpleOrComplex: "simple"
    },
    {
      desc: "AI-powered Refactor in Code Generation",
      eta: "August (Complex)",
      simpleOrComplex: "complex"
    },
    {
      desc: "Live Code & Preview",
      eta: "August (Complex)",
      simpleOrComplex: "complex"
    },
    {
      desc: "Native/Embedded Device Support",
      eta: "August (Complex)",
      simpleOrComplex: "complex"
    },
    {
      desc: "Figma Integration (Enterprise)",
      eta: "September (Complex)",
      simpleOrComplex: "complex"
    },
    {
      desc: "AWS Connect, Terraform Integration",
      eta: "September (Complex)",
      simpleOrComplex: "complex"
    },
    {
      desc: "Smart Extraction: User Stories from Figma",
      eta: "September (Complex)",
      simpleOrComplex: "complex"
    },
    {
      desc: "Enterprise Custom Plan-phase Refactoring",
      eta: "September (Complex)",
      simpleOrComplex: "complex"
    },
    {
      desc: "Predefined Workflows: Plan · Design · Code",
      eta: "September (Complex)",
      simpleOrComplex: "complex"
    },
    {
      desc: "Test Execution: Custom Tool Integration",
      eta: "September (Complex)",
      simpleOrComplex: "complex"
    },
    {
      desc: "Test Case Export to Enterprise Tools",
      eta: "September (Complex)",
      simpleOrComplex: "complex"
    }
  ];

  // Helper to match the month for color class
  const etaBadgeColor = (eta) => {
    // Extract month (first word)
    const month = eta.split(" ")[0].toLowerCase();
    if (month === "july") return "roadmap-eta-july";
    if (month === "august") return "roadmap-eta-august";
    if (month === "september") return "roadmap-eta-september";
    return "";
  };

  // NEW: Helper for simple/complex styling
  const etaBadgeStyle = (type) => {
    if (type === "simple") return "roadmap-eta-simple";
    if (type === "complex") return "roadmap-eta-complex";
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
                <td className="roadmap-td eta">
                  <span
                    className={
                      `roadmap-eta-badge ${etaBadgeColor(row.eta)} ${etaBadgeStyle(row.simpleOrComplex)}`
                    }
                    aria-label={row.eta}
                  >
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
