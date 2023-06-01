import React from "react";
import MenuItemGrid from "./MenuItemGrid";
import NextButton from "./NextButton";

export default function BubbleMilkTeaMenu(props) {
  const menuItems = [
    { food: "Pearl Milk Tea", prices: [{ price: 4.2 }] },
    { food: "Grass Jelly Milk Tea", prices: [{ price: 4.2 }] },
    { food: "French Pudding Milk Tea", prices: [{ price: 4.2 }] },
    { food: "QQ Style Milk Tea", prices: [{ price: 4.2 }] },
    { food: "Coconut Jelly Milk Tea", prices: [{ price: 4.2 }] },
    { food: "Coffee Jelly Milk Tea", prices: [{ price: 4.2 }] },
    { food: "Oreo Potted Milk Tea", prices: [{ price: 4.2 }] },
    { food: "Red Bean Milk Tea", prices: [{ price: 4.2 }] },
    { food: "Panda Milk Tea", prices: [{ price: 4.2 }] },
    { food: "Crystal Milk Tea", prices: [{ price: 4.2 }] },
    { food: "Caramel Pearl Milk Tea", prices: [{ price: 4.7 }] },
    { food: "Red Bean Almond Tea", prices: [{ price: 4.7 }] },
    { food: "Fresh Taro Milk Tea", prices: [{ price: 5.2 }] },
    { food: "Taro Bobo Milk Tea", prices: [{ price: 5.4 }] },
  ];

  return (
    <div className="BubbleMilkTeaMenu" id={props.menuDetails.menuHref}>
      <div className="stay-middle-section-padding">
        <div className="previous-menu-next-grid">
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
