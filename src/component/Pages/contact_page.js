import React from "react";
import "./css/contact_page.css";
import emailjs from "emailjs-com";

function ContactPage() {
  const [nameInput, setNameInput] = React.useState("");
  const [commentInput, setCommentInput] = React.useState("");
  const [assessCode, setAssessCode] = React.useState(0);

  function sendEmail(e) {
    e.preventDefault();
    let flag = true;

    if (nameInput === "") {
      flag = false;
      setAssessCode(3);
    }
    if (commentInput === "") {
      flag = false;
      setAssessCode(3);
    }

    if (flag === true) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            setAssessCode(1);
            console.log(result.text);
          },
          (e) => {
            console.log(e.text);
          }
        );
      flag = false;
    }
  }
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
          Feel free to send me a message , Fill the input and send me : <br />(
          <span className="color-danger"> *</span> = input required)
        </p>
        <form className="form-input fn-poppins-r" onSubmit={sendEmail}>
          <label>
            Name <span className="color-danger">*</span>
          </label>
          <br />
          <input
            name="from_name"
            placeholder="Your name..."
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
            value={nameInput}
          />
          <br />
          <label>
            Comment <span className="color-danger">*</span>
          </label>
          <br />
          <textarea
            placeholder="Write your comment...."
            onChange={(e) => {
              setCommentInput(e.target.value);
            }}
            value={commentInput}
            name="message"
          />
          <br />

          <button
            type="submit"
            className="fn-poppins-semi-b btn-dark ml-0"
            onMouseLeave={() => {
              setAssessCode(0);
            }}
            onClick={() => {}}
          >
            {assessCode === 0
              ? "Send Email"
              : assessCode === 1
              ? "Email Sended"
              : "Input Required"}
          </button>
        </form>
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
          <button
            className="link-dark un-line"
            onClick={() => {
              window.open(
                "https://www.facebook.com/profile.php?id=100054497664282",
                "_blank"
              );
            }}
          >
            . Facebook
          </button>
          <button
            className="link-dark un-line"
            onClick={() => {
              window.open(
                "https://discord.com/channels/@me/727467527134904411",
                "_blank"
              );
            }}
          >
            . Discord
          </button>
          <button
            className="link-dark un-line"
            onClick={() => {
              window.open("https://github.com/IssacMM6", "_blank");
            }}
          >
            . GitHub
          </button>
          <br />
          Email & Phone Number :<br />
          <br />
          issacmm64@gmail.com <br />
          (+95) 9250424923
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
