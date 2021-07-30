import "./App.css";
import React from "react";
import LandingPage from "./component/Pages/landing_page";
import LogoButton from "./component/custom_button/logo_btn";
import BargerButton from "./component/custom_button/barger_btn";
function App() {
  const [bargerClick, setBargerClick] = React.useState(false);
  return (
    <div>
      <nav>
        <div>
          <LogoButton />
          <ul>
            <li>Home</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
          <BargerButton
            selected={bargerClick}
            onClick={(s) => setBargerClick(s)}
          />
        </div>
      </nav>
      <LandingPage />
    </div>
  );
}

export default App;
