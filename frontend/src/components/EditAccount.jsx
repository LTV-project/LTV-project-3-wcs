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
    comments: "",
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

  return (
    <div>
      <h2>Je modifie mon compte</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateAccount();
        }}
      >
        <div className="">
          <input
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
          <input
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
          <input
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
          <input
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
          <input
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
          <input
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
        </div>
        <div className="">
          <img src={editUser.image} alt={editUser.pseudo} />
          <input
            className=""
            type="file"
            name="file"
            alt="Avatar"
            accept="image/*"
            onChange={(e) => uploadImage(e)}
          />
        </div>
        <div className="">
          <input
            type="text"
            value={editUser.comments}
            placeholder="Dites en plus sur vous"
            onChange={(e) =>
              setEditUser({
                ...editUser,
                comments: e.target.value,
              })
            }
          />
          <button type="submit" value="submit">
            <span>Mettre à jour</span>
          </button>

          <button type="button" onClick={() => deleteAccount()}>
            Je supprime mon compte
          </button>
        </div>
      </form>
    </div>
  );
}
