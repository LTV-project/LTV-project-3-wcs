import axios from "axios";
import React, { useEffect, useState } from "react";

function ValidatedMessage() {
  const [lobbyCreateByUser, setLobbyCreate] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lobbies/1`)
      .then((response) => response.data)
      .then((data) => setLobbyCreate(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>
        Félicitations{" "}
        {lobbyCreateByUser.pseudo
          ? lobbyCreateByUser.pseudo
          : "place du pseudo"}{" "}
        !!!
      </h2>
      <p>
        Vous venez de créer la salle de jeu :{" "}
        {(lobbyCreateByUser.name, lobbyCreateByUser.number_of_gamers)}
        N'oubliez pas d'apporter votre jeu !!! Rappels concernant votre voyage :
        Date du voyage : {lobbyCreateByUser.date}
        Numéro de train : {lobbyCreateByUser.train_number}
        Numéro de voiture : {lobbyCreateByUser.coach_number}
      </p>
      <button type="button" className="generic-btn return-btn-lobbyChoice">
        Retour
      </button>
    </div>
  );
}

export default ValidatedMessage;
