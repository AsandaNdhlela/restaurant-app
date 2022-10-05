import React from "react";
import "./AboutInfo.css";
import CountUp from "react-countup";

const AboutInfo = () => {
  return (
    <div className="AboutInfo">
      <div className="aboutInfo-content">
        <div className="aboutInfo-slot">
          <h1 className="aboutInfo-count">
            <CountUp delay={2} end={18} duration={5} />
          </h1>
          <h2 className="aboutInfo-heading">Years of Experienced</h2>
        </div>
        <div className="aboutInfo-slot">
          <h1 className="aboutInfo-count">
            + <CountUp delay={2} end={17000} duration={5} />
          </h1>
          <h2 className="aboutInfo-heading">Happy Customers</h2>
        </div>
        <div className="aboutInfo-slot">
          <h1 className="aboutInfo-count">
            <CountUp delay={2} end={46} duration={5} />
          </h1>
          <h2 className="aboutInfo-heading">Branches Across SA</h2>
        </div>
        <div className="aboutInfo-slot">
          <h1 className="aboutInfo-count">
            <CountUp delay={2} end={300} duration={5} />
          </h1>
          <h2 className="aboutInfo-heading">Working Days</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
