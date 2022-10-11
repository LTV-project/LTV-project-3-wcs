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

  // eslint-disable-next-line no-unused-vars
  const uploadImage = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "Projet3_Ltv");
    data.append("cloud_name", "bibilekid");
    fetch("  https://api.cloudinary.com/v1_1/bibilekid/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data1) => {
        setUser({ ...user, image: data1.url });
        //   a changer suivant la page setgetuser et getuser
      })
      .catch((err) => console.error(err));
  };

  // eslint-disable-next-line no-unused-vars
  const [dataInput, setDataInput] = useState(true);

  return (
    <div className="user-profile-container">
      <div className="user-profile-dashboard">
        <button
          className="generic-btn btn-editaccount"
          type="button"
          onClick={() => {
            setDataInput(true);
            navigate(`/user-profile/${params.id}/edit`);
          }}
        >
          Éditer mon profil
        </button>
        <button
          className="generic-btn btn-editaccount"
          type="button"
          onClick={() => {
            setDataInput(false);
            navigate(`/lobbies/${params.id}/`);
          }}
        >
          Mes salles
        </button>
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
