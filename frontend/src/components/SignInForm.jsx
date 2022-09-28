import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function SignInForm() {
  const [formState, setFormState] = useState({
    email: "test@test.com",
    password: "test",
  });

  const { setIsAuthenticated } = useContext(AuthContext);
  // Requete de connexion -> stocker le token dans le local storage -> ajouter le token dans les autorisations
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login/`, { ...formState })
      .then((response) => response.data)
      .then((data) => {
        window.localStorage.setItem("authToken", data.token);
        axios.defaults.headers.Authorization = `Bearer $(data.token)`;
        setIsAuthenticated(true);
      })
      // -> rediriger l'utilisateur vers la page d'accueil
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="connexion">
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          name="email"
          Value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          placeholder="Courriel"
        />
        <br />
        <input
          type="password"
          placeholder="Mot de passe"
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
        />
        <br />
        <input type="submit" value="Je me connecte" />
      </form>
    </div>
  );
}
