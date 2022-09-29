import axios from "axios";
import { useState } from "react";

export default function AccountCreation() {
  const [accountCreation, setAccountCreation] = useState({
    pseudo: "",
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    password: "",
    comments: "",
  });

  const postAccountCreation = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users`, { ...accountCreation })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  return (
    <div>
      <h2>Je crée mon compte</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postAccountCreation();
        }}
      >
        <input
          type="text"
          value={accountCreation.pseudo}
          placeholder="Votre pseudo"
          onChange={(e) =>
            setAccountCreation({
              ...accountCreation,
              pseudo: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={accountCreation.firstname}
          placeholder="Prénom"
          onChange={(e) =>
            setAccountCreation({
              ...accountCreation,
              firstname: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={accountCreation.lastname}
          placeholder="Nom"
          onChange={(e) =>
            setAccountCreation({
              ...accountCreation,
              lastname: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={accountCreation.email}
          placeholder="Votre adresse mail"
          onChange={(e) =>
            setAccountCreation({
              ...accountCreation,
              email: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={accountCreation.password}
          placeholder="Votre mot de passe"
          onChange={(e) =>
            setAccountCreation({
              ...accountCreation,
              password: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={accountCreation.age}
          placeholder="Votre âge"
          onChange={(e) =>
            setAccountCreation({
              ...accountCreation,
              age: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={accountCreation.comments}
          placeholder="Dites en plus sur vous"
          onChange={(e) =>
            setAccountCreation({
              ...accountCreation,
              comments: e.target.value,
            })
          }
        />
        <input type="submit" value="Créer mon compte" />
      </form>
    </div>
  );
}
