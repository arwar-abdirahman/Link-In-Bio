import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "40+", label: "Clients" },
    { number: "30+", label: "Projects" },
    { number: "5Y+", label: "Experience" },
  ];

  return (
    <section className="stats-section fade-in" style={{ animationDelay: "0.7s" }}>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
