import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditAccount() {
  const params = useParams();
  const navigate = useNavigate();

  const [editUser, setEditUser] = useState({
    pseudo: "",
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    password: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${params.id}`)
      .then((response) => response.data)
      .then((data) => setEditUser(data));
  }, []);

  const [confirmPassword, setConfirmPassword] = useState("");

  function updateAccount() {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/users/${params.id}`, {
      ...editUser,
    });
  }

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
        setEditUser({ ...editUser, image: data1.url });
        //   a changer suivant la page setgetuser et getuser
      })
      .catch((err) => console.error(err));
  };

  function deleteAccount() {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/users/${params.id}`);
  }
  function handleDelete() {
    deleteAccount();
    navigate("/");
  }

  const [typeInputPassword] = useState("password");

  const [dataInput, setDataInput] = useState(true);

  return (
    <div className="user-profile-container">
      <div className="user-profile-dashboard">
        <button
          className="generic-btn btn-editaccount"
          type="button"
          onClick={() => setDataInput(true)}
        >
          Mon Profil
        </button>
        <button
          className="generic-btn btn-editaccount"
          type="button"
          onClick={() => setDataInput(false)}
        >
          Sécurité
        </button>
        <button
          className="generic-btn btn-editaccount"
          type="button"
          onClick={handleDelete}
        >
          Supprimer mon compte
        </button>
      </div>
      <div className="user-profile-edit">
        <div className="avatar">
          <img src={editUser.image} alt={editUser.pseudo} />
          <input
            className="profile"
            type="file"
            alt="Avatar"
            accept="image/*"
            onChange={(e) => uploadImage(e)}
          />
        </div>
        {dataInput ? (
          <form className="user-profile-edit-form">
            <label htmlFor="pseudo">Pseudonyme :</label>
            <input
              className="input-edit-profile"
              id="pseudo"
              type="text"
              value={editUser.pseudo}
              placeholder="Votre pseudo"
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  pseudo: e.target.value,
                })
              }
            />
            <label htmlFor="age">Âge :</label>
            <input
              className="input-edit-profile"
              type="text"
              id="age"
              value={editUser.age}
              placeholder="Votre âge"
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  age: e.target.value,
                })
              }
            />
            <label htmlFor="firstname">Prénom :</label>
            <input
              className="input-edit-profile"
              type="text"
              id="firstname"
              value={editUser.firstname}
              placeholder="Prénom"
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  firstname: e.target.value,
                })
              }
            />
            <label htmlFor="lastname">Nom :</label>
            <input
              className="input-edit-profile"
              type="text"
              id="lastname"
              value={editUser.lastname}
              onChange={(e) => {
                setEditUser({
                  ...editUser,
                  lastname: e.target.value,
                });
              }}
            />
            <label htmlFor="describe">
              Vous souhaitez en dire plus sur vous ?
            </label>
            <textarea
              className="user-describe"
              name="message"
              id="describe"
              style={{ backgroundColor: "rgba(81, 85, 133, .2)" }}
              onChange={(e) => {
                e.preventDefault();
                setEditUser({ ...editUser, description: e.target.value });
              }}
            />
            <button
              className="btn-editaccount generic-btn"
              type="submit"
              onClick={() => updateAccount()}
            >
              Mettre à jour
            </button>
          </form>
        ) : (
          <form className="user-profile-edit-form-secu">
            <label htmlFor="email">Courriel :</label>
            <input
              className="input-edit-profile"
              type="email"
              id="email"
              value={editUser.email}
              placeholder="Votre adresse mail"
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  email: e.target.value,
                })
              }
            />
            <label htmlFor="password">Mot de passe :</label>
            <input
              className="input-edit-profile"
              type="password"
              id="password"
              value={editUser.password}
              placeholder="Votre mot de passe"
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  password: e.target.value,
                })
              }
            />
            <label htmlFor="password-confim">
              Confirmation du mot de passe :
            </label>
            <input
              className="input-edit-profile"
              type={typeInputPassword}
              id="password-confirm"
              value={confirmPassword}
              onChange={(e) => {
                e.preventDefault();
                setConfirmPassword(e.target.value);
              }}
            />
            <button
              className="btn-editaccount generic-btn"
              type="submit"
              onClick={() => updateAccount()}
            >
              Mettre à jour
            </button>
          </form>
        )}{" "}
      </div>
    </div>
  );
}
