import React from "react";
import "./App.css";
import About from "./componets/About/About";
import Homepage from "./componets/Home/Homepage";
import AboutInfo from "./componets/AboutInfo/AboutInfo";
import Specials from "./componets/Specialities/Specials";
import Testimonials from "./componets/Testimony/Testimonials";
import data from "./componets/Testimony/data/testimonialsdata";
import Chefs from "./componets/ChefsComponent/Chefs";
import chefsData from "./componets/ChefsComponent/chefsData/chefsData";
import Reservations from "./componets/Reservations/Reservations";

function App() {
  const items = data;

  const items2 = chefsData;

  return (
    <div className="App">
      <Homepage />
      <About />
      <AboutInfo />
      <Specials />
      <Testimonials items={items} />
      <Chefs items={items2} />
      <Reservations />
    </div>
  );
}

export default App;
