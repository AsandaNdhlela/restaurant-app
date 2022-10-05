import React from "react";
import "./About.css";
import "react-slideshow-image/dist/styles.css";

const specialImages = [
  {
    img: "https://pbs.twimg.com/media/DnmgtWuUYAA27-e.jpg",
    heading: "Amaqhina and Pap",
  },
  {
    img: "https://pbs.twimg.com/media/Eg0nSEcWAAI_ysJ.jpg",
    heading: "ujeqe and usu meat",
  },
  {
    img: "https://mypumpkin.co.za/wp-content/uploads/2021/09/Mogodu-Pap.jpg",
    heading: "Mogodu and Pap",
  },
];
const About = () => {
  return (
    <div className="about" id="About">
      <div className="about-container">
        <div className="about-img">
          <img src="https://pbs.twimg.com/media/EshVV1eW8AAD5s_.jpg" alt="" />
        </div>
        <div className="about-content">
          <h1 className="about-heading">About</h1>
          <h2 className="about-sub-heading">
            Welcome to Sushie Shisanyama & Restaurant
          </h2>
          <p className="about-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            neque deleniti nulla.
          </p>
          <p className="about-paragraph">
            Ipsam cum expedita vero ipsa repellat similique sapiente,
            accusantium sunt quae rem.
          </p>
          <p className="about-paragraph">
            Sit, debitis. Excepturi maiores architecto voluptatum.
          </p>
          <div className="about-special">
            <h4 className="special-heading">Most Loved Food</h4>
            <div className="special-cards">
              {specialImages.map((specialImage, index) => (
                <div className="card" key={index}>
                  <img src={specialImage.img} alt="" />
                  <h2>{specialImage.heading}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
