import axios from "axios";
import { useState, useEffect } from "react";

function LobbyChoice() {
  const [displayLobbies, setDisplayLobbies] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/joinLobbies`)
      .then((response) => response.data)
      .then((data) => setDisplayLobbies(data));
  }, []);

  return (
    <section>
      <input
        type="text"
        className="train-number-input"
        placeholder={displayLobbies && displayLobbies[2].train_number}
      />
      <div className="lobby-choice-wrapper">
        <div className="lobby-choice">
          <button type="button" className="choice-btn">
            Jouer
          </button>
        </div>
        <div className="lobby-choice">
          <button type="button" className="choice-btn">
            Discuter
          </button>
        </div>
      </div>
    </section>
  );
}

export default LobbyChoice;
