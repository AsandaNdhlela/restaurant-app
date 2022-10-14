import React from "react";
import "./Reservations.css";

const Reservations = () => {
  return (
    <div className="reservations" id="Reservation">
      <div className="reservations-wrapper">
        <div className="reservation-chefImg">
          <img
            src="https://media.istockphoto.com/photos/portrait-of-confident-black-female-chef-at-restaurant-kitchen-looking-picture-id1394055791?b=1&k=20&m=1394055791&s=170667a&w=0&h=q9UBPDAqKud_Yb8apkzLIOTsPNbRRM5MUXjvT5SFhKQ="
            alt=""
          />
        </div>
        <div className="reservation-content">
          <h1 className="reservation-heading">Book a Table</h1>
          <h2 className="reservation-subHeading">Make Reservation</h2>
          <div className="reservation-form">
            <div className="form-left">
              <label className="label-input">Name</label>
              <input type="text" placeholder="Your Name" required="true" />
              <label className="label-input">Phone</label>
              <input type="text" required="true" placeholder="Phone" />
              <label className="label-input">Time</label>
              <input type="time" required="true" />
            </div>
            <div className="form-right">
              <label className="label-input">Email</label>
              <input type="text" placeholder="Email" required="true" />
              <label className="label-input">Date</label>
              <input type="date" placeholder="Date" required="true" />
              <label className="label-input">Table For </label>
              <input
                type="number"
                placeholder="Table"
                required="true"
                min={1}
                max={10}
              />
            </div>
          </div>
          <button>Make a Reservation</button>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
