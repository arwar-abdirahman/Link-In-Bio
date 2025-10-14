import React from "react";

const LinksSection = () => {
  const bioLinks = [
    {
      title: "Portfolio Website",
      description: "View my latest projects and work",
      url: "http://abdirahman-developer.vercel.app",
      icon: "fas fa-briefcase",
    },
    {
      title: "YouTube Channel",
      description: "Design tutorials and tech reviews",
      url: "https://youtube.com/",
      icon: "fab fa-youtube",
    },

  
    {
      title: "Book a Call",
      description: "Let's discuss your project",
      url: "https://mail.google.com/mail/u/0/?view=cm&to=m14838842@gmail.com",
      icon: "fas fa-calendar-alt",
    }
  ];

  const handleClick = (url) => {
    window.open(url, "_blank"); // يفتح الرابط في تبويب جديد
  };

  return (
    <section className="links-section">
      {bioLinks.map((link, index) => (
        <div
          key={index}
          className="link-card fade-in"
          style={{ animationDelay: '${(index + 1) * 0.1}s', cursor: 'pointer' }}
          onClick={() => handleClick(link.url)}
        >
          <div className="link-icon">
            <i className={link.icon}></i>
          </div>
          <div className="link-content">
            <h3>{link.title}</h3>
            <p>{link.description}</p>
          </div>
          <div className="link-arrow">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LinksSection;