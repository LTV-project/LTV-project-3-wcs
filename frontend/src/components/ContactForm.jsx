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
      .post(`${import.meta.env.VITE_BACKEND_URL}/contact`, { ...contact })
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
          value=""
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
          value=""
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
          value=""
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
          value=""
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
          value=""
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
