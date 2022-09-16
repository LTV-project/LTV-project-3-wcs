import { useState } from "react";
import axios from "axios";

export default function LobbyEditTableAdmin({ lobby }) {
  const [editLobby, setEditLobby] = useState(lobby);
  const { id } = lobby;
  const updateLobby = () => {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/lobbies/${id}`, {
      ...editLobby,
    });
  };
  const deleteLobby = () => {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/lobbies/${id}`, {
      ...editLobby,
    });
  };

  return (
    <tbody>
      <tr>
        <td>
          <input
            type="text"
            value={editLobby.name_of_lobbie}
            onChange={(e) =>
              setEditLobby({ ...editLobby, name_of_lobbie: e.target.value })
            }
          />
        </td>
        <td>Catégorie</td>
        <td>
          <input
            type="text"
            value={editLobby.commentary}
            onChange={(e) =>
              setEditLobby({ ...editLobby, commentary: e.target.value })
            }
          />
        </td>
        <td>
          <button type="button" onClick={updateLobby}>
            Éditer
          </button>
        </td>
        <td>
          <button type="button" onClick={deleteLobby}>Supprimer</button>
        </td>
      </tr>
    </tbody>
  );
}
