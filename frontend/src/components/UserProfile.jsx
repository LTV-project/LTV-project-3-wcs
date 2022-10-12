import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserProfile() {
  const params = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    pseudo: "",
    email: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${params.id}`)
      .then((response) => response.data)
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="user-profile-container">
      <div className="user-profile-dashboard">
        <button
          className="generic-btn btn-editaccount"
          type="button"
          onClick={() => {
            navigate(`/user-profile/${params.id}/edit`);
          }}
        >
          Éditer mon profil
        </button>
        {user.isAdmin === 1 ? (
          <button
            className="generic-btn btn-editaccount"
            type="button"
            onClick={() => {
              navigate(`/admin`);
            }}
          >
            Administrateur
          </button>
        ) : (
          ""
        )}

        {user.isAdmin === 0 ? (
          <button
            className="generic-btn btn-editaccount"
            type="button"
            onClick={() => {
              navigate(`/lobbies/${params.id}/`);
            }}
          >
            Mes salles
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="user-profile">
        <div className="avatar">
          <img src={user.image} alt={user.pseudo} />
        </div>
        <form className="user-profile-form">
          <p>Pseudonyme : {user.pseudo}</p>
          <p>Email: {user.email}</p>

          <p className="description">
            Ma description
            <br />
            {user.description}
          </p>
        </form>
      </div>
    </div>
  );
}
