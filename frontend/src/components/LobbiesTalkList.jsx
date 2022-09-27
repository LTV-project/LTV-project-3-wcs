import { useNavigate } from "react-router-dom";

export default function LobbiesTalkList({ displayLobbies }) {
  const navigate = useNavigate();
  return (
    <div className="dark-body">
      {displayLobbies &&
        displayLobbies.map((lobby) => (
          <div className="mini-card" key={lobby.id}>
            {/* <img src="" alt="user-avatar" /> */}
            <p>Hôte : {lobby.pseudo}</p>
            <p>Thème : {lobby.theme}</p>
            <p>Participants : {lobby.participants}</p>
            <p>Description : {lobby.description}</p>
            <button type="button">détails</button>
            <button type="button">rejoindre</button>
          </div>
        ))}
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
