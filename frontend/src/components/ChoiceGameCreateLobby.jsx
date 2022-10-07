import axios from "axios";
import { useEffect, useState } from "react";
import LobbyGame from "./LobbyGame";

function ChoiceGameCreateLobby() {
  const [games, setGames] = useState("");
  const [cardIsClicked, setCardIsClicked] = useState(false);
  const [boardIsClicked, setBoardIsClicked] = useState(false);
  const [selectedValue, setselectedValue] = useState("");
  const handleChange = (e) => {
    setselectedValue(e.target.value);
  };

  const handleClickCard = () => {
    setCardIsClicked(!cardIsClicked);
  };
  const handleClickBoard = () => {
    setBoardIsClicked(!boardIsClicked);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/games`)
      .then((response) => response.data)
      .then((data) => setGames(data));
  }, [handleClickCard]);

  return (
    <div className="lobby-form-wrapper">
      <div className="parent_btn_click_create_lobby">
        {!boardIsClicked ? (
          <button
            className="btn_click_create_lobby"
            type="button"
            onClick={handleClickCard}
          >
            {!cardIsClicked ? "Jeu de cartes" : "Retour"}
          </button>
        ) : (
          ""
        )}
        {!cardIsClicked ? (
          <button
            className="btn_click_create_lobby"
            type="button"
            onClick={handleClickBoard}
          >
            {!boardIsClicked ? "Jeu de plateau" : "Retour"}
          </button>
        ) : (
          ""
        )}
      </div>
      {boardIsClicked ? (
        <select
          className="btn_click_create_lobby_select"
          value={selectedValue}
          onChange={handleChange}
        >
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
        <select
          className="btn_click_create_lobby_select"
          value={selectedValue}
          onChange={handleChange}
        >
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
