import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { getDate } from "../services/DateManager";

export default function LobbyTalk() {
  const { currentUser } = useContext(CurrentUserContext);

  const navigate = useNavigate();

  const [talk, setTalk] = useState({
    number_of_gamers: "",
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
        axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/lobbies`, {
            ...talk,
            travel_infos_id: response.data,
            user_id: currentUser.sub,
          })
          .then((res) =>
            navigate("/validated-message", {
              state: { id: res.data },
            })
          );
      })
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
            <p className={talk.name ? "parag-fixed" : "parag-lobby-create"}>
              Veuillez renseigner ce champ avant de poursuivre
            </p>
            <button
              type="button"
              className="create-lobby-input-valited"
              onClick={() => {
                if (talk.name) {
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
              value={talk.number_of_gamers}
              placeholder="Nombre de participants souhaité"
              onChange={(e) =>
                setTalk({
                  ...talk,
                  number_of_gamers: e.target.value.replace(/\D/g, ""),
                })
              }
              required
            />
            <p
              className={
                talk.number_of_gamers ? "parag-fixed" : "parag-lobby-create"
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
                  if (talk.number_of_gamers) {
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
              value={talk.theme}
              placeholder="Sujet d'échange souhaité"
              onChange={(e) =>
                setTalk({
                  ...talk,
                  theme: e.target.value,
                })
              }
              required
            />
            <p className={talk.theme ? "parag-fixed" : "parag-lobby-create"}>
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
                  if (talk.theme) {
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
    case 10:
      return (
        <div>
          <form className="form-lobby">
            <input
              className="create-lobby-commentary"
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
              className={talk.commentary ? "parag-fixed" : "parag-lobby-create"}
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
        <div className="container-recap-creation">
          <form onSubmit={handleSubmitButton} className="form-lobby">
            <p className="parag-lobby-create-recap">Nom de la salle</p>
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
            <p className="parag-lobby-create-recap">
              Nombre de participants souhaités
            </p>
            <input
              className="create-lobby-input"
              type="text"
              value={talk.number_of_gamers}
              placeholder="Nombre de participants souhaités"
              onChange={(e) =>
                setTalk({
                  ...talk,
                  number_of_gamers: e.target.value.replace(/\D/g, ""),
                })
              }
              required
            />
            <p className="parag-lobby-create-recap">Sujet d'échange souhaité</p>
            <input
              className="create-lobby-input"
              type="text"
              value={talk.theme}
              placeholder="Sujet d'échange souhaité"
              onChange={(e) =>
                setTalk({
                  ...talk,
                  theme: e.target.value,
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
            <p className="parag-lobby-create-recap">Mon commentaire</p>
            <input
              className="create-lobby-commentary"
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
          </form>
          <button
            type="button"
            className="generic-btn confirm-creation"
            onClick={handleSubmitButton}
          >
            Je crée ma salle d'échange
          </button>
        </div>
      );
    default:
  }
}
