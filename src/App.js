import "./App.css";
import logo from "./favicon.ico";
import PageHero from "./PageHero";
import IntroductionPage from "./IntroductionPage";
import OpeningHours from "./OpeningHours";
import PartyCatering from "./PartyCatering";
import MenuFilter from "./MenuFilter";
import MenuBubbleMilkTea from "./MenuBubbleMilkTea";
import MenuSpecialMilkTea from "./MenuSpecialMilkTea";
import MenuCreamCrown from "./MenuCreamCrown";
import MenuFruitMagicer from "./MenuFruitMagic";
import MenuClassicTaiwan from "./MenuClassicTaiwan";
import MenuIceCooler from "./MenuIceCooler";
import MenuExtras from "./MenuExtras";
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
    { menuTitle: "Extras", menuHref: "extras-menu" },
  ];

  return (
    <div className="App">
      <nav className="navbar sticky-top navbar-expand-lg navbar-decoration">
        <a
          className="navbar-brand brand high-light-text"
          href="index.html"
          title="T4 Homepage"
        >
          <img
            src={logo}
            className="logo"
            alt="T4 Bubble Tea"
          />
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
              <a
                className="nav-link high-light-text"
                href="#What-we-make"
                title="What we make"
              >
                {" "}
                History
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link high-light-text"
                href="#opening-hours"
                title="T4 Opening Hours"
              >
                Hours
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link high-light-text"
                href="#party-catering"
                title=" T4 Location"
              >
                Location
              </a>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link high-light-text dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                title=" T4 Menu"
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
      <IntroductionPage id="What-we-make" />
      <OpeningHours id="opening-hours" />
      <PartyCatering id="party-catering" menuHref={mainMenuHref} />
      <MenuFilter id="menu" menuItems={menuItems} />
      <MenuBubbleMilkTea
        menuDetails={menuItems[0]}
        linkToNextPage={menuItems[1].menuHref}
      />
      <MenuSpecialMilkTea
        menuDetails={menuItems[1]}
        linkToPreviousPage={menuItems[0].menuHref}
        linkToNextPage={menuItems[2].menuHref}
      />
      <MenuCreamCrown
        menuDetails={menuItems[2]}
        linkToPreviousPage={menuItems[1].menuHref}
        linkToNextPage={menuItems[3].menuHref}
      />
      <MenuFruitMagicer
        menuDetails={menuItems[3]}
        linkToPreviousPage={menuItems[2].menuHref}
        linkToNextPage={menuItems[4].menuHref}
      />
      <MenuClassicTaiwan
        menuDetails={menuItems[4]}
        linkToPreviousPage={menuItems[3].menuHref}
        linkToNextPage={menuItems[5].menuHref}
      />
      <MenuIceCooler
        menuDetails={menuItems[5]}
        linkToPreviousPage={menuItems[4].menuHref}
        linkToNextPage={menuItems[6].menuHref}
      />
      <MenuExtras
        menuDetails={menuItems[6]}
        linkToPreviousPage={menuItems[5].menuHref}
      />
      <FloatingOrderNote />
      <Footer />
    </div>
  );
}

export default App;
