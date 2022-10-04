import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import BannerProfileEdit from "./BannerProfileEdit";

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
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${params.id}`)
      .then((response) => response.data)
      .then((data) => setEditUser(data));
  }, []);

  function updateAccount() {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/users/${params.id}`, {
      ...editUser,
    });
  }

  function deleteAccount() {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/users/${params.id}`);
  }

  return (
    <>
      <Navbar />
      <BannerProfileEdit />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateAccount();
        }}
      >
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
        <input type="submit" value="Je modifie mon compte" />
      </form>
      <button type="button" onClick={() => deleteAccount()}>
        Je supprime mon compte
      </button>
    </>
  );
}
