import axios from "axios";
import { useState } from "react";

export default function ContactForm() {
  const [contact, setContact] = useState({
    pseudo: "",
    firstname: "",
    lastname: "",
    content: "",
    email: "",
  });

  const postContact = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/contacts`, { ...contact })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  return (
    <div>
      <h2>Nous contacter</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postContact();
        }}
      >
        <input
          type="text"
          value={contact.lastname}
          placeholder="Votre Nom"
          onChange={(e) =>
            setContact({
              ...contact,
              lastname: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={contact.firstname}
          placeholder="Prénom"
          onChange={(e) =>
            setContact({
              ...contact,
              firstname: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={contact.pseudo}
          placeholder="Pseudo"
          onChange={(e) =>
            setContact({
              ...contact,
              pseudo: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={contact.email}
          placeholder="Votre adresse mail"
          onChange={(e) =>
            setContact({
              ...contact,
              email: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={contact.content}
          placeholder="Votre message"
          onChange={(e) =>
            setContact({
              ...contact,
              content: e.target.value,
            })
          }
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}
