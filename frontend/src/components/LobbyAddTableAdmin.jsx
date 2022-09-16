import { useState } from "react";
import axios from "axios";

export default function LobbyAddTableAdmin() {
  const [addLobby, setAddLobby] = useState({
    name_of_lobbie: "",
    commentary: "",
  });
  const postLobby = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/lobbies/`, {
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
              placeholder="Nom de la salle"
              onChange={(e) =>
                setAddLobby({ ...addLobby, name_of_lobbie: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={addLobby.category}
              placeholder="Description"
              onChange={(e) =>
                setAddLobby({ ...addLobby, commentary: e.target.value })
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
