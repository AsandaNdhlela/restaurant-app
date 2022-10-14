import React from "react";
import "./Footer.css";
import { BsInstagram, BsTwitter, BsSuitHeartFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-box">
          <h1 className="footerBox-heading">Sushie</h1>
          <p className="footerBox-paragraph">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul className="footerBox-socials">
            <li>
              <a href="#blank">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="#blank">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#blank">
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <h1 className="footerBox-heading">Open Hours</h1>
          <div className="footerBox-open">
            <div className="footerBox-time">
              <li>Monday</li>
              <li>Tuesday</li>
              <li>Wednesday</li>
              <li>Thursday</li>
              <li>Friday</li>
              <li>Saturday</li>
              <li>Sunday</li>
            </div>
            <div className="footerBox-time">
              <li>9:00 - 00:00</li>
              <li>9:00 - 00:00</li>
              <li>9:00 - 00:00</li>
              <li>9:00 - 00:00</li>
              <li>9:00 - 02:00</li>
              <li>9:00 - 02:00</li>
              <li>Closed</li>
            </div>
          </div>
        </div>
        <div className="footer-box">
          <h1 className="footerBox-heading">Newsletter</h1>
          <p className="footerBox-paragraph">
            Far far away, behind the word mountains, far from the countries.
          </p>
          <input type="text" placeholder="Enter email address" />
          <button className="footerBox-subscribebtn">Subscribe</button>
        </div>
        <div className="footer-box">
          <h1 className="footerBox-heading">Instagram</h1>
          <div className="footerBox-story">
            <img
              src="https://www.eatout.co.za/wp-content/uploads/2015/02/meals-under.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="footer-paragraph">
        <p>
          Copyright ©2022 All rights reserved | This template is made with
          {""} <BsSuitHeartFill /> by Asanda Ndhlela
        </p>
      </div>
    </div>
  );
};

export default Footer;
