// import { Link } from "react-router-dom";
import logoSNCF from "../assets/logoSNCF.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer1">
        <li>LTV</li>
        <li>Qui sommes Nous</li>
        {/* <Link to="/contacts"> */}
        <li>Contactez-nous</li>
        {/* </Link> */}
      </div>
      <div className="footer3">
        <img src={logoSNCF} alt="logo" className="img" />
      </div>
      <div className="footer2">
        <li>Liens Utiles</li>
        <li>
          <a
            href="https://www.sncf-connect.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sncf-connect
          </a>
        </li>
        <li>
          <a
            href="https://www.sncf.com/fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sncf.com
          </a>
        </li>
      </div>
    </div>
  );
}
