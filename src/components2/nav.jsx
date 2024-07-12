import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/library.svg";
import {link} from "react-router-dom";

const nav = ({numberOfItems}) => {
  function openmenu() {
    document.body.classList += "menu--open";
  }

  function closemenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={librarylogo} alt="" className="logo" />
        </Link>
        <ul clLinkssName="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/books" className="nav__link">
              books
            </Link>
          </li>

          <button className="btn__menu" onClick={openmenu}>
            <fontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            < Link to="/cart" className="nav__link">
              <fontAwesomeIcon icon="shoppping-cart" />
            </Link>
            {
              numberOfItems > 0 && <span className="cart__length">{numberOfItems}</span>
            }
           
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closemenu}>
            <fontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link tof="/" className="menu__link">
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/Books" className="menu__link">
                Books
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/cart" className="menu__link">
                cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default nav;
