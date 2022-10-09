import React from "react";
import "./App.css";
import About from "./componets/About/About";
import Homepage from "./componets/Home/Homepage";
import AboutInfo from "./componets/AboutInfo/AboutInfo";
import Specials from "./componets/Specialities/Specials";
import Testimonials from "./componets/Testimony/Testimonials";
import data from "./componets/Testimony/data/testimonialsdata";

function App() {
  const items = data;
  return (
    <div className="App">
      <Homepage />
      <About />
      <AboutInfo />
      <Specials />
      <Testimonials items={items} />
    </div>
  );
}

export default App;
