import axios from "axios";
import { useState } from "react";
import senior from "@assets/images/senior.webp";

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
    <div className="contain-form">
      <div
        className="contain-form1"
        style={{ backgroundImage: `url(${senior})`, backgroundSize: "cover" }}
      >
        <h2 className="h2form">Vous souhaitez nous contacter ?</h2>
        <p className="pform">Remplissez le formulaire ci-contre</p>
      </div>
      <div className="contain-form2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postContact();
          }}
        >
          <input
            className="inputform1"
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
            className="inputform2"
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
            className="inputform3"
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
            className="inputform4"
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
            className="inputform5"
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
    </div>
  );
}
