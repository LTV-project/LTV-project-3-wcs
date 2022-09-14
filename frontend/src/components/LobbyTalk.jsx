import axios from "axios";
import { useState } from "react";

export default function LobbyTalk() {
  const [talk, setTalk] = useState({
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
      .post(`${import.meta.env.VITE_BACKEND_URL}/lobbies`, { ...talk })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  return (
    <div>
      <h2>Je crée ma salle d'échange</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postLobby();
        }}
      >
        <input
          type="text"
          value={talk.name_of_lobby}
          placeholder="Sujet d'échange souhaité"
          onChange={(e) =>
            setTalk({
              ...talk,
              name_of_lobby: e.target.value,
            })
          }
        />
        <input
          type="text"
          value=""
          placeholder="Je renseigne mon numéro de train"
          onChange={(e) =>
            setTalk({
              ...talk,
              travel_info: e.target.value,
            })
          }
        />
        <input
          type=""
          value=""
          placeholder="Nombre d'invités"
          onChange={(e) =>
            setTalk({
              ...talk,
              number_of_gamers: e.target.value,
            })
          }
        />
        <input
          type="text"
          value=""
          placeholder="Date de mon voyage"
          onChange={(e) =>
            setTalk({
              ...talk,
              date: e.target.value,
            })
          }
        />
        <input
          type=""
          value=""
          placeholder="Mon numéro de train"
          onChange={(e) =>
            setTalk({
              ...talk,
              train_number: e.target.value,
            })
          }
        />
        <input
          type=""
          value=""
          placeholder="Mon numéro de voiture"
          onChange={(e) =>
            setTalk({
              ...talk,
              coach_number: e.target.value,
            })
          }
        />
        <input
          type="text"
          value="text"
          placeholder="Ma destination"
          onChange={(e) =>
            setTalk({
              ...talk,
              od: e.target.value,
            })
          }
        />
        <input
          type="text"
          value=""
          placeholder="Je laisse un commentaire"
          onChange={(e) =>
            setTalk({
              ...talk,
              commentary: e.target.value,
            })
          }
        />
        <input type="submit" value="Je crée ma salle d'échange" />
      </form>
    </div>
  );
}
