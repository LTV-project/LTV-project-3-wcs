import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import CurrentUserContext from "../contexts/CurrentUserContext";
import eye from "../assets/images/eye.png";

function ConnexionOrInscription() {
  const [mailAccountUser, setMailAccountUser] = useState("");
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [passwordAccountUser, setPasswordAccountUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Pour masquer la saisie du password
  const [typeInputPassword, setTypeInputPassword] = useState("password");
  function showHide() {
    if (typeInputPassword === "password") {
      setTypeInputPassword("text");
    } else {
      setTypeInputPassword("password");
    }
  }

  // pour garder les champs saisis dans les inputs
  function login(e) {
    e.preventDefault();
    // Appel BDD via la route login pour vérifier si l'utilisateur existe avec dans le catch, le message d'erreur
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        email: mailAccountUser,
        password: passwordAccountUser,
      })
      .then((response) => {
        console.warn(response.data);
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("mail", response.data.user.mail);
        window.localStorage.setItem("name", response.data.user.name);
        window.localStorage.setItem("id", response.data.user.id);
        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        setCurrentUser(jwtDecode(response.data.token));
        navigate("/userHomePage");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Identifiants incorrects");
      });
  }

  return (
    <div className="connexion-or-inscription">
      <div className="container-accounte-user">
        <h3>Je crée mon compte</h3>
        <button
          type="button"
          onClick={() => navigate("/account-creation")}
          className="generic-btn-connexion"
        >
          C'est parti !
        </button>
      </div>
      <form onSubmit={(e) => login(e)} className="container-connexion">
        <p>Courriel*</p>
        <input
          className="input-containerB"
          type="email"
          onFocus={() => {
            setErrorMessage("");
          }}
          value={mailAccountUser}
          onChange={(e) => {
            setMailAccountUser(e.target.value);
          }}
          required
        />
        <p>Mot de passe*</p>
        <div className="password-container">
          <input
            className="input-containerC"
            type={typeInputPassword}
            value={passwordAccountUser}
            onFocus={() => {
              setErrorMessage("");
            }}
            onChange={(e) => {
              e.preventDefault();
              setPasswordAccountUser(e.target.value);
            }}
            required
          />
          <button
            className="btn-eye"
            type="button"
            onClick={() => showHide()}
            id="eye"
          >
            <img className="eye-inscription eye" src={eye} alt="eye" />
          </button>
        </div>
        <p className="paragraphe-connexion">* Champs obligatoires</p>
        <p>Mot de passe oublié</p>
        <p>{errorMessage}</p>
        <input
          className="create-lobby-input-valited"
          type="submit"
          value="Je me connecte"
        />
      </form>
    </div>
  );
}

export default ConnexionOrInscription;
