import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="home" id="Home">
      <nav className="Nav-bar">
        <div className="right-logo">
          <img
            src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/250437976_404318181437232_7271279621934097094_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SW4QMAu2GGgAX-Xd5Lv&tn=SgXVu6NG6220IiYE&_nc_ht=scontent-cpt1-1.xx&oh=00_AT8QL1sf3D2qbLI4y2kXfoy9IrWbm2lIcU9pODziqu_afw&oe=633A1CDD"
            alt=""
            className="logo-img"
          />
          <h1 className="logo">Sushie King</h1>
        </div>
        <div className="left-links">
          <ul className="links">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Specialities">Specialities</a>
            </li>
            <li>
              <a href="#Reservation">Reservation</a>
            </li>
            <li>
              <a href="#Stories">Stories</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="home-content">
        <div className="home-left">
          <h1 className="heading">We love</h1>
          <h1 className="heading">Delicious Foods</h1>
          <p className="home-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            reprehenderit
          </p>
          <p className="home-paragraph">
            provident corporis distinctio quidem amet iste quos similique
          </p>
          <div className="cards">
            <div className="home-card">
              <img
                src="https://pbs.twimg.com/media/E5wbizwXEAUsopg.jpg"
                alt=""
              />
              <div className="food-name">
                <h3> Big Meal</h3>
              </div>
            </div>
            <div className="home-card">
              <img
                src="https://i2.wp.com/bayedenews.com/wp-content/uploads/2020/09/x3-34.jpg?fit=1600%2C1290&ssl=1"
                alt=""
              />
              <div className="food-name">
                <h3> Usu meat</h3>
              </div>
            </div>
            <div className="home-card">
              <img
                src="https://i.ytimg.com/vi/clKTsFmcBqM/maxresdefault.jpg"
                alt=""
              />
              <div className="food-name">
                <h3> Ujeqe & carrots</h3>
              </div>
            </div>
          </div>
          <button className="book-tableBtn">book a table</button>
        </div>

        <div className="home-right">
          {/* <img
            src="https://pbs.twimg.com/media/D7zeZ_rXoAEIXsn.jpg"
            alt=""
            srcset=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
