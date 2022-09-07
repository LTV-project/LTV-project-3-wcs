import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <li>Accueil</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
      <Link to="/se connecter">
        <li>Se connecter</li>
      </Link>
    </div>
  );
}
