import axios from "axios";
import { useState } from "react";

export default function LobbyGame({ selectedValue }) {
  const id = parseInt(selectedValue, 10);
  const [lobby, setLobby] = useState({
    game_id: id,
    number_of_gamers: "",
    name: "",
    commentary: "",
    category_id: 2,
  });
  const [travelInfo, setTravelInfo] = useState({
    train_number: "",
    date: "",
    departure: "",
    arrival: "",
    coach_number: "",
    seat_number: "",
  });

  const postLobby = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/lobbies`, { ...lobby })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  const postTravelInfo = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/travel_info`, {
        ...travelInfo,
      })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };
  return (
    <div className="createlobby">
      <div>
        <h2 className="title-create-lobby">Je crée ma salle de jeu</h2>
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postLobby();
            postTravelInfo();
          }}
        >
          <div className="info-create-lobby">
            <input
              className="create-lobby-input-game"
              type="text"
              value={lobby.number_of_gamers}
              placeholder="Nombre de joueur souhaité"
              onChange={(e) =>
                setLobby({
                  ...lobby,
                  number_of_gamers: e.target.value,
                })
              }
            />
            <input
              className="create-lobby-input-game"
              type="text"
              value={lobby.name}
              placeholder="Nom de la salle"
              onChange={(e) =>
                setLobby({
                  ...lobby,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="infotravel-create-lobby">
            <input
              className="create-lobby-input"
              type="text"
              value={travelInfo.date}
              placeholder="Date de mon voyage"
              onChange={(e) =>
                setTravelInfo({
                  ...travelInfo,
                  date: e.target.value,
                })
              }
            />
            <input
              className="create-lobby-input"
              type="text"
              value={travelInfo.train_number}
              placeholder="Je renseigne mon numéro de train"
              onChange={(e) =>
                setTravelInfo({
                  ...travelInfo,
                  train_number: e.target.value,
                })
              }
            />
            <input
              className="create-lobby-input"
              type="text"
              value={travelInfo.coach_number}
              placeholder="Mon numéro de voiture"
              onChange={(e) =>
                setTravelInfo({
                  ...travelInfo,
                  coach_number: e.target.value,
                })
              }
            />
            <input
              className="create-lobby-input-od"
              type="text"
              value={travelInfo.departure}
              placeholder="Gare de départ de mon voyage"
              onChange={(e) =>
                setTravelInfo({
                  ...travelInfo.departure,
                  departure: e.target.value,
                })
              }
            />
            <input
              className="create-lobby-input-od"
              type="text"
              value={travelInfo.arrival}
              placeholder="Gare d'arrivée de mon voyage"
              onChange={(e) =>
                setTravelInfo({
                  ...travelInfo.arrival,
                  arrival: e.target.value,
                })
              }
            />
          </div>
          <div className="commentary-create-lobby">
            <input
              className="commentary-create-lobby-input"
              type="text"
              value={lobby.commentary}
              placeholder="Je laisse un commentaire"
              onChange={(e) =>
                setLobby({
                  ...lobby,
                  commentary: e.target.value,
                })
              }
            />
          </div>
          <input
            className="create-lobby-input-valited"
            type="submit"
            value="Je crée ma salle de jeu"
          />
        </form>
      </div>
    </div>
  );
}
