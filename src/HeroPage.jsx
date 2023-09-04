import React from 'react';
import "./HeroPage.css";
import LeftComponent from "./LeftComponent";
import MiddleComponent from "./MiddleComponent"
import RightComponent from "./RightComponent"
function HeroPage() {
  return (
    <div className="hero">
      <LeftComponent />
      <MiddleComponent />
      <RightComponent />
    </div>
  )
}

export default HeroPage