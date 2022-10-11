import { Link } from "react-router-dom";
import { useContext } from "react";
import signPicto from "@assets/images/K6XK_blanc_grand.png";
import contactPicto from "@assets/images/KSSH_blanc_grand.png";
import inscriptionPicto from "@assets/images/KQ8B_blanc_grand.png";
import homePicto from "@assets/images/KR97_blanc_grand.png";
import logo from "@assets/images/logo-ltv-transparent.png";
import AuthContext from "../contexts/AuthContext";

function Navbar() {
  const { isAuthenticated } = useContext(AuthContext);

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
          <Link to="/account-creation">
            <li className="nav-item">
              <img
                src={inscriptionPicto}
                alt="home-picto"
                className="picto-navbar-inscription"
              />
              S'inscrire
            </li>
          </Link>
          {isAuthenticated && (
            <>
              <Link to="/user-profile/:id">
                <li className="nav-item">Mon compte</li>
              </Link>
              <div className="logout">
                <button type="button">Déconnexion</button>
                <img src="" alt="cadenas fermé" />
              </div>
            </>
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
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
