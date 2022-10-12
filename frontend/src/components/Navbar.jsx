import { Link } from "react-router-dom";
import { useContext } from "react";
import logoutPicto from "@assets/images/K6XD_blanc_grand.png";
import myAccountPicto from "@assets/images/user-profile-icon.png";
import signPicto from "@assets/images/K6XK_blanc_grand.png";
import contactPicto from "@assets/images/KSSH_blanc_grand.png";
import homePicto from "@assets/images/KR97_blanc_grand.png";
import logo from "@assets/images/logo-ltv-transparent.png";
import AuthContext from "../contexts/AuthContext";
import CurrentUserContext from "../contexts/CurrentUserContext";
import AuthApi from "../services/AuthApi";

function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { setCurrentUser } = useContext(CurrentUserContext);

  function handleLogout() {
    AuthApi.logout();
    setIsAuthenticated(false);
    setCurrentUser({});
  }

  return (
    <header>
      <nav>
        <ul className="navbar">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          <Link to="/">
            <li className="nav-item">
              <img
                src={homePicto}
                alt="home-picto"
                className="picto-navbar-home"
              />
              Accueil
            </li>
          </Link>
          {!isAuthenticated && (
            <Link to="/sign">
              <li className="nav-item">
                <img
                  src={signPicto}
                  alt="home-picto"
                  className="picto-navbar-sign"
                />
                Se connecter
              </li>
            </Link>
          )}
          {isAuthenticated && (
            <div className="navbar-btn-logout">
              <button
                type="button"
                className="btn-nav-logout"
                onClick={handleLogout}
              >
                <img
                  src={logoutPicto}
                  alt="cadenas fermé"
                  className="picto-navbar-sign"
                />
                <p className="parag-deconnexion">Déconnexion</p>
              </button>
            </div>
          )}
          <Link to="/contact">
            <li className="nav-item">
              <img
                src={contactPicto}
                alt="home-picto"
                className="picto-navbar"
              />
              Contact
            </li>
          </Link>
          {isAuthenticated && (
            <Link to="/user-profile/:id">
              <li className="nav-item">
                <img
                  src={myAccountPicto}
                  alt=""
                  className="picto-navbar-account"
                />
                Mon compte
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
