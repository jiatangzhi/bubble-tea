import React from "react";
import MenuItemGrid from "./MenuItemGrid";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
export default function SpecialMilkTeaMenu(props) {
  const menuItems = [
    { food: "Jadeite Royal Milk Tea", prices: [{ price: 4.0 }] },
    { food: "Jasmine Green Milk Tea", prices: [{ price: 4.0 }] },
    { food: "Earl Grey Milk Tea", prices: [{ price: 4.0 }] },
    { food: "Roasted Oolong Milk Tea", prices: [{ price: 4.0 }] },
    { food: "Taro Milk Tea", prices: [{ price: 4.2 }] },
    { food: "Classic Rose Milk Tea", prices: [{ price: 4.2 }] },
    { food: "Ballet Chocolate Milk Tea", prices: [{ price: 4.2 }] },
    { food: "Matcha Latte", prices: [{ price: 4.2 }] },
    { food: "White Almond Tea", prices: [{ price: 4.2 }] },
    { food: "Mulberry Milk Tea", prices: [{ price: 4.7 }] }
  ];

  return (
    <div className="SpecialMilkTeaMenu" id={props.menuDetails.menuHref}>
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
