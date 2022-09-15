import { useState } from "react";
import axios from "axios";

export default function LobbyAddTableAdmin() {
  const [addLobby, setAddLobby] = useState({
    name: "",
    category: "",
  });
  const postLobby = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/`, {
      ...addLobby,
    });
  };

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Créer une salle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="text"
              value={addLobby.name}
              placeholder="Nom du jeu"
              onChange={(e) =>
                setAddLobby({ ...addLobby, name: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={addLobby.category}
              placeholder="board_game ou card_game"
              onChange={(e) =>
                setAddLobby({ ...addLobby, category: e.target.value })
              }
            />
          </td>
          <td>
            <button type="button" onClick={postLobby}>
              Ajouter
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
