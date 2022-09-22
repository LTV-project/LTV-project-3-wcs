import { useState } from "react";
import axios from "axios";

export default function GameAddTableAdmin() {
  const [addGame, setAddGame] = useState({
    name: "",
    category: "",
  });
  const postGame = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/`, {
      ...addGame,
    });
  };

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Ajouter un jeu</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="text"
              value={addGame.name}
              placeholder="Nom du jeu"
              onChange={(e) => setAddGame({ ...addGame, name: e.target.value })}
            />
          </td>
          <td>
            <input
              type="text"
              value={addGame.category}
              placeholder="board_game ou card_game"
              onChange={(e) =>
                setAddGame({ ...addGame, category: e.target.value })
              }
            />
          </td>
          <td>
            <button type="button" onClick={postGame}>
              Ajouter
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
