import React from "react";
import "./style.css";
import ProfileSection from "./components/ProfileSection";
import LinksSection from "./components/LinksSection";
import SocialLinks from "./components/SocialLinks";
import StatsSection from "./components/StatsSection";

function App() {
  return (
    <>
      <div className="bg-gradient"></div>
      <div className="container">
        <ProfileSection />
        <LinksSection />
        <SocialLinks />
        <StatsSection />
      </div>
    </>
  );
}

export default App;