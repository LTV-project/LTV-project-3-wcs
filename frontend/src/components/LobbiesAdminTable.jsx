import { useState, useEffect } from "react";
import axios from "axios";

export default function lobbiesAdminTable() {
  const [lobbies, setLobbies] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lobbies`)
      .then((response) => response.data)
      .then((data) => setLobbies(data));
  }, []);

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Nom de la salle</th>
          <th>Catégorie</th>
          <th>Description</th>
        </tr>
      </thead>
      {lobbies &&
        lobbies.map((lobbie) => (
          <tbody>
            <tr>
              <td>{lobbie.name_of_lobbie}</td>
              <td>{lobbie.commentary}</td>
              <td>Catégorie</td>
            </tr>
          </tbody>
        ))}
    </table>
  );
}
