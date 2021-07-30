import React from "react";
import "./css/logo.css"

const lineStyle = {
  fill: "none",
  stroke: "#000000",
  strokeWidth: "1.19063",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: "4",
  strokeDasharray: "none",
  strokeOpacity: "1",
};

function LogoButton({cName}) {
  return (
    <div className={cName} style={{width:"50px",height:"50px",cursor:"pointer"}}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 17.991667 17.991667"
        xmlns="http://www.w3.org/2000/svg"style={lineStyle} 
        version="1.1"
      >
        <g
          transform="translate(-15.702216,1.4081386)"
          style={{ display: "inline" }}
        >
          <path style={lineStyle} d="M 23.120415,7.464771 17.884381,11.416949 18.074356,0.85477469 31.735229,11.573627 31.718766,1.2078695 28.633586,3.4660867" />
          <path style={lineStyle} d="m 17.998176,14.388677 h 3.597929" />
          <path style={lineStyle} d="m 24.083109,14.43949 h 7.604732" />
        </g>
      </svg>
    </div>
  );
}

export default LogoButton;
