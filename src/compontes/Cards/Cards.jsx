import React from "react";
import "./Cards.css";
import coolTitle from "./cards-assets/coolTitle.png";
import evenCool from "./cards-assets/evenCool.png";
import feature from "./cards-assets/feature.png";
import Arrow from "./cards-assets/arrow.png";
// Function goes here ...

function Cards() {
  const users = [
    {
      title: "Cool feature title",
      text: "Learning curve network effects return on investment.",
      src: coolTitle,
    },
    {
      title: "Even cooler feature",
      text: "Learning curve network effects return on investment.",
      src: evenCool,
    },
    {
      title: "Cool feature title",
      text: "Learning curve network effects return on investment.",
      src: feature,
    },
  ];

  return (
    <div className="cards">
      <div className="container">
        <div className="banner">
          <div className="banner-sub-title">Our Services</div>
          <div className="banner-title">
            Handshake infographic mass market crowdfunding iteration.
          </div>
        </div>
        <div className="user-cards">
          {users.map((item, idx) => {
            return (
              <div className="banner-card">
                <div className="user-img" key={idx}>
                  <img src={item.src} alt="user-itself" />
                </div>
                <div className="user-cards-texts">
                  <h4 className="user-cards-title">{item.title}</h4>
                  <p className="user-cards-text">{item.text}</p>
                </div>
                <div className="banner-btn">
                  <div>Explore page</div>
                  <div className="arrow-icon-container">
                    <img src={Arrow} alt="arrow-icon" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
