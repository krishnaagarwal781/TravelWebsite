import React from "react";
import "./MiddleComponent.css";
import bell from "./bell.png";
import { GoLocation } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import img12 from "./images/img12.jpg";
import img13 from "./images/img13.jpg";
import img14 from "./images/img14.jpg";
import images from "./images/images.png";
import { IoFilterOutline } from "react-icons/io5";
import { LiaBellSolid } from "react-icons/lia";

import Container1 from "./Container1";
function MiddleComponent() {
  return (
    <div className="containerMiddle">
      <div className="search">
        <div className="hello">
          <h2 className="heading3">Hello, Jeremy! 👋</h2>
          <p style={{fontSize:"15px","color":"grey"}}>Welcome back and explore the world.</p>
        </div>
        <div className="bar">
          <img src="https://i.postimg.cc/Hn7fSYQq/search.png" />
          <input
            type="text"
            id="searchInput"
            placeholder="Search Destination..."
          />
        </div>

        <div className="notification">
          <LiaBellSolid color="black"/>
        </div>
      </div>
      <div className="imageContainer">
        <div className="img-container img1">
          <div className="bottom-content">
            <div style={{ fontWeight: "600" }}>Mount Farel</div>
            <div style={{ fontWeight: "300", fontSize: "12px" }}>
              <GoLocation size="12px" color="white" />
              Greenland
              <AiOutlineStar size="12px" color="white" />
              4.5
            </div>
          </div>
        </div>
        <div className="img-container img2">
          <div className="bottom-content">
            <div style={{ fontWeight: "600" }}>Eco Camping</div>
            <div style={{ fontWeight: "300", fontSize: "12px" }}>
              <GoLocation size="12px" color="white" />
              Patagonia
              <AiOutlineStar size="12px" color="white" />
              4.3
            </div>
          </div>
        </div>
        <div className="img-container img3">
          <div className="bottom-content">
            <div style={{ fontWeight: "600" }}>Mount Everest</div>
            <div style={{ fontWeight: "300", fontSize: "12px" }}>
              <GoLocation size="12px" color="white" />
              Nepal
              <AiOutlineStar size="12px" color="white" />
              4.2
            </div>
          </div>
        </div>
      </div>

      <div className="bottomContainer">
        <div className="bottomContainerLeft">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ margin: "17px 20px" }}>
              <h3>Best Destination 🌈</h3>
              <p style={{ color:"grey",fontSize: "10px", marginTop: "8px" }}>
                100 Destination found
              </p>
            </div>
            <div
              style={{
                color: "grey",
                marginRight: "30px",
                fontSize: "12px",
                border: "1px solid grey",
                borderRadius: "5px",
                padding: "8px 10px",
              }}
            >
              <IoFilterOutline />
              Filter
            </div>
          </div>
          <Container1 imgSrc={img12} />
          <Container1 imgSrc={img13} />
          <Container1 imgSrc={img14} />
        </div>
        <div className="bottomContainerRight">
        <div>
          <img style={{width:"100px"}} src={images}/>
        </div>
          <p style={{ color: "white" }}>
            Let's Explore
            <br />
            The Beauty
          </p>
          <p style={{ color: "white", fontSize: "10px" }}>
            Get special offers & news
          </p>
          <div
            style={{
              width: "140px",
              height: "42px",
              color: "white",
              fontSize: "13px",
              backgroundColor: "#1ec38b",
              borderRadius: "10px",
              padding: "8px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Join Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleComponent;
