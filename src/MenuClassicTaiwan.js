import React from "react";
import MenuItemGrid from "./MenuItemGrid";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
export default function MenuClassicTaiwan(props) {
  const menuItems = [
    { food: "Jadeite Royal Tea", prices: [{ price: 3.0 }] },
    { food: "Jasmine Green Tea", prices: [{ price: 3.0 }] },
    { food: "Earl Grey Tea", prices: [{ price: 3.0 }] },
    { food: "Roasted Oolong Tea", prices: [{ price: 3.0 }] },
    {
      food: "Winter Melon",
      prices: [
        { size: "Winter Melon", price: 3.0 },
        { size: "Winter Melon Lemon", price: 3.7 },
        { size: "Winter Melon Milk Tea", price: 3.7 },
      ],
    },
    { food: "House Grass Jelly", prices: [{ price: 3.7 }] },
  ];

  return (
    <div className="MenuClassicTaiwan" id={props.menuDetails.menuHref}>
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
