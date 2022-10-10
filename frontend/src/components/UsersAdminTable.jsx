import { useState, useEffect } from "react";
import axios from "axios";
import UserEditTableAdmin from "./UserEditTableAdmin";
import UserAddTableAdmin from "./UserAddTableAdmin";

export default function UsersAdminTable() {
  const [users, setUsers] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((response) => response.data)
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="tables-wrapper">
      <UserAddTableAdmin />
      <table className="admin-table admin-table-edit">
        <thead>
          <tr>
            <th>Pseudo</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Courriel</th>
            <th>Password</th>
            <th>Âge</th>
            <th>isAdmin</th>
          </tr>
        </thead>
        {users &&
          users.map((user) => <UserEditTableAdmin user={user} key={user.id} />)}
      </table>
    </div>
  );
}
