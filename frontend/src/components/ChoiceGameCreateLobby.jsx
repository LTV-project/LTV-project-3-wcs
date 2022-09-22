import axios from "axios";
import { useEffect, useState } from "react";
import oldCartes from "template-fullstack/assets/images/oldCartes.jpg";

function ChoiceGameCreateLobby() {
  const [games, setGames] = useState("");
  const [cardIsClicked, setCardIsClicked] = useState(false);
  const [boardIsClicked, setBoardIsClicked] = useState(false);

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
      <button type="button" onClick={handleClickCard}>
        Jeu de cartes
      </button>
      <button type="button" onClick={handleClickBoard}>
        Jeu de plateau
      </button>
      {boardIsClicked ? (
        <select name="" id="">
          <option value="Choisissez votre jeu">
            -- Choisissez votre jeu --
          </option>
          {games &&
            games.map((game) =>
              game.category === "board_game" ? (
                <option value={game.name}>{game.name}</option>
              ) : (
                ""
              )
            )}
        </select>
      ) : (
        ""
      )}
      {cardIsClicked ? (
        <select name="" id="">
          <option value="Choisissez votre jeu">
            -- Choisissez votre jeu --
          </option>
          {games &&
            games.map((game) =>
              game.category === "card_game" ? (
                <option value={game.name}>{game.name}</option>
              ) : (
                ""
              )
            )}
        </select>
      ) : (
        ""
      )}
    </div>
  );
}

export default ChoiceGameCreateLobby;
