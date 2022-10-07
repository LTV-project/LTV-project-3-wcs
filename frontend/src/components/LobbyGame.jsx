/* eslint-disable radix */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDate } from "../services/DateManager";

export default function LobbyGame({ selectedValue }) {
  // Une fonction pour convertir l'id du jeu en number

  const id = parseInt(selectedValue);

  const navigate = useNavigate();

  const [lobby, setLobby] = useState({
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

  // Création variable pour créer les boutons suivant et précédent :
  const [step, setStep] = useState(1);

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
          game_id: id,
        });
      })
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  }

  switch (step) {
    case 1:
      return (
        <div>
          <form className="form-lobby">
            <input
              className="create-lobby-input"
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
            <p className="parag-lobby-create">
              Veuillez renseigner ce champ avant de poursuivre
            </p>
            <button
              type="button"
              className="create-lobby-input-valited"
              onClick={() => {
                if (lobby.name) {
                  setStep(step + 1);
                }
              }}
            >
              Suivant
            </button>
          </form>
        </div>
      );
    case 2:
      return (
        <div>
          <form className="form-lobby">
            <input
              className="create-lobby-input"
              type="text"
              value={lobby.number_of_gamers}
              placeholder="Nombre de joueurs souhaité"
              onChange={(e) =>
                setLobby({
                  ...lobby,
                  number_of_gamers: e.target.value.replace(/\D/g, ""),
                })
              }
              required
            />
            <p
              className={
                lobby.number_of_gamers ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuillez renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container-create-lobby-create-lobby">
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Précédent
              </button>
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  if (lobby.number_of_gamers) {
                    setStep(step + 1);
                  }
                }}
              >
                Suivant
              </button>
            </div>
          </form>
        </div>
      );
    case 3:
      return (
        <div>
          <form className="form-lobby">
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
            <p
              className={travelInfo.date ? "parag-fixed" : "parag-lobby-create"}
            >
              Veuillez renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container-create-lobby">
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Précédent
              </button>
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  if (travelInfo.date) {
                    setStep(step + 1);
                  }
                }}
              >
                Suivant
              </button>
            </div>
          </form>
        </div>
      );
    case 4:
      return (
        <div>
          <form className="form-lobby">
            <input
              className="create-lobby-input"
              type="text"
              value={travelInfo.train_number}
              placeholder="Mon numéro de train"
              onChange={(e) =>
                setTravelInfo({
                  ...travelInfo,
                  train_number: e.target.value.replace(/\D/g, ""),
                })
              }
              required
            />
            <p
              className={
                travelInfo.train_number ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuillez renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container-create-lobby">
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Précédent
              </button>
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  if (travelInfo.train_number) {
                    setStep(step + 1);
                  }
                }}
              >
                Suivant
              </button>
            </div>
          </form>
        </div>
      );
    case 5:
      return (
        <div>
          <form className="form-lobby">
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
            <p
              className={
                travelInfo.coach_number ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuillez renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container-create-lobby">
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Précédent
              </button>
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  if (travelInfo.coach_number) {
                    setStep(step + 1);
                  }
                }}
              >
                Suivant
              </button>
            </div>
          </form>
        </div>
      );
    case 6:
      return (
        <div>
          <form className="form-lobby">
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
            <p
              className={
                travelInfo.seat_number ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuillez renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container-create-lobby">
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Précédent
              </button>
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  if (travelInfo.seat_number) {
                    setStep(step + 1);
                  }
                }}
              >
                Suivant
              </button>
            </div>
          </form>
        </div>
      );
    case 7:
      return (
        <div>
          <form className="form-lobby">
            <input
              className="create-lobby-input"
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
            <p
              className={
                travelInfo.departure ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuillez renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container-create-lobby">
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Précédent
              </button>
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  if (travelInfo.departure) {
                    setStep(step + 1);
                  }
                }}
              >
                Suivant
              </button>
            </div>
          </form>
        </div>
      );
    case 8:
      return (
        <div>
          <form className="form-lobby">
            <input
              className="create-lobby-input"
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
            <p
              className={
                travelInfo.arrival ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuillez renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container-create-lobby">
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Précédent
              </button>
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  if (travelInfo.arrival) {
                    setStep(step + 1);
                  }
                }}
              >
                Suivant
              </button>
            </div>
          </form>
        </div>
      );
    case 9:
      return (
        <div>
          <form className="form-lobby">
            <input
              className="create-lobby-input-commentary"
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
            <p
              className={
                lobby.commentary ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuillez renseigner ce champ avant de poursuivre
            </p>
            <button
              type="button"
              className="create-lobby-input-valited"
              onClick={() => {
                if (lobby.commentary) {
                  setStep(step + 1);
                }
              }}
            >
              Suivant
            </button>
            <button
              type="button"
              className="create-lobby-input-valited"
              onClick={() => {
                setStep(step - 1);
              }}
            >
              Précédent
            </button>
          </form>
        </div>
      );
    case 10:
      return (
        <div>
          <form onSubmit={handleSubmitButton} className="form-lobby">
            <p className="parag-lobby-create-recap">Nom de la salle</p>
            <input
              className="create-lobby-input"
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
            <p className="parag-lobby-create-recap">Nombre de joueurs</p>
            <input
              className="create-lobby-input"
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
            <p className="parag-lobby-create-recap">Date de mon voyage</p>
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
            <p className="parag-lobby-create-recap">Mon numéro de train</p>
            <input
              className="create-lobby-input"
              type="text"
              value={travelInfo.train_number}
              placeholder="Mon numéro de train"
              onChange={(e) =>
                setTravelInfo({
                  ...travelInfo,
                  train_number: e.target.value.replace(/\D/g, ""),
                })
              }
              required
            />
            <p className="parag-lobby-create-recap">Mon numéro de voiture</p>
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
            <p className="parag-lobby-create-recap">Mon numéro de place</p>
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
            <p className="parag-lobby-create-recap">Ma gare de départ</p>
            <input
              className="create-lobby-input"
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
            <p className="parag-lobby-create-recap">Ma gare d'arrivée</p>
            <input
              className="create-lobby-input"
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
            <p className="parag-lobby-create-recap">Je laisse un commentaire</p>
            <input
              className="create-lobby-input-commentary"
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
            <input
              className="generic-btn confirm-creation"
              type="submit"
              value="Je crée ma salle de jeu"
            />
          </form>
        </div>
      );
    default:
  }
}
