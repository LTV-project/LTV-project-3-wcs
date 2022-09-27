import { useNavigate } from "react-router-dom";

export default function LobbiesGameList({ displayLobbies }) {
  const navigate = useNavigate();

  return (
    <div className="dark-body">
      <div className="mini-card">
        <p>{displayLobbies.pseudo}</p>
        <p>Jeu</p>
        <p>Nb joueurs</p>
        <p>Places</p>
        <button type="button">détails</button>
        <button type="button">rejoindre</button>
      </div>
      <button
        type="button"
        className="generic-btn return-btn-lobbyChoice"
        onClick={() => navigate(0)}
      >
        Retour
      </button>
    </div>
  );
}
