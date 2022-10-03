import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDate } from "../services/DateManager";

export default function LobbyGame({ selectedValue }) {
  // Une fonction pour convertir l'id du jeu en number

  const filterInt = (value) => {
    if (/^(-|\+)?(\d+|Infinity)$/.test(value)) return Number(value);
    return NaN;
  };

  const navigate = useNavigate();

  const [lobby, setLobby] = useState({
    game_id: filterInt(selectedValue),
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

  function handleSubmitButton() {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/travel_info`, {
        ...travelInfo,
        date: travelInfo.date,
      })
      .then((response) => {
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/lobbies`, {
          ...lobby,
          travel_infos_id: response.data,
        });
      })
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  }
  return (
    <div className="createlobby">
      <div>
        <h2 className="title-create-lobby">Je crée ma salle de jeu</h2>
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitButton();
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
                  number_of_gamers: e.target.value.replace(/\D/g, ""),
                })
              }
              required
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
              required
            />
          </div>
          <div className="infotravel-create-lobby">
            <input
              className="create-lobby-input"
              type="date"
              min={getDate()}
              value={travelInfo.date}
              placeholder="Date de mon voyage"
              onChange={(e) =>
                setTravelInfo({
                  ...travelInfo,
                  date: e.target.value,
                })
              }
              required
            />
            <input
              className="create-lobby-input"
              type="text"
              value={travelInfo.train_number}
              placeholder="Je renseigne mon numéro de train"
              onChange={(e) =>
                setTravelInfo({
                  ...travelInfo,
                  train_number: e.target.value.replace(/\D/g, ""),
                })
              }
              required
            />
            <input
              className="create-lobby-input"
              type="text"
              value={travelInfo.coach_number}
              placeholder="Mon numéro de voiture"
              onChange={(e) =>
                setTravelInfo({
                  ...travelInfo,
                  coach_number: e.target.value.replace(/\D/g, ""),
                })
              }
              required
            />
            <input
              className="create-lobby-input"
              type="text"
              value={travelInfo.seat_number}
              placeholder="Mon numéro de place"
              onChange={(e) =>
                setTravelInfo({
                  ...travelInfo,
                  seat_number: e.target.value.replace(/\D/g, ""),
                })
              }
              required
            />
            <input
              className="create-lobby-input-od"
              type="text"
              value={travelInfo.departure}
              placeholder="Gare de départ de mon voyage"
              onChange={(e) =>
                setTravelInfo({
                  ...travelInfo,
                  departure: e.target.value,
                })
              }
              required
            />
            <input
              className="create-lobby-input-od"
              type="text"
              value={travelInfo.arrival}
              placeholder="Gare d'arrivée de mon voyage"
              onChange={(e) =>
                setTravelInfo({
                  ...travelInfo,
                  arrival: e.target.value,
                })
              }
              required
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
              required
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
