import React from "react";
import History1 from "./images/history1.png";
import History2 from "./images/history2.png";
import OrderGrid from "./OrderGrid";
import UberEatsLogo from "./images/uberEats.png";
import PhoneIcon from "./images/phone.png";

export default function IntroductionPage(props) {
  return (
    <div className="IntroductionPage" id={props.id}>
      <div className="half-a-page-grid">
        <div className="introduction-half-page-image">
          <div className="section-padding">
            <h3 className="white-text largeHeading"> Philosophy </h3>
            <p className="secondary-text-color itallic-subHeading">
              A cup of Tea For You. <br />
              <br /> We are proud of our tea and we encourage you to share it
              with friends. <br />
              <br />
              We blend quality, health, humanity, beauty and flavour, bringing
              happiness through sharing. <br />
              <br />
              Each day we work towards our mission of quality and sharing by
              offering a fresh taste of the beauty of Taiwanese teas in the UK
              and worldwide.
            </p>
          </div>
        </div>
        <div className="half-a-page-content">
          <div className="section-padding">
            <h2 className="black-large-title">History</h2>
            <h3 className="black-subtitle">We are a National Brand </h3>
            <p>
              The founder of T4 Tea for You wasn’t always a successful business
              man – but quality, sharing and happiness have always been
              important to him. He founded the company at age 28, after working
              in a beef noodle chain store. <br />
              <hr />
              He believes that it is important to “challenge yourself, and
              strive for success with every experiential process.
            </p>
            <div className="image-grid">
              <img className="sqaure-image" src={History2} alt="History2"></img>
              <img className="sqaure-image" src={History1} alt="History1"></img>
            </div>
            <h2 className="black-large-title display-none-when-extra-small">
              Order Now
            </h2>
            <OrderGrid
              textColor="black"
              logo1={UberEatsLogo}
              logo2={PhoneIcon}
              link1={`https://www.ubereats.com/gb/store/t4-bubble-tea-westfield/I6yyGQM8SDed7H36x9skFg`}
              link2={`tel:02087493900`}
              content1={`Uber Eats`}
              content2={`02087493900`}
              linkTitle1={`Order on Uber Eats`}
              linkTitle2={`Call T4 now`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
