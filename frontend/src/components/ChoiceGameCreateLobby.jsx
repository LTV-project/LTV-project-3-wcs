import axios from "axios";
import { useEffect, useState } from "react";
/* import oldCartes from "template-fullstack/assets/images/oldCartes.jpg"; */
import LobbyGame from "./LobbyGame";

function ChoiceGameCreateLobby() {
  const [games, setGames] = useState("");
  const [cardIsClicked, setCardIsClicked] = useState(false);
  const [boardIsClicked, setBoardIsClicked] = useState(false);
  const [selectedValueLobby, setselectedValueLobby] = useState({
    name: "",
    number_of_gamers: "",
    Commentary: "",
  });

  /* const [selectedValueTravel, setselectedValueTravel] = useState({
    train_number: "",
    coach_number: "",
    seat_number: "",
    departure: "",
    date: "",
    arrival: "",
  });
*/
  const handleChange = (e) => {
    setselectedValueLobby(e.target.value);
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
  /*      <img
        src={oldCartes}
        className="old-cartes-img"
        alt="Jeu de 52 cartes tenu dans une main faces visibles"
      />
      */
  return (
    <div>
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
          value={selectedValueLobby}
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
          value={selectedValueLobby}
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
      <LobbyGame selectedValueLobby={selectedValueLobby} />
    </div>
  );
}

export default ChoiceGameCreateLobby;
