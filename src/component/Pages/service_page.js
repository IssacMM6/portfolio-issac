import React from "react";
import "./css/service_page.css";
import { SVGPIC } from "../pic/svg_pic";
import { Link } from "react-router-dom";

function ServicePage() {
  let moreMessageRef = React.useRef();
  let lessMessageRef = React.useRef();
  return (
    <div className="service-page">
      <div className="items-center">
        <p className="fn-poppins-r service-message">
          <span className="fn-poppins-semi-b h1">
            Hi there, My name is Issac.
          </span>
          <br />
          <br />I built a beautiful website, hand-crafted website and I love to
          do it for you. I always communicate with my client and make a Website
          based on what the client wanted. You can talk friendly with me,{" "}
          <span
            className="service-message-btn"
            ref={moreMessageRef}
            onClick={() => {
              moreMessageRef.current.style.display = "none";
              lessMessageRef.current.style.display = "block";
            }}
          >
            +more
          </span>
          <span ref={lessMessageRef} style={{ display: "none" }}>
            send a message or email any times and I will reply to you as soon as
            possible ;)
            <span
              className="service-message-btn"
              onClick={() => {
                moreMessageRef.current.style.display = "inline-block";
                lessMessageRef.current.style.display = "none";
              }}
            >
              -less
            </span>
          </span>
        </p>
      </div>
      <div
        className="items-center service-message-pic"
        style={{ marginBottom: "100px" }}
      >
        <img src={SVGPIC.show_all} alt="hand up" width="300px" height="300px" />
      </div>
      <div className="items-center">
        <p className="fn-poppins-r service-message">
          <span className="fn-poppins-semi-b h1">Services, To My Client</span>
          <br />
          <br />
          These are services, I can offer to my client.
        </p>
      </div>
      <div className="service-card">
        <div className="card">
          <div className="circle fn-poppins-r">100%</div>
          <p className="fn-poppins-r">
            Client <br />
            Communication
          </p>
        </div>
        <div className="card">
          <div className="circle fn-poppins-r">100%</div>
          <p className="fn-poppins-r">
            Website <br />
            Responsive
          </p>
        </div>
        <div className="card">
          <div className="circle fn-poppins-r">100%</div>
          <p className="fn-poppins-r">
            Refresh <br />
            Webdesign
          </p>
        </div>
      </div>
      <div
        className="items-center service-message-pic"
        style={{ marginBottom: "100px" }}
      >
        <img src={SVGPIC.thumb_up} alt="hand up" width="300px" height="300px" />
      </div>
      <div className="items-center">
        <p className="fn-poppins-r service-message">
          <span className="fn-poppins-semi-b h1">THINGS I CAN DO</span>
          <br />
          <br />
          These are the teachnology I use to build a website and there is more.
        </p>
      </div>
      <div className="items-center service-message-pic">
        <img src={SVGPIC.boxes} alt="hand up" width="300px" height="300px" />
      </div>

      <div className="items-center">
        <p className="fn-poppins-r service-message">
          For the frontend developement, I use Bootstrap, React, Sass, HTML, Css
          and other frontend libaray.
        </p>
      </div>
      <div className="img-icon-list">
        <div className="img-icon-con">
          <img src={SVGPIC.html} alt="html-icon" />
          <img src={SVGPIC.css} alt="html-icon" />
          <img src={SVGPIC.bootstrap} alt="html-icon" />
        </div>
        <div className="img-icon-con">
          <img src={SVGPIC.sass} alt="html-icon" />
          <img src={SVGPIC.react} alt="html-icon" />
        </div>
      </div>
      <div className="items-center">
        <p className="fn-poppins-r service-message">
          For the backend development, I use MySQL, MongoDB, Node js,
          Javascript, Typescript, Jquery and other backend library.
        </p>
      </div>
      <div className="img-icon-list">
        <div className="img-icon-con">
          <img src={SVGPIC.node} alt="html-icon" />
          <img src={SVGPIC.js} alt="html-icon" />
          <img src={SVGPIC.ts} alt="html-icon" />
        </div>
      </div>
      <div className="items-center">
        <p className="fn-poppins-r service-message">
          I also draw vector Illustration and use figma to prototype webpages.
          Adobe Illustrator, Adobe Photoshop and Inkscape are my mostly use
          software to draw a vector graphic.
        </p>
      </div>
      <div className="img-icon-list">
        <div className="img-icon-con">
          <img src={SVGPIC.ai} alt="html-icon" />
          <img src={SVGPIC.ps} alt="html-icon" />
          <img src={SVGPIC.inkscape} alt="html-icon" />
        </div>
      </div>
      <div className="items-center">
        <p className="fn-poppins-r work-together">
          <span className="fn-poppins-semi-b h1">Let's Work Together</span>
          <br />
        </p>
      </div>
      <div className="items-center" style={{ marginBottom: "100px" }}>
        <Link
          to="/contact"
          className="btn-dark"
          style={{ textDecoration: "none", color: "white" }}
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default ServicePage;
