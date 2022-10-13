/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Burger() {
  // Pour changer l'état de l'icone Menu burger
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  // Pour changer l'état du menu et le rendre visible ou non
  const [menuClass, setMenuClass] = useState("menu hidden");
  // Pour changer l'état en fonction de clicks sur le menu
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // Activation du menu burger
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked"); // transforme en croix
      setMenuClass("menu visible"); // fait apparaitre le menu
    } else {
      setBurgerClass("burger-bar unclicked"); // remet les 3 lignes paralleles
      setMenuClass("menu hidden"); // fait disparaitre le menu
    }
    setIsMenuClicked(!isMenuClicked); // change l'état après le click sur le menu
  };

  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
      </nav>
      <div className={menuClass}>
        <ul className="menu-mobile">
          <Link to="/">
            <li className="menu-burger-title">Accueil</li>
          </Link>
          <Link to="/sign">
            <li className="menu-burger-title">Se connecter</li>
          </Link>
          <Link to="/account-creation">
            <li className="menu-burger-title">S'inscrire</li>
          </Link>
          <Link to="/contact">
            <li className="menu-burger-title">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Burger;
