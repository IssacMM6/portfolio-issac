import React from "react";
import "./css/landing_page.css";
import PointingUpIllustration from "../pic/pointing_up.svg";

function LandingPage() {
  return (
    <div className="landing-page">
      <div>
        <p>
          <span>I Do</span>UI.UX
          <br />
          Frontend & Backend
          <br />
          Webdesign
        </p>
      </div>

      <img
        src={PointingUpIllustration}
        alt="pointing up"
        width="300px"
        height="300px"
      />
    </div>
  );
}

export default LandingPage;
