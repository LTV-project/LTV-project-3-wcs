import { useState, useEffect } from "react";
import axios from "axios";

export default function UsersAdminTable() {
  const [users, setUsers] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((response) => response.data)
      .then((data) => setUsers(data));
  }, []);

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Pseudo</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Courriel</th>
          <th>Âge</th>
        </tr>
      </thead>
      {users &&
        users.map((user) => (
          <tbody>
            <tr>
              <td>{user.pseudo}</td>
              <td>{user.lastname}</td>
              <td>{user.firstname}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          </tbody>
        ))}
    </table>
  );
}
