import React from "react";
import "./Specials.css";
import Data from "./data/menuData";

class Specials extends React.Component {
  constructor(props) {
    super(props);

    this.state = { menudata: Data.data };
  }
  render() {
    return (
      <div>
        <div className="specials-container" id="Specialities">
          <div className="specials-wrapper">
            <div className="specials-head">
              <h1 className="specials-heading">Specialties</h1>
              <h2 className="specials-subHeading">Our Menu</h2>
            </div>
            <div className="cards-menu">
              {this.state.menudata.map((data) => {
                return (
                  <div className="specials-menu">
                    <div className="specials-meals">
                      <h2 className="breakfast-heading">{data.day}</h2>
                      <div className="menu-list">
                        <div className="menu-img">
                          <img src={data.url} alt="" />
                        </div>
                        <div className="menu-name">
                          <div className="name-price">
                            <h2>{data.foodName}</h2>
                            <sub className="menu-price">{data.price}</sub>
                          </div>
                          <div className="menu-ingredients">
                            {data.ingredients}
                          </div>
                        </div>
                      </div>
                      <div className="menu-list">
                        <div className="menu-img">
                          <img src={data.url1} alt="" />
                        </div>
                        <div className="menu-name">
                          <div className="name-price">
                            <h2>{data.foodName1}</h2>
                            <sub className="menu-price">{data.price1}</sub>
                          </div>
                          <div className="menu-ingredients">
                            {data.ingredients1}
                          </div>
                        </div>
                      </div>
                      <div className="menu-list">
                        <div className="menu-img">
                          <img src={data.url2} alt="" />
                        </div>
                        <div className="menu-name">
                          <div className="name-price">
                            <h2>{data.foodName2}</h2>
                            <sub className="menu-price">{data.price2}</sub>
                          </div>
                          <div className="menu-ingredients">
                            {data.ingredients2}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Specials;
