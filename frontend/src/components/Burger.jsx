/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

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
          <li className="menu-burger-title">
            <a href="/" className="burger-menu-link">
              Accueil
            </a>
          </li>
          <li className="menu-burger-title">
            <a href="/sign" className="burger-menu-link">
              Se connecter
            </a>
          </li>
          <li className="menu-burger-title">
            <a href="/account-creation" className="burger-menu-link">
              S'inscrire
            </a>
          </li>
          <li className="menu-burger-title">
            <a href="/contact" className="burger-menu-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Burger;
