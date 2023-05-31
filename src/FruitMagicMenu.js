import React from "react";
import MenuItemGrid from "./MenuItemGrid";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";

export default function FruitMagicMenu(props) {
  const menuItems = [
    { food: "Elegant Lady Rose Tea", prices: [{ price: 4.0 }] },
    { food: "Lychee Blavk Tea with Aloe", prices: [{ price: 4.0 }] },
    { food: "Honey Aloe", prices: [{ price: 4.0 }] },
    { food: "Ophelia Rose Aloe", prices: [{ price: 4.0 }] },
    { food: "Strawberry Tea", prices: [{ price: 4.0 }] },
    { food: "Honey Peach Royal Tea", prices: [{ price: 4.0 }] },
    { food: "Passionfruit Royal Tea", prices: [{ price: 4.0 }] },
    { food: "Grapefruit Royal Tea", prices: [{ price: 4.0 }] },
    { food: "Mango Royal Tea", prices: [{ price: 4.0 }] },
    { food: "Lemon Royal Tea", prices: [{ price: 4.0 }] },
    { food: "Grapes Aloe", prices: [{ price: 4.0 }] },
    { food: "Peach Double Green", prices: [{ price: 4.2 }] },
    { food: "Mulberry Tea", prices: [{ price: 4.2 }] }
  ];

  return (
    <div className="FruitMagicMenu" id={props.menuDetails.menuHref}>
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
