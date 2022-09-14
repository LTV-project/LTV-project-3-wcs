import { useState, useEffect } from "react";
import axios from "axios";
import GameEditTableAdmin from "./GameEditTableAdmin";

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
      {games && games.map((game) => <GameEditTableAdmin game={game} />)}
    </table>
  );
}
