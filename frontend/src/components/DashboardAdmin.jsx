import { useState } from "react";
import UsersAdminTable from "@components/UsersAdminTable";
import LobbiesAdminTable from "@components/LobbiesAdminTable";
import GamesAdminTable from "@components/GamesAdminTable";

export default function DashboardAdmin() {
  const [displayManager, setDisplayManager] = useState("");

  return (
    <div className="admin-page-container">
      <div className="dashboard-wrapper">
        <ul className="dashboard-items-container">
          <button
            type="button"
            className="dashboard-items"
            onClick={() => setDisplayManager("")}
          >
            Dashboard
          </button>
          <button
            type="button"
            className="dashboard-items"
            onClick={() => setDisplayManager("users")}
          >
            Users
          </button>
          <button
            type="button"
            className="dashboard-items"
            onClick={() => setDisplayManager("games")}
          >
            Games
          </button>
          <button
            type="button"
            className="dashboard-items"
            onClick={() => setDisplayManager("lobbies")}
          >
            Lobbies
          </button>
        </ul>
      </div>
      <div className="tables-wrapper">
        {displayManager === "users" ? <UsersAdminTable /> : ""}
        {displayManager === "games" ? <GamesAdminTable /> : ""}
        {displayManager === "lobbies" ? <LobbiesAdminTable /> : ""}
      </div>
    </div>
  );
}
