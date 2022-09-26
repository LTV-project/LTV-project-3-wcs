import axios from "axios";
import { useState } from "react";

export default function LobbyTalk() {
  const [talk, setTalk] = useState({
    number_of_gamers: "",
    theme: "",
    name: "",
    commentary: "",
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
          value={talk.name}
          placeholder="Sujet d'échange souhaité"
          onChange={(e) =>
            setTalk({
              ...talk,
              name: e.target.value,
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
          type="text"
          value={travelInfo.train_number}
          placeholder="Je renseigne mon numéro de train"
          onChange={(e) =>
            setTravelInfo({
              ...travelInfo,
              travel_number: e.target.value,
            })
          }
        />
        <input
          type=""
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
