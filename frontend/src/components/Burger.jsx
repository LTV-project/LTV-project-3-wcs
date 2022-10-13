/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthApi from "../services/AuthApi";
import AuthContext from "../contexts/AuthContext";
import CurrentUserContext from "../contexts/CurrentUserContext";

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

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { setCurrentUser } = useContext(CurrentUserContext);

  function handleLogout() {
    AuthApi.logout();
    setIsAuthenticated(false);
    setCurrentUser({});
  }

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
            <li className="menu-burger-title burger-menu-link">Accueil</li>
          </Link>
          <Link to="/sign">
            <li className="menu-burger-title burger-menu-link">Se connecter</li>
          </Link>
          <Link to="/account-creation">
            <li className="menu-burger-title burger-menu-link">S'inscrire</li>
          </Link>
          <Link to="/contact">
            <li className="menu-burger-title burger-menu-link">Contact</li>
          </Link>
          {isAuthenticated && (
            <div className="navbar-btn-logout">
              <button
                type="button"
                className="btn-nav-logout-burger"
                onClick={handleLogout}
              >
                <p className="burger-menu-link">Déconnexion</p>
              </button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Burger;
