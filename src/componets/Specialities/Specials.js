import React, { useState } from "react";
import "./Specials.css";
import menuData from "./data/menuData";

const Specials = () => {
  const Data = useState(menuData.data);
  return (
    <div className="specials-container" id="Specialities">
      <div className="specials-wrapper">
        <div className="specials-head">
          <h1 className="specials-heading">Specialties</h1>
          <h2 className="specials-subHeading">Our Menu</h2>
        </div>
        <div className="cards">
          {Data.map((data) => {
            return (
              <div className="specials-menu">
                <div className="specials-meals">
                  <h2 className="breakfast-heading">Monday {data.id}</h2>
                  <div className="menu-list">
                    <div className="menu-img">
                      <img src={data.url} alt="" />
                    </div>
                    <div className="menu-name">
                      <div className="name-price">
                        <h2>{data.foodName}</h2>
                        <sub className="menu-price">{data.price}</sub>
                      </div>
                      <div className="menu-ingredients">{data.ingredients}</div>
                    </div>
                  </div>
                  <div className="menu-list">
                    <div className="menu-img">
                      <img src={data.url} alt="" />
                    </div>
                    <div className="menu-name">
                      <div className="name-price">
                        <h2>{data.foodName}</h2>
                        <sub className="menu-price">{data.price}</sub>
                      </div>
                      <div className="menu-ingredients">{data.ingredients}</div>
                    </div>
                  </div>
                  <div className="menu-list">
                    <div className="menu-img">
                      <img src={data.url} alt="" />
                    </div>
                    <div className="menu-name">
                      <div className="name-price">
                        <h2>{data.foodName}</h2>
                        <sub className="menu-price">{data.price}</sub>
                      </div>
                      <div className="menu-ingredients">{data.ingredients}</div>
                    </div>
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

export default Specials;
