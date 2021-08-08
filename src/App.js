import "./App.css";
import React from "react";
import LandingPage from "./component/Pages/landing_page";
import LogoButton from "./component/custom_button/logo_btn";
import BargerButton from "./component/custom_button/barger_btn";
import RadioButtonGroup from "./component/custom_button/radio_btn_group";
import ServicePage from "./component/Pages/service_page";
import ContactPage from "./component/Pages/contact_page";

function App() {
  const [bargerClick, setBargerClick] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const bargarMenu = React.useRef();
  const homeRef = React.useRef();
  const serviceRef = React.useRef();
  const contactRef = React.useRef();
  return (
    <div className="App">
      <nav className="items-center jc-s-around nav-section">
        <LogoButton />
        <ul className="nav-bar fn-poppins-semi-b" ref={bargarMenu}>
          <li
            className="nav-bar-list"
            onClick={() => {
              homeRef.current.click();
              bargarMenu.current.style.display = "none";
              setBargerClick(false);
            }}
          >
            Home
          </li>
          <li
            className="nav-bar-list"
            onClick={() => {
              serviceRef.current.click();
              bargarMenu.current.style.display = "none";
              setBargerClick(false);
            }}
          >
            Service
          </li>
          <li
            className="nav-bar-list"
            onClick={() => {
              contactRef.current.click();
              bargarMenu.current.style.display = "none";
              setBargerClick(false);
            }}
          >
            Contact
          </li>
        </ul>
        <BargerButton
          cName="barger-pos"
          selected={bargerClick}
          onClick={(s) => {
            if (s === true) bargarMenu.current.style.display = "flex";
            if (s === false) bargarMenu.current.style.display = "none";
            setBargerClick(s);
          }}
        />
      </nav>
      <div className="i-title fn-poret-one ">
        {page === 0 ? <div>Home / Wellcome</div> : null}
        {page === 1 ? <div>Home / Service</div> : null}
        {page === 2 ? <div>Home / Contact</div> : null}
      </div>
      <OpenCV />
      <RadioButtonGroup
        cName="radio-gp"
        currentTarget={(t) => setPage(t)}
        refHome={homeRef}
        refService={serviceRef}
        refContact={contactRef}
      />
      <main>
        <LandingPage />
        {/* <ServicePage /> */}
        {/* <ContactPage /> */}
      </main>
      <footer>PORTFOLIO BY ISSAC</footer>
    </div>
  );
}

export default App;

function OpenCV() {
  const refContainer = React.useRef();
  const [openCV, setOpenCV] = React.useState(true);
  return (
    <div className="download-cv fn-poppins-semi-b" ref={refContainer}>
      {openCV === true ? <div>Download CV</div> : <div></div>}
      <div>
        {openCV === true ? (
          <button className="fn-poppins-semi-b">Download</button>
        ) : null}
        <button
          type="button"
          onClick={() => {
            setOpenCV((f) => !f);
            if (openCV === false) {
              refContainer.current.style.borderTop = "5px solid black";
              refContainer.current.style.borderBottom = "5px solid black";
            }
            if (openCV === true) {
              refContainer.current.style.borderTop = "none";
              refContainer.current.style.borderBottom = "none";
            }
          }}
        >
          {openCV === true ? <span>&times;</span> : "CV"}
        </button>
      </div>
    </div>
  );
}
