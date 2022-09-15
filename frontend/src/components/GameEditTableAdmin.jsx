import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function GameEditTableAdmin({ game }) {
  const params = useParams();
  const [editGame, setEditGame] = useState(game);
  const updateGame = () => {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/games/${params.id}`, {
      ...editGame,
    });
  };

  return (
    <tbody>
      <tr>
        <td>
          <input
            type="text"
            value={editGame.name}
            onChange={(e) => setEditGame({ ...editGame, name: e.target.value })}
          />
        </td>
        <td>
          <input
            type="text"
            value={editGame.category}
            onChange={(e) =>
              setEditGame({ ...editGame, category: e.target.value })
            }
          />
        </td>
        <td>
          <button type="button" onClick={updateGame}>
            Éditer
          </button>
        </td>
        <td>
          <button type="button">Supprimer</button>
        </td>
      </tr>
    </tbody>
  );
}
