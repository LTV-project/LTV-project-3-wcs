import { Link } from "react-router-dom";
import { useContext } from "react";
// eslint-disable-next-line import/no-unresolved
import AuthApi from "@services/AuthApi";
// eslint-disable-next-line import/no-unresolved
// import CurrentUserContext from "../CurrentUserContext";
import AuthContext from "../contexts/AuthContext";

function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  // const { setCurrentUser } = useContext(CurrentUserContext);

  const handleLogout = () => {
    AuthApi.logout();
    setIsAuthenticated(false);
    // setCurrentUser({});
  };

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
          {!isAuthenticated && (
            <>
              <Link to="/sign">
                <li className="nav-item">Se connecter</li>
              </Link>
              <Link to="/account-creation">
                <li className="nav-item">S'inscrire</li>
              </Link>
            </>
          )}
          {isAuthenticated && (
            <Link to="/user-profile/:id">
              <li className="nav-item">Mon compte</li>
            </Link>
          )}
          <Link to="/contact">
            <li className="nav-item">Contact</li>
          </Link>
        </ul>
      </nav>

      <button type="button" onClick={() => handleLogout} className="nav-item">
        Déconnexion
      </button>
    </header>
  );
}

export default Navbar;
