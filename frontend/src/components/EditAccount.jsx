import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EditAccount() {
  const params = useParams();

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

  function updateAccount() {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/users/${params.id}`, {
      ...editUser,
    });
  }
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${params.id}`)
      .then((response) => response.data)
      .then((data) => setEditUser(data));
  }, []);

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

  const [typeInputPassword, setTypeInputPassword] = useState("password");

  function showHide() {
    if (typeInputPassword === "password") {
      setTypeInputPassword("text");
    } else {
      setTypeInputPassword("password");
    }
  }

  return (
    <div className="editAccount">
      <h2>Je modifie mon compte</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateAccount();
        }}
      >
        <div className="contain-account">
          <div className="input-contain1">
            <p>Pseudonyme</p>
            <input
              className="input-containerA"
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
            <p>Courriel</p>
            <input
              className="input-containerB"
              type="text"
              value={editUser.email}
              placeholder="Votre adresse mail"
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  email: e.target.value,
                })
              }
            />
            <p>Mot de passe</p>
            <input
              className="input-containerC"
              type="text"
              value={editUser.password}
              placeholder="Votre mot de passe"
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  password: e.target.value,
                })
              }
            />
            <button
              className="btn-eye"
              type="button"
              onClick={() => showHide()}
              id="eye"
            >
              {/* <img className="eye" src={eye} alt="eye" /> */}
            </button>
            <span />
            <p>Nom</p>
            <input
              className="input-containerD"
              type="text"
              value={editUser.lastname}
              placeholder="Nom"
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  lastname: e.target.value,
                })
              }
            />
          </div>
          <span className="empty-space" />
          <div className="input-contain3">
            <img src={editUser.image} alt={editUser.pseudo} />
            <input
              className="profile"
              type="file"
              alt="Avatar"
              accept="image/*"
              onChange={(e) => uploadImage(e)}
            />
            <div className="input-contain2">
              <p>Âge</p>
              <input
                className="input-containerE"
                type="text"
                value={editUser.age}
                placeholder="Votre âge"
                onChange={(e) =>
                  setEditUser({
                    ...editUser,
                    age: e.target.value,
                  })
                }
              />
              <p>Prénom</p>
              <input
                className="input-containerF"
                type="text"
                value={editUser.firstname}
                placeholder="Prénom"
                onChange={(e) =>
                  setEditUser({
                    ...editUser,
                    firstname: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <br />
        <button type="submit" value="submit">
          <span>Mettre à jour</span>
        </button>
      </form>
      <button type="button" onClick={() => deleteAccount()}>
        <span>Je supprime mon compte</span>
      </button>
    </div>
  );
}
