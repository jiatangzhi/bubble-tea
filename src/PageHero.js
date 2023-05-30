import React from "react";
import FacebookIcon from "./images/facebook.png";
import InstagramIcon from "./images/instagram.png";
import MenuButton from "./MenuButton";
import OrderGrid from "./OrderGrid";
import DeliverooLogo from "./images/deliveroo.png";
import PhoneIcon from "./images/phone.png";

export default function PageHero(props) {
  return (
    <div className="PageHero">
      <div className="stay-middle-section-padding">
        <div className="pagehero-top-grid">
          <a
            className="display-none-when-extra-small"
            href="https://www.facebook.com/adastralfishnchips"
            target="_blank"
            rel="noreferrer"
            title="T4. Bubble Tea Facebook"
          >
            <img
              className="icon-adjustments float-end"
              src={FacebookIcon}
              alt=" T4. Bubble Tea Facebook"
            ></img>
          </a>
          <a
            className="display-none-when-extra-small"
            href="https://www.instagram.com/t4_unitedkingdom/"
            target="_blank"
            rel="noreferrer"
            title="T4. Bubble Tea Instagram"
          >
            <img
              className="icon-adjustments float-center"
              src={InstagramIcon}
              alt="T4. Bubble Tea Instagram"
            ></img>
          </a>
        </div>
        <section className="brand-name">
          <h1 className="largeHeading white-text text-center ">
            T4. Bubble Tea
          </h1>
          <h2 className="subHeading secondary-text-color text-center">
            Crafted for professional brewing
          </h2>
        </section>
        <MenuButton menuHref={props.menuHref} />
        <OrderGrid
          textColor="white"
          class="highlight-background"
          logo1={DeliverooLogo}
          logo2={PhoneIcon}
          link1={`https://deliveroo.co.uk/brands/t4/?utm_medium=backlink&utm_source=t4&utm_campaign=webreferral`}
          content1={`Click here`}
          content2={`02085554090`}
          linkTitle1={`Order on Deliveroo`}
          linkTitle2={`T4. Bubble Tea for Ordering`}
        />
      </div>
    </div>
  );
}
