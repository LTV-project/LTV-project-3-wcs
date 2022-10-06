import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import BannerProfileEdit from "./BannerProfileEdit";

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
  const [confirmPassword, setConfirmPassword] = useState("");

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

  function message() {
    const msg = "Attention vous êtes sur le point de supprimer votre compte";
    alert(msg);
  }

  function deleteAccount() {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/users/${params.id}`);
  }
  // eslint-disable-next-line no-unused-vars
  function handleDelete() {
    message();
    deleteAccount();
    navigate("/");
  }
  const [typeInputPassword] = useState("password");

  const [dataInput, setDataInput] = useState(true);

  return (
    <div className="editAccount">
      <Navbar />
      <BannerProfileEdit />
      <div className="input-editcontain">
        <h2>Profil de {editUser.pseudo}</h2>
        <img src={editUser.image} alt={editUser.pseudo} />
        <input
          className="profile"
          type="file"
          alt="Avatar"
          accept="image/*"
          onChange={(e) => uploadImage(e)}
        />
      </div>
      <div className="proficontain">
        <div className="profil-button-container">
          <button
            className="btn-editaccount"
            type="button"
            onClick={() => setDataInput(true)}
          >
            Mon Profil
          </button>
          <button
            className="btn-editaccount"
            type="button"
            onClick={() => setDataInput(false)}
          >
            Sécurité
          </button>
        </div>
        <form className="form-editcontain">
          {dataInput ? (
            <div className="info1">
              <p>Pseudonyme</p>
              <input
                className="input-editcontainA"
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
                className="input-editcontainA"
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
              <p>Vous souhaitez nous en dire plus sur vous ?</p>
              <textarea
                className="message-edit"
                name="message"
                style={{ backgroundColor: "rgba(81, 85, 133, .2)" }}
                onChange={(e) => {
                  e.preventDefault();
                  setEditUser({ ...editUser, description: e.target.value });
                }}
              />
              <br />
              <button
                className="btn-editaccount"
                type="submit"
                onClick={() => updateAccount()}
              >
                <span>Mettre à jour</span>
              </button>
            </div>
          ) : (
            <div className="info2">
              <p>Mot de passe</p>
              <input
                className="input-editcontainB1"
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
              <p>Confirmation du mot de passe</p>
              <input
                className="input-editcontainB"
                type={typeInputPassword}
                value={confirmPassword}
                onChange={(e) => {
                  e.preventDefault();
                  setConfirmPassword(e.target.value);
                }}
              />
              <p>Âge</p>
              <input
                className="input-editcontainC"
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
                className="input-editcontainA"
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
              <p>Nom</p>
              <input
                className="input-editcontainA"
                type="text"
                value={editUser.lastname}
                onChange={(e) => {
                  setEditUser({
                    ...editUser,
                    lastname: e.target.value,
                  });
                }}
              />

              <div className="btn-edit-account">
                {/* <button
                  className="btn-editaccount"
                  type="button"
                  onClick={() => handleDelete()}
                >
                  <span>Je supprime mon compte</span>
                </button> */}
                <button
                  className="btn-editaccount"
                  type="submit"
                  onClick={() => updateAccount()}
                >
                  <span>Mettre à jour</span>
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
