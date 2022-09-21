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
      <input type="text" placeholder="Numéro de train" />
      <div className="lobby-choice">
        <p>Jouer</p>
      </div>
      <div className="lobby-choice">
        <p>Discuter</p>
      </div>
    </section>
  );
}

export default LobbyChoice;
