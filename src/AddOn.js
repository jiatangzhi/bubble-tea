import React from "react";
import MenuItemGrid from "./MenuItemGrid";
import PreviousButton from "./PreviousButton";

export default function AddOn(props) {
  const menuItems = [
    {
      food: "Pearl",
      prices: [{ price: 0.6 }],
    },
    {
      food: "Aloe",
      prices: [{ price: 0.6 }],
    },
    {
      food: "Coconut Jelly",
      prices: [{ price: 0.6 }],
    },
    {
      food: "Grass Jelly",
      prices: [{ price: 0.6 }],
    },
    {
      food: "Coffee Jelly",
      prices: [{ price: 0.6 }],
    },
    {
      food: "Pudding",
      prices: [{ price: 0.6 }],
    },
    {
      food: "Red Bean",
      prices: [{ price: 0.6 }],
    },
    {
      food: "White Pearl",
      prices: [{ price: 0.6 }],
    },
    {
      food: "Green Tea Jelly",
      prices: [{ price: 0.6 }],
    },
    {
      food: "Oreo",
      prices: [{ price: 0.6 }],
    },
    {
      food: "Cream",
      prices: [{ price: 1.0 }],
    },
  ];

  return (
    <div className="MenuOthers" id={props.menuDetails.menuHref}>
      <div className="stay-middle-section-padding">
        <div className="previous-menu-next-grid">
          <PreviousButton link={props.linkToPreviousPage} />
          <div className="menu-card">
            <h3 className="itallic-subHeading">{`${props.menuDetails.menuTitle} `}</h3>
            {menuItems.map((item) => (
              <MenuItemGrid
                key={item.food}
                food={item.food}
                price={item.prices}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
