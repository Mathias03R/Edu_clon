import React from "react";
import "./Footer.css";

import FacebookIcon from "../assets/FacebookIcon.png";
import LinkedinIcon from "../assets/LinkedinIcon.png";
import InstagramIcon from "../assets/InstagramIcon.png";
import PhoneIcon from "../assets/PhoneIcon.png";
import MailIcon from "../assets/MailIcon.png";

function Footer() {
  return (
    <footer>
      <div className="mainFooterStyle">
        <div className="sectionStyle">
          <div className="sectionTitle">
            <h4>Contáctanos</h4>
          </div>
          <address>
            <ul>
              <li>
                <img src={PhoneIcon} alt="Phone Icon" className="iconStyle" />
                &nbsp;(51) 625-3900
              </li>
              <li>
                <img src={PhoneIcon} alt="Phone Icon" className="iconStyle" />
                &nbsp;(51) 999-999-999
              </li>
              <li>
                <img src={MailIcon} alt="Email Icon" className="iconStyle" />
                &nbsp;example1@eduhg.com
              </li>
              <li>
                <img src={MailIcon} alt="Email Icon" className="iconStyle" />
                &nbsp;example2@eduhg.com
              </li>
            </ul>
          </address>
        </div>

        <div className="sectionStyle">
          <div>
            <h4>Productos para</h4>
          </div>
        </div>

        <div className="sectionStyle">
          <div className="sectionTitle">
            <h4>Síguenos</h4>
          </div>
          <div className="socialMediaLinks">
            <a href="#" id="logo_facebook">
              <img src={FacebookIcon} alt="logo Facebook" className="iconStyle" />
            </a>
            <a href="#" id="logo_linkedin">
              <img src={LinkedinIcon} alt="logo Linkedin" className="iconStyle" />
            </a>
            <a href="#" id="logo_instagram">
              <img src={InstagramIcon} alt="logo Instagram" className="iconStyle" />
            </a>
          </div>
        </div>
      </div>

      <div className="copyStyle">
        <p>Edú Holding Group - Copyright © 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
