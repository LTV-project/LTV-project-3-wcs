import { useState } from "react";
import axios from "axios";

export default function UserAddTableAdmin() {
  const [addUser, setAddUser] = useState({
    pseudo: "",
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    password: "",
  });
  const postUser = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/`, {
      ...addUser,
    });
  };

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Ajouter un utilisateur</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="text"
              value={addUser.pseudo}
              placeholder="Pseudo"
              onChange={(e) =>
                setAddUser({ ...addUser, pseudo: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={addUser.lastname}
              placeholder="Nom"
              onChange={(e) =>
                setAddUser({ ...addUser, lastname: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={addUser.firstname}
              placeholder="Prénom"
              onChange={(e) =>
                setAddUser({ ...addUser, firstname: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="email"
              value={addUser.email}
              placeholder="Courriel"
              onChange={(e) =>
                setAddUser({ ...addUser, email: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="password"
              value={addUser.password}
              placeholder="Mot de passe"
              onChange={(e) =>
                setAddUser({ ...addUser, password: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="number"
              value={addUser.age}
              placeholder="Âge"
              onChange={(e) => setAddUser({ ...addUser, age: e.target.value })}
            />
          </td>
          <td>
            <button type="button" onClick={postUser}>
              Ajouter
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
