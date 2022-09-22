import { useState, useEffect } from "react";
import axios from "axios";
import LobbyEditTableAdmin from "./LobbyEdditTableAdmin";
import LobbyAddTableAdmin from "./LobbyAddTableAdmin";

export default function lobbysAdminTable() {
  const [lobbies, setLobbies] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lobbies`)
      .then((response) => response.data)
      .then((data) => setLobbies(data));
  }, []);

  return (
    <div>
      <LobbyAddTableAdmin />
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nom de la salle</th>
            <th>Catégorie</th>
            <th>Description</th>
          </tr>
        </thead>
        {lobbies &&
          lobbies.map((lobby) => (
            <LobbyEditTableAdmin lobby={lobby} key={lobby.id} />
          ))}
      </table>
    </div>
  );
}
