import "./stylesheets/App.css";
import "./stylesheets/contact.css";

import emailsvg from "./svgs/email.svg";
import linkedinsvg from "./svgs/linkedin.svg";
import githubsvg from "./svgs/github.svg";

import copysvg from "./svgs/copy.svg";
import opensvg from "./svgs/open.svg";

function copy() {
  let copymsg = document.querySelector(".copied-text");
  navigator.clipboard.writeText("gregoryyoung617@gmail.com");
  copymsg.style.opacity = "1";
  setTimeout(() => {
    copymsg.style.opacity = "0";
  }, "2000");
}

function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="section-title">Contact</div>
        <div className="contact-container">
          <div className="offset-border section-background">
            <div className="logo-container column-container">
              <img
                className="contact-svg svg-grow-animation"
                src={emailsvg}
              ></img>
              <a
                href="https://www.linkedin.com/in/gregory-young-76170024b/"
                target="_blank"
              >
                <img
                  className="contact-svg svg-grow-animation svg-up-animation"
                  src={linkedinsvg}
                ></img>
              </a>
              <a href="https://github.com/gregoryyoung617" target="_blank">
                <img
                  className="contact-svg svg-grow-animation svg-up-animation"
                  src={githubsvg}
                ></img>
              </a>
            </div>
            <div className="info-container column-container">
              <div className="contact-text-container">
                <h1 className="contact-text">gregoryyoung617@gmail.com</h1>
                <div className="svg-link svg-grow-animation svg-up-animation">
                  <img
                    src={copysvg}
                    className="text-svg"
                    onClick={() => copy()}
                  ></img>
                  <div className="copied-text">Copied!</div>
                </div>
              </div>
              <div className="contact-text-container">
                <a
                  href="https://www.linkedin.com/in/gregory-young-76170024b/"
                  target="_blank"
                >
                  <h1 className="contact-text">LinkedIn</h1>
                </a>

                <div className="svg-link svg-grow-animation svg-up-animation">
                  <a
                    href="https://www.linkedin.com/in/gregory-young-76170024b/"
                    target="_blank"
                  >
                    <img src={opensvg} className="text-svg"></img>
                  </a>
                </div>
              </div>
              <div className="contact-text-container">
                <a href="https://github.com/gregoryyoung617" target="_blank">
                  <h1 className="contact-text">GitHub</h1>
                </a>

                <div className="svg-link svg-grow-animation svg-up-animation">
                  <a href="https://github.com/gregoryyoung617" target="_blank">
                    <img src={opensvg} className="text-svg"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
