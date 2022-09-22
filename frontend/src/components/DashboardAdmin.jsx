import { useState } from "react";
import UsersAdminTable from "@components/UsersAdminTable";
import LobbiesAdminTable from "@components/LobbiesAdminTable";
import GamesAdminTable from "@components/GamesAdminTable";

export default function DashboardAdmin() {
  const [displayManager, setDisplayManager] = useState({
    users: false,
    games: false,
    lobbies: false,
  });

  const toggleManager = () => {
    if (displayManager.users === false) {
      setDisplayManager({
        ...displayManager,
        users: true,
        games: false,
        lobbies: false,
      });
    } else if (displayManager.games === false) {
      setDisplayManager({
        ...displayManager,
        games: true,
        users: false,
        lobbies: false,
      });
    } else if (displayManager.lobbies === false) {
      setDisplayManager({
        ...displayManager,
        lobbies: true,
        users: false,
        games: false,
      });
    } else {
      setDisplayManager(!displayManager);
    }
  };

  return (
    <div className="dashboard-wrapper">
      <ul className="dashboard-items-container">
        <button type="button" className="dashboard-items">
          Dashboard
        </button>
        <button
          type="button"
          className="dashboard-items"
          onClick={toggleManager}
        >
          Users
        </button>
        <button
          type="button"
          className="dashboard-items"
          onClick={toggleManager}
        >
          Games
        </button>
        <button
          type="button"
          className="dashboard-items"
          onClick={toggleManager}
        >
          Lobbies
        </button>
      </ul>
      {displayManager.users ? <UsersAdminTable /> : ""}
      {displayManager.lobbies ? <LobbiesAdminTable /> : ""}
      {displayManager.games ? <GamesAdminTable /> : ""}
    </div>
  );
}
