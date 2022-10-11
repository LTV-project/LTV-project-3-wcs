import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ValidatedMessage() {
  const [lobbyCreateByUser, setLobbyCreate] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lobbies/${location.state.id}`)
      .then((response) => response.data)
      .then((data) => setLobbyCreate(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  }, []);

  return (
    <div className="validated-message-container">
      <h2 className="validated-message-title">
        Félicitations{" "}
        {lobbyCreateByUser.pseudo
          ? lobbyCreateByUser.pseudo
          : "place du pseudo"}{" "}
        !!!
      </h2>
      {lobbyCreateByUser.category_id === "game" ? (
        <div className="validated-message-text">
          <p className="parag-validated">
            Vous venez de créer la salle de jeu :{" "}
          </p>
          {(lobbyCreateByUser.name, lobbyCreateByUser.number_of_gamers)}
          <p className="parag-validated">
            N'oubliez pas d'apporter votre jeu !
          </p>
          <p className="parag-validated">Rappels concernant votre voyage :</p>
          <p className="parag-validated">
            Date du voyage : {lobbyCreateByUser.date}
          </p>
          <p className="parag-validated">
            Numéro de train : {lobbyCreateByUser.train_number}
          </p>
          <p className="parag-validated">
            Numéro de voiture : {lobbyCreateByUser.coach_number}
          </p>
        </div>
      ) : (
        <div className="validated-message-text">
          <p>Vous venez de créer la salle de discussion : </p>
          {(lobbyCreateByUser.name, lobbyCreateByUser.number_of_gamers)}
          <p>Rappels concernant votre voyage :</p>
          <p>Date du voyage : </p>
          {lobbyCreateByUser.date}
          <p>Numéro de train : {lobbyCreateByUser.train_number}</p>
          <p>Numéro de voiture : {lobbyCreateByUser.coach_number}</p>
        </div>
      )}
      {/* <button type="button" className="generic-btn return-btn-lobbyChoice">
        Retour
      </button> */}
    </div>
  );
}

export default ValidatedMessage;
