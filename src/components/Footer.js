import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section id="cntct">
        <h3 className="copy">Connect With me</h3>
        <div className="wrapper">
          <div className="button">
            <div className="icon">
              <a
                title="Click it!!"
                href="https://www.facebook.com/profile.php?id=100069889321006"
                target="_blank"
                className="fb"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <span>Facebook</span>
          </div>
          <div className="button">
            <div className="icon">
              <a
                title="Click it!!"
                href="https://twitter.com/sumanthrillex?t=F1UDSIdD3NJYgFDVcwyflA&s=08"
                target="_blank"
                className="tw"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <span>Twitter</span>
          </div>
          <div className="button">
            <div className="icon">
              <a
                title="Click it!!"
                href="https://instagram.com/_sumanthrillex_?igshid=YmMyMTA2M2Y="
                target="_blank"
                className="insta"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <span>Instagram</span>
          </div>
          <div className="button">
            <div className="icon">
              <a
                title="Click it!!"
                href="/"
                target="_blank"
                className="insta"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <span>Github</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
