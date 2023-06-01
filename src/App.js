import "./App.css";
import logo from "./logo.png";
import PageHero from "./PageHero";
import History from "./History";
import OpeningHours from "./OpeningHours";
import PartyCatering from "./PartyCatering";
import MenuFilter from "./MenuFilter";
import BubbleMilkTeaMenu from "./BubbleMilkTeaMenu";
import SpecialMilkTeaMenu from "./SpecialMilkTeaMenu";
import CreamCrownMenu from "./CreamCrownMenu";
import FruitMagicMenu from "./FruitMagicMenu";
import ClassicTaiwanMenu from "./ClassicTaiwanMenu";
import IceCoolerMenu from "./IceCoolerMenu";
import AddOn from "./AddOn";
import FloatingOrderNote from "./FloatingOrderNote";
import Footer from "./Footer";


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
      <History id="What-we-make" />
      <OpeningHours id="opening-hours" />
      <PartyCatering id="party-catering" menuHref={mainMenuHref} />
      <MenuFilter id="menu" menuItems={menuItems} />
      <BubbleMilkTeaMenu
        menuDetails={menuItems[0]}
        linkToNextPage={menuItems[1].menuHref}
      />
      <SpecialMilkTeaMenu
        menuDetails={menuItems[1]}
        linkToPreviousPage={menuItems[0].menuHref}
        linkToNextPage={menuItems[2].menuHref}
      />
      <CreamCrownMenu
        menuDetails={menuItems[2]}
        linkToPreviousPage={menuItems[1].menuHref}
        linkToNextPage={menuItems[3].menuHref}
      />
      <FruitMagicMenu
        menuDetails={menuItems[3]}
        linkToPreviousPage={menuItems[2].menuHref}
        linkToNextPage={menuItems[4].menuHref}
      />
      <ClassicTaiwanMenu
        menuDetails={menuItems[4]}
        linkToPreviousPage={menuItems[3].menuHref}
        linkToNextPage={menuItems[5].menuHref}
      />
      <IceCoolerMenu
        menuDetails={menuItems[5]}
        linkToPreviousPage={menuItems[4].menuHref}
        linkToNextPage={menuItems[6].menuHref}
      />
      <AddOn
        menuDetails={menuItems[6]}
        linkToPreviousPage={menuItems[5].menuHref}
      />
      <FloatingOrderNote />
      <Footer />
    </div>
  );
}

export default App;
