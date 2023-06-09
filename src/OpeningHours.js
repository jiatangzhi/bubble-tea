import React from "react";
import OrderGrid from "./OrderGrid";
import DeliverooLogo from "./images/deliveroo.png";
import UberEatsLogo from "./images/uberEats.png";
export default function OpeningHours(props) {
  return (
    <div className="OpeningHours" id={props.id}>
      <div className="half-a-page-grid">
        <div className="opening-hours-half-page-image">
          {" "}
          <div className="section-padding">
            <h3 className="white-text largeHeading">We're Open !</h3>
            <p className="secondary-text-color itallic-subHeading">
              All are welcome. Takeaways. Delivery. Collections.
            </p>
          </div>
        </div>
        <div className="half-a-page-content">
          <div className="section-padding">
            <h2 className="black-large-title">Opening Hours</h2>
            <div className="list-of-info">
              <p>
                Monday - Saturday
                <br />
                10:00am - 9:00pm
              </p>
              <p>
                Sunday
                <br />
                12pm - 6pm
              </p>
            </div>
            <p className="paragraph-of-small-info">
              We have moved our delivery service to Uber Eats & Deliveroo.{" "}
              <br />
              This will enable us to take order & deliver much quicker
              throughout our opening hours.
            </p>
            <h2 className="black-large-title display-none-when-extra-small">
              Delivery & Collection
            </h2>
            <OrderGrid
              textColor="black"
              logo1={UberEatsLogo}
              logo2={DeliverooLogo}
              link1={`https://www.ubereats.com/gb/store/t4-bubble-tea-westfield/I6yyGQM8SDed7H36x9skFg`}
              link2={`https://deliveroo.co.uk/brands/t4`}
              content1={`Uber Eats`}
              content2={`Deliveroo`}
              linkTitle1={`Order on Uber Eats`}
              linkTitle2={`Order on Deliveroo`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
