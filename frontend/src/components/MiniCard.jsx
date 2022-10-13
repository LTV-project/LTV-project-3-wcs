/* eslint-disable radix */
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";

function MiniCard({ lobby }) {
  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const handleSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/participants`, {
        user_id: currentUser.sub,
        lobbie_id: lobby.id,
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="creator-infos">
        <img
          src={lobby.avatar}
          alt="creator-avatar"
          className="creator-avatar"
        />
        <p className="creator-pseudo">Hôte : {lobby.host}</p>
      </div>
      <div className="game-infos">
        <p>Nom de la salle : {lobby.name}</p>
        {lobby.game ? <p>Jeu : {lobby.game}</p> : ""}
        <p>Nombre de joueurs : {lobby.number_of_gamers}</p>
      </div>
      <div className="btn-container">
        <button
          type="button"
          className="details-btn"
          onClick={() => navigate(`/lobbies/${lobby.id}`)}
        >
          détails
        </button>
        <button type="button" className="join-btn" onClick={handleSubmit}>
          rejoindre
        </button>
      </div>
    </>
  );
}

export default MiniCard;
