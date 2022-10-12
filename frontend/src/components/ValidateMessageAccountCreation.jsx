import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ValidateMessageAccountCreation() {
  const [accountCreateByUser, setAccountCreate] = useState("");
  const navigate = useNavigate();
  // import useLocation pour récupérer les données du composant précédent LobbyGame ou LobbyTalk
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${location.state.id}`)
      .then((response) => response.data)
      .then((data) => setAccountCreate(data))
      .catch((error) => console.error(error));
  }, []);

  // Création useEffect pour le timeOut de 10sec avec retour page d'accueil
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  }, []);

  return (
    <div className="validated-message-container">
      <h2 className="validated-message-title">
        Félicitations{" "}
        {accountCreateByUser.pseudo
          ? accountCreateByUser.pseudo
          : "place du pseudo"}{" "}
        , votre compte vient d'être créer avec succès ! Vous recevrez d'ici
        quelques minutes un courriel de confirmation. Profitez dès maintenant de
        vos nouveaux services.
      </h2>
    </div>
  );
}

export default ValidateMessageAccountCreation;
