import { Link } from "react-router-dom";
import Banner from "./Banner";

function Navbar() {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <Link to="/">
            <li className="logo">LTV</li>
          </Link>
          <Link to="/">
            <li className="nav-item">Accueil</li>
          </Link>
          <Link to="/sign-in">
            <li className="nav-item">Se connecter</li>
          </Link>
          <Link to="/user-profile/:id">
            <li className="nav-item">Mon compte</li>
          </Link>
          <Link to="/account-creation">
            <li className="nav-item">S'inscrire</li>
          </Link>
          <Link to="contact">
            <li className="nav-item">Contact</li>
          </Link>
        </ul>
      </nav>
      <Banner />
    </header>
  );
}

export default Navbar;
