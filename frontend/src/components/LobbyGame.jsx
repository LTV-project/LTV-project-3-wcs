import axios from "axios";
import { useState } from "react";

export default function LobbyGame() {
  const [lobby, setLobby] = useState({
    travel_infos: "",
    number_of_gamers: "",
    theme: "",
    name_of_lobby: "",
    commentary: "",
    date: "",
    train_number: "",
    coach_number: "",
    seat_number: "",
    od: "",
  });

  const postLobby = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/lobbies`, { ...lobby })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  return (
    <div className="createlobby">
      <div>
        <h2>Je crée ma salle de jeu</h2>
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postLobby();
          }}
        >
          <div className="info-create-lobby">
            <input
              className="create-lobby-input-game"
              type=""
              value=""
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
              type=""
              value=""
              placeholder="Nom de la salle"
              onChange={(e) =>
                setLobby({
                  ...lobby,
                  number_of_gamers: e.target.value,
                })
              }
            />
          </div>
          <div className="infotravel-create-lobby">
            <input
              className="create-lobby-input"
              type="text"
              value=""
              placeholder="Date de mon voyage"
              onChange={(e) =>
                setLobby({
                  ...lobby,
                  date: e.target.value,
                })
              }
            />
            <input
              className="create-lobby-input"
              type=""
              value=""
              placeholder="Mon numéro de train"
              onChange={(e) =>
                setLobby({
                  ...lobby,
                  train_number: e.target.value,
                })
              }
            />
            <input
              className="create-lobby-input"
              type=""
              value=""
              placeholder="Mon numéro de voiture"
              onChange={(e) =>
                setLobby({
                  ...lobby,
                  coach_number: e.target.value,
                })
              }
            />
            <input
              className="create-lobby-input"
              type="text"
              value=""
              placeholder="Ma destination"
              onChange={(e) =>
                setLobby({
                  ...lobby,
                  od: e.target.value,
                })
              }
            />
          </div>
          <div className="commentary-create-lobby">
            <input
              className="commentary-create-lobby-input"
              type="text"
              value=""
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
