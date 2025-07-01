import React from "react";

// Simple icon components for roadmap stages
function NowIcon() {
  return (
    <span
      aria-label="Now"
      style={{
        display: 'inline-block',
        width: 22,
        height: 22,
        background: 'linear-gradient(135deg, #FFD580 65%, #E87A41 100%)',
        borderRadius: '50%',
        verticalAlign: 'middle',
        marginRight: 8,
        boxShadow: '0 2px 8px #FFD58055',
      }}
    ></span>
  );
}
function NextIcon() {
  return (
    <span
      aria-label="Next"
      style={{
        display: 'inline-block',
        width: 22,
        height: 22,
        background: 'linear-gradient(135deg, #fff 30%, #FFD580 95%)',
        borderRadius: '50%',
        verticalAlign: 'middle',
        marginRight: 8,
        border: '2.3px solid #E87A41'
      }}
    ></span>
  );
}
function FutureIcon() {
  return (
    <span
      aria-label="Future"
      style={{
        display: 'inline-block',
        width: 22,
        height: 22,
        background: 'linear-gradient(135deg, #fff 40%, #FFD580 95%)',
        borderRadius: '50%',
        verticalAlign: 'middle',
        marginRight: 8,
        border: '2px dashed #E87A41',
        opacity: 0.7,
      }}
    ></span>
  );
}

// PUBLIC_INTERFACE
function RoadmapSlide() {
  /**
   * Professional slide deck-style roadmap: clear phases (Now, Next, Future),
   * each with a modern card, icon, and grouped features.
   */
  const roadmapPhases = [
    {
      label: "Now",
      Icon: NowIcon,
      colorClass: "roadmap-phase-now",
      features: [
        "Jira: Requirements Sync",
        "Confluence/Notion Docs: Import & Sync",
        "Figma Integration (Enterprise)",
        "Gerrit, GitLab, Bitbucket: Code Import",
        "AWS Connect, Terraform Integration"
      ]
    },
    {
      label: "Next",
      Icon: NextIcon,
      colorClass: "roadmap-phase-next",
      features: [
        "Integration: Code Review/Validation Tools",
        "AI-powered Refactor in Code Generation",
        "Live Code & Preview",
        "Native/Embedded Device Support"
      ]
    },
    {
      label: "Future",
      Icon: FutureIcon,
      colorClass: "roadmap-phase-future",
      features: [
        "Smart Extraction: User Stories from Figma",
        "Enterprise Custom Plan-phase Refactoring",
        "Predefined Workflows: Plan · Design · Code",
        "Test Execution: Custom Tool Integration",
        "Test Case Export to Enterprise Tools"
      ]
    }
  ];

  return (
    <div className="slide roadmap-slide-v2">
      <h2 className="slide-title roadmap-main-title">
        Product Roadmap
      </h2>
      <div className="roadmap-deck">
        {roadmapPhases.map((phase) => (
          <section
            className={`roadmap-card ${phase.colorClass}`}
            key={phase.label}
            aria-label={`Roadmap phase: ${phase.label}`}
          >
            <header className="roadmap-card-header">
              <span className={`roadmap-icon`}>
                <phase.Icon />
              </span>
              <h3 className="roadmap-card-title">{phase.label}</h3>
            </header>
            <ul className="roadmap-features">
              {phase.features.map((feat, i) => (
                <li className="roadmap-feature" key={i}>
                  {feat}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="roadmap-deck-divider" aria-hidden="true"></div>
    </div>
  );
}

export default RoadmapSlide;
