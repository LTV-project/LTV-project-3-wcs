import axios from "axios";
import { useState, useEffect } from "react";
import LobbiesGameList from "./LobbiesGameList";
import LobbiesTalkList from "./LobbiesTalkList";

function LobbyChoice() {
  const [displayLobbies, setDisplayLobbies] = useState("");
  const [isClicked, setIsClicked] = useState("");

  useEffect(() => {
    axios
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

  return (
    <div>
      {isClicked === "" ? (
        <section>
          <input
            type="text"
            className="train-number-input"
            placeholder={displayLobbies && displayLobbies[2].train_number}
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
        <LobbiesGameList displayLobbies={displayLobbies} />
      ) : (
        ""
      )}
      {isClicked === "talk" ? (
        <LobbiesTalkList displayLobbies={displayLobbies} />
      ) : (
        ""
      )}
    </div>
  );
}

export default LobbyChoice;
