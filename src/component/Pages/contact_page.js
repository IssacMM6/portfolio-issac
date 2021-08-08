import React from "react";
import "./css/contact_page.css";

function ContactPage() {
  return (
    <div className="contact-con">
      <div className="form-con">
        <p
          className="fn-poppins-r service-message"
          style={{ textAlign: "left" }}
        >
          <span className="fn-poppins-semi-b h1">Send Email</span>
          <br />
          <br />
          Feel free to send me a message , Fill the input and send me :
        </p>
        <div className="form-input fn-poppins-r">
          <label>
            Name <span className="color-danger">*</span>
          </label>
          <br />
          <input />
          <br />
          <label>
            Email <span className="color-danger">*</span>
          </label>
          <br />
          <input />
          <br />
          <label>
            Subject <span className="color-danger">*</span>
          </label>
          <br />
          <input />
          <br />
          <label>
            Comment <span className="color-danger">*</span>
          </label>
          <br />
          <textarea />
          <br />
          <button className="fn-poppins-semi-b btn-dark ml-0">
            Send Email
          </button>
        </div>
      </div>
      <div className="media-con">
        <p
          className="fn-poppins-r service-message"
          style={{ textAlign: "left" }}
        >
          <span className="fn-poppins-semi-b h1">Social Media</span>
          <br />
          <br />
          You can follow me , By clicking the link :
          <br />
          <br />
          <a
            href="https://www.facebook.com/profile.php?id=100054497664282"
            className="link-dark un-line"
          >
            . Facebook
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100054497664282"
            className="link-dark un-line"
          >
            . Instragram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100054497664282"
            className="link-dark un-line"
          >
            . Discord
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100054497664282"
            className="link-dark un-line"
          >
            . LinkIn
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100054497664282"
            className="link-dark un-line"
          >
            . GitHub
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100054497664282"
            className="link-dark un-line"
          >
            . Pinterest
          </a>
          <br />
          Email & Phone Number :<br />
          <br />
          sawissac72@gmail.com <br />
          (+9)250424923
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
