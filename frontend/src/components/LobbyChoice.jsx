import axios from "axios";
import { useState, useEffect } from "react";
import LobbiesGameList from "./LobbiesGameList";
import LobbiesTalkList from "./LobbiesTalkList";

function LobbyChoice() {
  // Un état pour stocker les données reçues de la route décrite ci-dessous
  const [displayLobbies, setDisplayLobbies] = useState("");

  /*   Un état pour gérer l'affichage conditionnel des salles selon le critère de catégorie de salle. Au click sur le bouton "jouer" le state se surcharge avec le mot "game" qui sert de filtre pour l'affichage des salles de jeu uniquement. Un méthode affichant "talk" fonctionne pour l'autre catégorie. */
  const [isClicked, setIsClicked] = useState("");

  /* Un état pour stocker la valeur dans l'input de choix du numéro de train et s'en servir comme filter */
  const [trainNumberFilter, setTrainNumberFilter] = useState("");

  useEffect(() => {
    axios
      /*     Une route qui permet de récupérer toutes les informations nécessaires à l'affichage d'une page de recherche de LobbiesGameList, dans toutes les tables, grâce aux jointures */
      .get(`${import.meta.env.VITE_BACKEND_URL}/joinLobbies`)
      .then((response) => response.data)
      .then((data) => setDisplayLobbies(data));
  }, []);

  const handleClickGame = () => {
    setIsClicked("game");
  };
  const handleClickTalk = () => {
    setIsClicked("talk");
  };

  const handleChange = (e) => {
    setTrainNumberFilter(e.target.value);
  };

  return (
    <div className="lobby-choice-page-container">
      {isClicked !== "" ? (
        <h2>
          Liste des salles disponibles dans votre train {trainNumberFilter} :
        </h2>
      ) : (
        ""
      )}
      {isClicked === "" ? (
        <section>
          <input
            type="text"
            className="train-number-input"
            value={trainNumberFilter}
            onChange={handleChange}
          />
          <div className="lobby-choice-wrapper">
            <div className="lobby-choice">
              <button
                type="button"
                className="choice-btn"
                onClick={handleClickGame}
              >
                Jouer
              </button>
            </div>
            <div className="lobby-choice">
              <button
                type="button"
                className="choice-btn"
                onClick={handleClickTalk}
              >
                Discuter
              </button>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
      {isClicked === "game" ? (
        <LobbiesGameList
          displayLobbies={displayLobbies}
          trainNumberFilter={trainNumberFilter}
        />
      ) : (
        ""
      )}
      {isClicked === "talk" ? (
        <LobbiesTalkList
          displayLobbies={displayLobbies}
          trainNumberFilter={trainNumberFilter}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default LobbyChoice;
