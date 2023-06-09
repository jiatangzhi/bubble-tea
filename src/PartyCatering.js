import React from "react";
import MenuButton from "./MenuButton";
import MapEmbed from "./MapEmbed";
export default function PartyCatering(props) {
  return (
    <div className="PartyCatering" id={props.id}>
      {" "}
      <div className="half-a-page-grid">
        <div className="party-half-page-image">
          {" "}
          <div className="section-padding">
            <h3 className="white-text largeHeading"> Mission </h3>{" "}
            <p className="secondary-text-color itallic-subHeading">
              To bring happiness to customers worldwide by sharing quality
              Taiwanese tea. “a cup of TEA FOR you.”
            </p>
          </div>
        </div>
        <div className="half-a-page-content">
          <div className="section-padding">
            <h2 className="black-large-title">Visit us</h2>
            <MenuButton menuHref={props.menuHref} />
            <h2 className="black-large-title">Try our Bubble Teas!</h2>{" "}
            <p>Find us</p>
            <MapEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}
