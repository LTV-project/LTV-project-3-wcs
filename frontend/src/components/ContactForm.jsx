import axios from "axios";
import { useState } from "react";
import senior from "@assets/images/senior.webp";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const [contact, setContact] = useState({
    pseudo: "",
    firstname: "",
    lastname: "",
    content: "",
    email: "",
  });

  const navigate = useNavigate();
  const postContact = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/contacts`, { ...contact })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  function handleSubmitButton() {
    postContact();
    navigate("/validatedMessageAccount");
  }

  return (
    <div className="contain-form">
      <div
        className="contain-form1"
        style={{ backgroundImage: `url(${senior})`, backgroundSize: "cover" }}
      >
        <h2 className="h2form">Vous souhaitez nous contacter ?</h2>
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
            placeholder="Nom"
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
          <p className="p-contact">Laissez nous votre message !</p>
          <textarea
            className="message-contact"
            name="message"
            style={{ backgroundColor: "rgba(81, 85, 133, .2)" }}
            onChange={(e) => {
              e.preventDefault();
              setContact({
                ...contact,
                description: e.target.value,
              });
            }}
          />
        </form>
        <button
          className="generic-btn buttonSub buttonContact"
          type="button"
          onClick={handleSubmitButton}
        >
          Soumettre
        </button>
      </div>
    </div>
  );
}
