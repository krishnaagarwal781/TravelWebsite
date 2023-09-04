import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
function Container2(props) {
  return (
    <div
      className
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "20px",
        width:"250px",
        height:"90px",
        margin: "5px 20px",
        borderRadius: "20px",
        border: "1px solid #bab3b3",
        padding: "10px",
        // backgroundColor:"yellow"
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          backgroundImage: `url(${props.imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          marginRight: "15px",
        }}
      ></div>
      <div
        style={{
          marginRight: "0px",
        }}
      >
        <div style={{fontSize:"13px" ,fontWeight: "600", marginBottom: "5px" }}>
          Mount Everest
        </div>
        <div
          style={{
            fontWeight: "300",
            fontSize: "9px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            color:"grey",
            gap: "5px",
          }}
        >
          <BsCalendarDate color="grey" size="9px" /> 16 June - 20 June
        </div>
          <CgProfile size="10px"/>
          <CgProfile size="10px"/>
          <CgProfile size="10px"/><span style={{fontSize:"10px"}}>+2</span>
      </div>
    </div>
  );
}

export default Container2;
