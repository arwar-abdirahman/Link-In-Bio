import React from "react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/Abdirahman20053",
      icon: "fab fa-twitter",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/abdirahman.developer",
      icon: "fab fa-instagram",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/abdirahman-abdikadir-335548388/",
      icon: "fab fa-linkedin-in",
    },
    {
      name: "GitHub",
      url: "https://github.com/madani-arab",
      icon: "fab fa-github",
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/abdirahman-abdikadir",
      icon: "fab fa-dribbble",
    }
  ];

  return (
    <section className="social-section fade-in" style={{ animationDelay: "0.6s" }}>
      <div className="social-links">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            onClick={() => console.log('Social click: ${social.name}')}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;