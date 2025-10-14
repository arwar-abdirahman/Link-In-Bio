import React from "react";

const ProfileSection = () => {
  return (
    <section className="profile-section fade-in">
      <div className="profile-image animate-float">
        <img
          src="me.jpeg"
          alt="Abdirahman Andikadir"
        />
      </div>
      <h1 className="profile-name">Abdirahman Andikadir</h1>
      <p className="profile-bio">• UI/UX Designer • Full-Stack Developer</p>
      <div className="flex items-center justify-center gap-1.5
                     text-zinc-400 text-sm tracking-wide
                     ">
                        <span className=" relative w-2 h-2 rounded-full bg-emerald-400 ">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping  "></span>
                        </span>
                        Available for work
                    </div>
    </section>
  );
};

export default ProfileSection;