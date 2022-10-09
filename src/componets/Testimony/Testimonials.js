import React from "react";
import "./Testimonials.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonials = ({ items }) => {
  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-content">
          <h1 className="testimonials-heading">Testimony</h1>
          <h2 className="testimonials-subHeading">Happy Customer</h2>
          <div className="testimonials-slider">
            <Carousel
              showStatus={false}
              showArrows={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              showIndicators={false}
              thumbWidth={50}
              // width={700}
            >
              {items.map((info) => {
                return (
                  <div className="testimonials-card">
                    <div className="testimonial-img">
                      <img src={info.userImg} alt="" />
                    </div>

                    <p className="testimony">{info.testimony1}</p>
                    <p className="testimony">{info.testimony2}</p>
                    <h2 className="testimonial-name">{info.userName}</h2>
                    <h4 className="testimonial-occupation">
                      {info.occupation}
                    </h4>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
