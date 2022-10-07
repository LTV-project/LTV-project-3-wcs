import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDate } from "@services/DateManager";

export default function LobbyTalk({ selectedValue }) {
  // Une fonction pour convertir l'id du jeu en number

  const id = parseInt(selectedValue, 10);

  const navigate = useNavigate();

  const [talk, setTalk] = useState({
    number_of_talkers: "",
    theme: "",
    name: "",
    commentary: "",
    category_id: 1,
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
          ...talk,
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
              value={talk.name}
              placeholder="Nom de la salle"
              onChange={(e) =>
                setTalk({
                  ...talk,
                  name: e.target.value,
                })
              }
              required
            />
            <p>Veuiller renseigner ce champ avant de poursuivre</p>
            <button
              type="button"
              className="create-lobby-input-valited"
              onClick={() => {
                setStep(step + 1);
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
              value={talk.number_of_talkers}
              placeholder="Nombre de participants souhaités"
              onChange={(e) =>
                setTalk({
                  ...talk,
                  number_of_talkers: e.target.value.replace(/\D/g, ""),
                })
              }
              required
            />
            <p
              className={
                talk.number_of_talkers ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuiller renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container">
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
                  if (talk.number_of_talkers) {
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
              type="text"
              value={talk.name}
              placeholder="Sujet d'échange souhaité"
              onChange={(e) =>
                setTalk({
                  ...talk,
                  theme: e.target.value,
                })
              }
              required
            />
            <p
              className={talk.theme.date ? "parag-fixed" : "parag-lobby-create"}
            >
              Veuiller renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container">
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  if (talk.theme) {
                    setStep(step - 1);
                  }
                }}
              >
                Précédent
              </button>
              <button
                type="button"
                className="create-lobby-input-valited"
                onClick={() => {
                  setStep(step + 1);
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
              className={
                talk.number_of_talkers ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuiller renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container">
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
    case 5:
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
                talk.number_of_talkers ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuiller renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container">
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
    case 6:
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
                talk.number_of_talkers ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuiller renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container">
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
    case 7:
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
                talk.number_of_talkers ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuiller renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container">
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
    case 8:
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
                talk.number_of_talkers ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuiller renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container">
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
    case 9:
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
                talk.number_of_talkers ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuiller renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container">
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
    case 10:
      return (
        <div>
          <form className="form-lobby">
            <input
              className="commentary-create-lobby-input"
              type="text"
              value={talk.commentary}
              placeholder="Je laisse un commentaire"
              onChange={(e) =>
                setTalk({
                  ...talk,
                  commentary: e.target.value,
                })
              }
              required
            />
            <p
              className={
                talk.number_of_talkers ? "parag-fixed" : "parag-lobby-create"
              }
            >
              Veuiller renseigner ce champ avant de poursuivre
            </p>
            <div className="btn-container">
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
                  if (talk.commentary) {
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
    case 11:
      return (
        <div>
          <form onSubmit={handleSubmitButton} className="form-lobby">
            <input
              className="create-lobby-input"
              type="text"
              value={setTalk.name}
              placeholder="Nom de la salle"
              onChange={(e) =>
                setTalk({
                  ...talk,
                  name: e.target.value,
                })
              }
              required
            />
            <input
              className="create-lobby-input"
              type="text"
              value={talk.number_of_talkers}
              placeholder="Nombre de participants souhaités"
              onChange={(e) =>
                setTalk({
                  ...talk,
                  number_of_talkers: e.target.value.replace(/\D/g, ""),
                })
              }
              required
            />
            <input
              className="create-lobby-input"
              type="text"
              value={talk.name}
              placeholder="Sujet d'échange souhaité"
              onChange={(e) =>
                setTalk({
                  ...talk,
                  theme: e.target.value,
                })
              }
              required
            />
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
              placeholder="Mon numéro de train"
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

            <input
              className="create-lobby-input-commentary"
              type="text"
              value={talk.commentary}
              placeholder="Je laisse un commentaire"
              onChange={(e) =>
                setTalk({
                  ...talk,
                  commentary: e.target.value,
                })
              }
              required
            />
            <input
              className="create-lobby-input-valited"
              type="submit"
              value="Je crée ma salle d'échange"
            />
          </form>
        </div>
      );
    default:
  }
}
