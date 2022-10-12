import React from "react";
import "./Chefs.css";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Chefs = ({ items }) => {
  return (
    <div className="chefs-container">
      <div className="chefs-wrapper">
        <div className="chefs">
          <h1 className="chef-heading">Chef</h1>
          <h2 className="chefs-subHeading">Our Master Chef</h2>
        </div>
        <div className="chefs-section">
          {items.map((Value) => {
            return (
              <div className="chefs-aboutCards">
                <div className="chefs-card">
                  <div className="chef-profile">
                    <img src={Value.chefImg} alt="" />
                  </div>
                  <div className="chef-info">
                    <h3 className="chef-name">{Value.chefName}</h3>
                    <h4 className="chef-position">{Value.chefPosition}</h4>
                    <ul className="chef-socials">
                      <li>
                        <a href={Value.chefLink1}>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href={Value.chefLink2}>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href={Value.chefLink3}>
                          <SiGmail />
                        </a>
                      </li>
                      <li>
                        <a href={Value.chefLink4}>
                          <AiOutlineInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
