import React from "react";
import {
  InstagramFilled,
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import "./footer.css";
import {LOGO_URL} from "../../utils/constant";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer">
          <img
            src={LOGO_URL}
            alt="app-logo"
            className="foooter-logo"
            style={{
              borderRadius: "50%",
              width: "80px",
              height: "80px",
            }}
          />
          <p style={{margin: 0}}>
            Copyright © {new Date().getFullYear()} Instabites
          </p>
          <ul className="social-icon-list" data-testid="social-icon-list">
            <li className="social-icon">
              <InstagramFilled />
            </li>
            <li className="social-icon">
              <FacebookFilled />
            </li>
            <li className="social-icon">
              <TwitterCircleFilled />
            </li>
            <li className="social-icon">
              <LinkedinFilled />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
