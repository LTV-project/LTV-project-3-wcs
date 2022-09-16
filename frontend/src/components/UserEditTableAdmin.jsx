import { useState } from "react";
import axios from "axios";

export default function UserEditTableAdmin({ user }) {
  const [editUser, setEditUser] = useState(user);
  const { id } = user;
  const updateUser = () => {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, {
      ...editUser,
    });
  };
  const deleteUser = () => {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, {
      ...editUser,
    });
  };

  return (
    <tbody>
      <tr>
        <td>
          <input
            type="text"
            value={editUser.pseudo}
            onChange={(e) =>
              setEditUser({ ...editUser, pseudo: e.target.value })
            }
          />
        </td>
        <td>
          <input
            type="text"
            value={editUser.lastname}
            onChange={(e) =>
              setEditUser({ ...editUser, lastname: e.target.value })
            }
          />
        </td>
        <td>
          <input
            type="text"
            value={editUser.firstname}
            onChange={(e) =>
              setEditUser({ ...editUser, firstname: e.target.value })
            }
          />
        </td>
        <td>
          <input
            type="email"
            value={editUser.email}
            onChange={(e) =>
              setEditUser({ ...editUser, email: e.target.value })
            }
          />
        </td>
        <td>
          <input
            type="password"
            value={editUser.password}
            onChange={(e) =>
              setEditUser({ ...editUser, password: e.target.value })
            }
          />
        </td>
        <td>
          <input
            type="number"
            value={editUser.age}
            onChange={(e) => setEditUser({ ...editUser, age: e.target.value })}
          />
        </td>
        <td>
          <button type="button" onClick={updateUser}>
            Éditer
          </button>
        </td>
        <td>
          <button type="button" onClick={deleteUser}>
            Supprimer
          </button>
        </td>
      </tr>
    </tbody>
  );
}
