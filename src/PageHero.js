import React from "react";
import GoogleMapIcon from "./images/google-maps.png";
import FacebookIcon from "./images/facebook.png";
import InstagramIcon from "./images/instagram.png";
import MenuButton from "./MenuButton";
import OrderGrid from "./OrderGrid";
import Deliveroo from "./images/deliveroo.png";
import PhoneIcon from "./images/phone.png";

export default function PageHero(props) {
  return (
    <div className="PageHero">
      <div className="stay-middle-section-padding">
        <div className="pagehero-top-grid">
          <a
            href="https://goo.gl/maps/BtAA2CrUo5yAEP7H6"
            target="_blank"
            rel="noreferrer"
            title="T4 on Google Maps"
          >
            <div className="white-text">
              <span>
                <img
                  className="icon-adjustments"
                  src={GoogleMapIcon}
                  alt="google-map-icon"
                ></img>
              </span>
              <span className="display-none-when-small">
                Westfield, C306A, Ariel Way, Shepherd's Bush Grn, London W12 7GA
              </span>
            </div>
          </a>
          <a
            className="display-none-when-extra-small"
            href="https://www.facebook.com/t4unitedkingdom/"
            target="_blank"
            rel="noreferrer"
            title="T4 Facebook"
          >
            <img
              className="icon-adjustments float-end"
              src={FacebookIcon}
              alt="google-map-icon"
            ></img>
          </a>
          <a
            className="display-none-when-extra-small"
            href="https://www.instagram.com/t4_unitedkingdom/"
            target="_blank"
            rel="noreferrer"
            title="T4 Instagram"
          >
            <img
              className="icon-adjustments float-center"
              src={InstagramIcon}
              alt="google-map-icon"
            ></img>
          </a>
        </div>
        <section className="brand-name">
          <h1 className="largeHeading white-text text-center ">
            <br />
          </h1>
          <h2 className="subHeading secondary-text-color text-center">
            <br />
          </h2>
        </section>
        <MenuButton menuHref={props.menuHref} />
        <OrderGrid
          textColor="white"
          class="highlight-background"
          logo1={Deliveroo}
          logo2={PhoneIcon}
          link1={`https://deliveroo.co.uk/brands/t4`}
          link2={`tel:02087493900`}
          content1={`deliveroo`}
          content2={`02087493900`}
          linkTitle1={`Order on Deliveroo`}
          linkTitle2={`Call T4`}
        />
      </div>
    </div>
  );
}
