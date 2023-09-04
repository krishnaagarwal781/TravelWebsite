import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { HiOutlineTicket } from "react-icons/hi";
import { BsBookmarkDash } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { PiNumberCircleFourFill } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import imageCalender from "./images/calender.png";
import "./LeftComponent.css"; // Import your CSS file for component styling

function LeftComponent() {
  const divStyle = {
    width: "20%",
    padding: "20px",
  };

  const align = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    height: "50px",
    paddingLeft: "15px",
    borderRadius: "10px",
    margin: "5px 0px",
    fontSize: "14px",
  };

  return (
    <div style={divStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 30px",
          marginBottom: "30px",
        }}
      >
        <h2>Travigo</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span className="hover" style={align}>
          <RiHome6Line size="18px" />
          Dashboard
        </span>
        <span style={align}>
          <HiOutlineTicket size="18px" />
          My Tickets
        </span>
        <span style={align}>
          <BsBookmarkDash size="18px" />
          Favorite
        </span>
        <span style={align}>
          <AiOutlineMessage size="18px" />
          Message
          <PiNumberCircleFourFill
            style={{ marginLeft: "25px" }}
            size="17px"
            color="orange"
          />
        </span>
        <span style={align}>
          <CiWallet size="18px" />
          Transaction
        </span>
        <span style={align}>
          <AiOutlineSetting size="18px" />
          Setting
        </span>
      </div>
      <div
        style={{
          borderRadius: "10px",
          height: "210px",
          padding: "20px 10px",
          backgroundImage: `url(${imageCalender})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <span style={{ fontSize: "20px", color: "black" }}>50%</span> Discount!
        <p
          style={{
            fontSize: "12px",
            color: "black",
            margin: "5px 0px",
            marginBottom: "55px",
          }}
        >
          Get a discount on certain days and <br />
          don't miss it.
        </p>
        <div
          style={{
            backgroundColor: "white",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
          }}
        >
          <BsFillArrowRightCircleFill color="orange" size="45px" />
        </div>
      </div>
      <div className="hover" style={align}>
        <IoLogOutOutline size="18px" />
        Log Out
      </div>
    </div>
  );
}

export default LeftComponent;
