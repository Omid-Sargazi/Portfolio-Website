import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experirnce from "./components/Experirnce";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experirnce />
      <SocialLinks />
    </div>
  );
};

export default App;
