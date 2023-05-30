import "./App.css";
import { useState } from "react";
import logo from "./logo.png";
import PageHero from "./PageHero";

function App() {
  const mainMenuHref = "#menu";
  const menuItems = [
    { menuTitle: "Bubble Milk Tea", menuHref: "bubble-milk-tea-menu" },
    { menuTitle: "Special Milk Tea", menuHref: "special-milk-tea-menu" },
    { menuTitle: "Cream Crown", menuHref: "cream-crown-menu" },
    { menuTitle: "Fruit Magic", menuHref: "fruit-magic-menu" },
    { menuTitle: "Classic Taiwan", menuHref: "classic-taiwan-menu" },
    { menuTitle: "Ice Cooler", menuHref: "ice-cooler-menu" },
  ];
  const [addedItems, setAddedItems] = useState([]);
  function handleAddItem(item) {
    setAddedItems([...addedItems, item]);
  }

  return (
    <div className="App">
      <nav className="navbar sticky-top navbar-expand-lg navbar-decoration">
        <a
          className="navbar-brand brand high-light-text"
          href="index.html"
          title="T4. Bubble Tea Homepage"
        >
          <img src={logo} className="App-logo" alt="T4. Bubble Tea" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link high-light-text" href="#Home" title="Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link high-light-text"
                href="#What-we-make"
                title="What we make"
              >
                History
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link high-light-text"
                href="#opening-hours"
                title="T4. Bubble Tea Opening Hours"
              >
                Hours
              </a>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link high-light-text dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                title="T4. Bubble Tea Menu"
              >
                Menu
              </button>
              <div
                className="dropdown-menu dropdown-menu-text"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {menuItems.map((items, index) => (
                  <a
                    className="dropdown-item"
                    title={`${items.menuTitle} Menu`}
                    key={index}
                    href={`#${items.menuHref}`}
                  >
                    {items.menuTitle}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <PageHero id="Home" menuHref={mainMenuHref} />
    </div>
  );
}

export default App;
