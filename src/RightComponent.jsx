import React from "react";
import "./RightComponent.css";
import Container1 from "./Container1";
import img12 from "./images/img12.jpg";
import img13 from "./images/img13.jpg";
import img14 from "./images/img14.jpg";
import { BsThreeDots } from "react-icons/bs";
import Container2 from "./Container2";
import Calendar from "./Calender";
import face from "./images/face.png"
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
function RightComponent() {
  return (
    <div className="containerRight">
      <div className="profile">
        <img style={{width:"32px",borderRadius:"50%"}} src={face}/>
        {/* <CgProfile size="40px" color="#589883" /> */}
        <div style={{"marginRight":"30px"}}>
          <p style={{fontWeight:"600","marginBottom":"3px"}}>Jeremy Zuck</p>
          <p style={{fontSize:"10px","color":"grey"}}>Traveller Enthusiast</p>
        </div>
        <RiArrowDropDownLine size="30px"/>
      </div>
      <div style={{width:"250px","display":"flex",marginLeft:"30px"}} className="calender">
        <Calendar/>
      </div>

      <div className="schedule">

        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft:"20px",
            marginLeft:"10px",
            marginTop:"15px",
            justifyContent: "space-between",
          }}
        >
          <h3>My Schedule</h3>
          <BsThreeDots style={{marginRight:"110px"}} color="grey"/>
        </div>
        <Container2 imgSrc={img13} />
        <Container2 imgSrc={img12} />
        <Container2 imgSrc={img14} />
      </div>
    </div>
  );
}

export default RightComponent;
