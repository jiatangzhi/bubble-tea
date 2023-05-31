import React from "react";
import OrderGrid from "./OrderGrid";
import DeliverooLogo from "./images/deliveroo.png";
import PhoneIcon from "./images/phone.png";
import Cup from "./images/cup.png";

export default function History(props) {
  return (
    <div className="IntroductionPage" id={props.id}>
      <div className="half-a-page-grid">
        <div className="introduction-half-page-image">
          <div className="section-padding">
            <h3 className="white-text largeHeading">Mission</h3>
            <p className="secondary-text-color itallic-subHeading">
              To bring happiness to customers worldwide by sharing quality
              Taiwanese tea. “a cup of TEA FOR you.”
            </p>
          </div>
        </div>
        <div className="half-a-page-content">
          <div className="section-padding">
            <h2 className="black-large-title">Philosophy</h2>
            <p>
              A cup of Tea For You. We are proud of our tea and we encourage you
              to share it with friends. We blend quality, health, humanity,
              beauty and flavour, bringing happiness through sharing. Each day
              we work towards our mission of quality and sharing by offering a
              fresh taste of the beauty of Taiwanese teas in the UK and
              worldwide.
            </p>
            <div className="image-grid">
              <img className="sqaure-image" src={Cup} alt="Cup"></img>
            </div>
            <h2 className="black-large-title display-none-when-extra-small">
              Order Now
            </h2>
            <OrderGrid
              textColor="black"
              logo1={DeliverooLogo}
              logo2={PhoneIcon}
              link1={`https://www.just-eat.co.uk/restaurants-adastral-fish-and-chips-poole/menu/?utm_source=adastralfishnchips.co.uk&utm_medium=restaurant&utm_campaign=order%20button`}
              link2={`tel:07578617349`}
              content1={`Just Eat`}
              content2={`07578-617349`}
              linkTitle1={`Order on Just Eat`}
              linkTitle2={`Call Adastral Fish & Chips now`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
