import { useState } from "react";
// import axios from "axios";

export default function GameEditTableAdmin({ game }) {
  const [editValue, setEditValue] = useState({
    name: "",
    category: "",
  });

  return (
    <tbody>
      <tr>
        <td>
          <input
            type="text"
            value={game.name}
            onChange={(e) =>
              setEditValue({ ...editValue, name: e.target.value })
            }
          />
        </td>
        <td>
          <input
            type="text"
            value={game.category}
            onChange={(e) =>
              setEditValue({ ...editValue, category: e.target.value })
            }
          />
        </td>
        <td>
          <button type="button">Supprimer</button>
        </td>
        <td>
          <button type="button">Éditer</button>
        </td>
      </tr>
    </tbody>
  );
}
