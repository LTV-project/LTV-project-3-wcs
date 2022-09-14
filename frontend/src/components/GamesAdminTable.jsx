import { useState, useEffect } from "react";
import axios from "axios";

export default function GamesAdminTable() {
  const [games, setGames] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/games`)
      .then((response) => response.data)
      .then((data) => setGames(data));
  }, []);

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Nom du jeu</th>
          <th>Catégorie</th>
        </tr>
      </thead>
      {games &&
        games.map((game) => (
          <tbody>
            <tr>
              <td><input type="text" value={game.name} /></td>
              <td><input type="text" value={game.category} /></td>
              <td><button type="checkbox">Supprimer</button></td>
              <td><button type="checkbox">Éditer</button></td>
            </tr>
          </tbody>
        ))}
    </table>
  );
}
