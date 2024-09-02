import React from "react";
import banner from "../assets/poolimg.mp4";
import AboutText from "../components/HomeSec/AboutText";
import Profile from "../components/HomeSec/Profile";

function About() {
  return (
    <div>
      <div className="w-full object-contain">
        <video autoPlay loop muted id="video">
          <source src={banner} />
        </video>
      </div>
      <div>
        <AboutText/>
      </div>
      <div>
        <Profile/>
      </div>
    </div>
  );
}

export default About;
