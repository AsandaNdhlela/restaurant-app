import React from "react";
import "./App.css";
import About from "./componets/About/About";
import Homepage from "./componets/Home/Homepage";
import AboutInfo from "./componets/AboutInfo/AboutInfo";
import Specials from "./componets/Specialities/Specials";

function App() {
  return (
    <div className="App">
      <Homepage />
      <About />
      <AboutInfo />
      <Specials />
    </div>
  );
}

export default App;
