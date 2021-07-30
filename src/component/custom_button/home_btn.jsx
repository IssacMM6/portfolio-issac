import React from "react";
import "./css/radio.css";

function HomeButton({ selected, onClick }) {
  const isSelected = selected ? "home-btn-on" : "home-btn-off";
  const switchClass = `home-btn ${isSelected}`;
  const clickHandle = () => {
    onClick(!selected);
  };
  return (
    <React.Fragment>
      <div className={switchClass} onClick={clickHandle}>
        <svg width="20px" height="20px" viewBox="0 0 11.90625 11.90625">
          <g
            transform="translate(-15.702216,1.4081386)"
            style={{ display: "inline" }}
          >
            <g
              transform="matrix(1.9409123,0,0,1.9307291,-83.074576,-306.55959)"
              style={{ display: "inline" }}
            >
              <path
								className={"home-path"}
                style={{
                  strokeWidth: "2.25906",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
                d="m 144.5625,603.59375 -10.60547,11.22461 c 0,0 -0.0433,0.056 -0.0215,0.125 0.0221,0.07 0.0605,0.043 0.0605,0.043 l 2.9961,-0.008 v 8.83007 c 0,0.74291 0.59888,1.3418 1.34179,1.3418 h 3.56836 v -4.12305 h 5.49805 v 4.12305 h 3.56836 c 0.74292,0 1.3418,-0.59889 1.3418,-1.3418 v -8.87304 l 2.9375,-0.008 c 0,0 0.0826,0.0103 0.11523,-0.0547 0.0322,-0.0583 -0.0273,-0.11524 -0.0273,-0.11524 z"
                transform="matrix(0.26458333,0,0,0.26458333,15.701431,-1.4081386)"
              />
            </g>
          </g>
        </svg>
      </div>
    </React.Fragment>
  );
}

export default React.memo(HomeButton);
