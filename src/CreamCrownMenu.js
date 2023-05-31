import React from "react";
import MenuItemGrid from "./MenuItemGrid";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
export default function CreamCrownMenu(props) {
  const menuItems = [
    { food: "Crown Green Tea", prices: [{ price: 4.4 }] },
    { food: "Crown Earl Grey Tea", prices: [{ price: 4.4 }] },
    { food: "Crown Oolong Milk Tea", prices: [{ price: 4.4 }] },
    { food: "Crown Jadeite Royal Tea", prices: [{ price: 4.4 }] },
    { food: "Crown Chocolate", prices: [{ price: 4.4 }] },
    { food: "Cream Crown Double Green", prices: [{ price: 4.6 }] },
  ];

  return (
    <div className="CreamCrownMenu" id={props.menuDetails.menuHref}>
      <div className="stay-middle-section-padding">
        <div className="previous-menu-next-grid">
          <PreviousButton link={props.linkToPreviousPage} />
          <div className="menu-card">
            <h3 className="itallic-subHeading">
              {props.menuDetails.menuTitle}
            </h3>
            {menuItems.map((item) => (
              <MenuItemGrid
                key={item.food}
                food={item.food}
                price={item.prices}
              />
            ))}
          </div>
          <NextButton link={props.linkToNextPage} />
        </div>
      </div>
    </div>
  );
}
