import React from "react";
import img12 from "./images/img12.jpg";
import { GoLocation } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
function Container1(props) {
  return (
    <div
      className
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "10px",
        margin:"13px 10px",
        borderRadius:"10px",
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
          marginRight:"15px"
        }}
      ></div>
      <div style={{
        marginRight:"230px"
      }}>
        <div style={{ fontWeight: "600",marginBottom:"5px" }}>Mount Everest</div>
        <div style={{ fontWeight: "300", fontSize: "12px",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"5px"}}>
          <GoLocation size="12px" color="black" />
          Nepal
          <AiOutlineStar size="12px" color="black" />
          4.2
        </div>
      </div>
      <div>$150<span style={{fontSize:"11px",color:"grey"}}>/day</span></div>
    </div>
  );
}

export default Container1;
