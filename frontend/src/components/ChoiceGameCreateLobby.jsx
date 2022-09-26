import axios from "axios";
import { useEffect, useState } from "react";
import oldCartes from "template-fullstack/assets/images/oldCartes.jpg";
import LobbyGame from "./LobbyGame";

function ChoiceGameCreateLobby() {
  const [games, setGames] = useState("");
  const [cardIsClicked, setCardIsClicked] = useState(false);
  const [boardIsClicked, setBoardIsClicked] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/games`)
      .then((response) => response.data)
      .then((data) => setGames(data));
  }, []);

  const handleClickCard = () => {
    setCardIsClicked(!cardIsClicked);
  };
  const handleClickBoard = () => {
    setBoardIsClicked(!boardIsClicked);
  };

  return (
    <div>
      <img
        src={oldCartes}
        className="old-cartes-img"
        alt="Jeu de 52 cartes tenu dans une main faces visibles"
      />
      {!boardIsClicked ? (
        <button type="button" onClick={handleClickCard}>
          {!cardIsClicked ? "Jeu de cartes" : "Retour"}
        </button>
      ) : (
        ""
      )}
      {!cardIsClicked ? (
        <button type="button" onClick={handleClickBoard}>
          {!boardIsClicked ? "Jeu de plateau" : "Retour"}
        </button>
      ) : (
        ""
      )}
      {boardIsClicked ? (
        <select value={selectedValue} onChange={handleChange}>
          <option value="Choisissez votre jeu">
            -- Choisissez votre jeu --
          </option>
          {games &&
            games.map((game) =>
              game.category === "board_game" ? (
                <option key={game.id} value={game.id}>
                  {game.name}
                </option>
              ) : (
                ""
              )
            )}
        </select>
      ) : (
        ""
      )}
      {cardIsClicked ? (
        <select value={selectedValue} onChange={handleChange}>
          <option value="Choisissez votre jeu">
            -- Choisissez votre jeu --
          </option>
          {games &&
            games.map((game) =>
              game.category === "card_game" ? (
                <option key={game.id} value={game.id}>
                  {game.name}
                </option>
              ) : (
                ""
              )
            )}
        </select>
      ) : (
        ""
      )}
      <LobbyGame selectedValue={selectedValue} />
    </div>
  );
}

export default ChoiceGameCreateLobby;
