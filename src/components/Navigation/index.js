import React from "react";
import logo from "../../assets/logos/logo2.svg";
import Button from "../Button";
function Navigation() {
  return (
    <div className="bg-blackPrimary text-whitePrimary flex justify-between items-center">
      <div className="flex justify-center items-center gap-16">
        <img src={logo} alt="logo" />
        <div className="flex justify-center items-center gap-7">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#resume">Resume</a>
        </div>
      </div>
      <Button className="bg-whiteSecondary text-blackSecondary">Contact Me</Button>
    </div>
  );
}

export default Navigation;
