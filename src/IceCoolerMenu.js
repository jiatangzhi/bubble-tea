import React from "react";
import MenuItemGrid from "./MenuItemGrid";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
export default function IceCoolerMenu(props) {
  const menuItems = [
    { food: "Lemon & Aloe Smoothie", prices: [{ price: 4.7 }] },
    { food: "Lychee & Aloe Smoothie", prices: [{ price: 4.7 }] },
    { food: "Passionfruit Smoothie", prices: [{ price: 4.7 }] },
    { food: "Chocolate Smoothie", prices: [{ price: 4.7 }] },
    { food: "Red Bean Milkshake", prices: [{ price: 4.7 }] },
    { food: "Oreo Potted Milkshake", prices: [{ price: 4.7 }] },
    { food: "Strawberry Milkshake", prices: [{ price: 4.7 }] },
    { food: "Taro Milkshake", prices: [{ price: 4.7 }] },
    { food: "Alond Milkshake with Pearl", prices: [{ price: 5.2 }] },
    { food: "Fresh Taro Milkshake", prices: [{ price: 5.4 }] },
  ];

  return (
    <div className="IceCoolerMenu" id={props.menuDetails.menuHref}>
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
