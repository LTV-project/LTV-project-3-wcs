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
    <div>
      <h2>Je crée ma salle de jeu</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postLobby();
        }}
      >
        <input
          type="text"
          value={lobby.name_of_lobby}
          placeholder="Jeu souhaité"
          onChange={(e) =>
            setLobby({
              ...lobby,
              name_of_lobby: e.target.value,
            })
          }
        />
        <input
          type="text"
          value=""
          placeholder="Date de mon voyage"
          onChange={(e) =>
            setLobby({
              ...lobby,
              travel_info: e.target.value,
            })
          }
        />
        <input
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
          type="text"
          value="text"
          placeholder="ma destination"
          onChange={(e) =>
            setLobby({
              ...lobby,
              od: e.target.value,
            })
          }
        />
        <input
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
        <input type="submit" value="Je crée ma salle de jeu" />
      </form>
    </div>
  );
}
