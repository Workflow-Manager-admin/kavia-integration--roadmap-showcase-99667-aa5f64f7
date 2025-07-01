import React from "react";

// PUBLIC_INTERFACE
function IntegrationsSlide() {
  /** Slide showcasing the company logo and a grid of integration logos. */
  const integrations = [
    { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/jira.svg" },
    { name: "Confluence", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/confluence.svg" },
    { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg" },
    { name: "Gerrit", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gerrit.svg" },
    { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gitlab.svg" },
    { name: "Bitbucket", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/bitbucket.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonaws.svg" },
    { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/terraform.svg" },
  ];

  return (
    <div className="slide integrations-slide">
      <div className="company-logo-container">
        {/* Placeholder for company logo */}
        <div className="company-logo">
          <span className="company-logo-text">Kavia</span>
        </div>
      </div>
      <h2 className="slide-title">Powerful Integrations</h2>
      <div className="integrations-grid">
        {integrations.map((item) => (
          <div className="integration-cell" key={item.name}>
            <img src={item.logo} alt={item.name + " logo"} className="integration-logo" />
            <span className="integration-label">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntegrationsSlide;
