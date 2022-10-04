import { useState } from "react";
import eye from "@assets/images/eye.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AccountCreation() {
  const [accountCreation, setAccountCreation] = useState({
    pseudo: "",
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    password: "",
    image: "",
    description: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [typeInputPassword, setTypeInputPassword] = useState("password");

  const uploadImage = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "Projet3_Ltv");
    data.append("cloud_name", "bibilekid");
    fetch("  https://api.cloudinary.com/v1_1/bibilekid/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data1) => {
        setAccountCreation({ ...accountCreation, image: data1.url });
        //   a changer suivant la page setgetuser et getuser
      })
      .catch((err) => console.error(err));
  };

  function showHide() {
    if (typeInputPassword === "password") {
      setTypeInputPassword("text");
    } else {
      setTypeInputPassword("password");
    }
  }

  const navigate = useNavigate();

  const postUser = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users`, { ...accountCreation })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      })
      .catch((error) => console.error(error));
  };

  function handleSubmitButton() {
    postUser();
    navigate("/validatedMessageAccount");
  }

  return (
    <div>
      <form>
        <div className="contain-account">
          <div className="input-contain1">
            <p>Pseudonyme*</p>
            <input
              className="input-containerA"
              type="text"
              value={accountCreation.pseudo}
              onChange={(e) => {
                e.preventDefault();
                setAccountCreation({
                  ...accountCreation,
                  pseudo: e.target.value,
                });
              }}
              required
            />

            <p>Courriel*</p>
            <input
              className="input-containerB"
              type="email"
              value={accountCreation.email}
              onChange={(e) => {
                e.preventDefault();
                setAccountCreation({
                  ...accountCreation,
                  email: e.target.value,
                });
              }}
              required
            />

            <p>Mot de passe*</p>

            <input
              className="input-containerC"
              type={typeInputPassword}
              value={accountCreation.password}
              onChange={(e) => {
                e.preventDefault();
                setAccountCreation({
                  ...accountCreation,
                  password: e.target.value,
                });
              }}
              required
            />

            <p>Confirmation du mot de passe*</p>

            <input
              className="input-containerD"
              type={typeInputPassword}
              value={confirmPassword}
              onChange={(e) => {
                e.preventDefault();
                setConfirmPassword(e.target.value);
              }}
              required
            />
            <button
              className="btn-eye"
              type="button"
              onClick={() => showHide()}
              id="eye"
            >
              <img className="eye" src={eye} alt="eye" />
            </button>
          </div>
          <span className="empty-space" />

          <div className="input-contain2">
            <img
              className="img-profile"
              src={accountCreation.image}
              alt={accountCreation.pseudo}
            />
            <input
              className="profile"
              type="file"
              alt="avatar"
              accept="image/*"
              onChange={(e) => uploadImage(e)}
            />
            <p>Âge</p>

            <input
              className="input-containerE"
              type="text"
              value={accountCreation.age}
              onChange={(e) => {
                e.preventDefault();
                setAccountCreation({
                  ...accountCreation,
                  age: e.target.value,
                });
              }}
            />

            <p>Prénom</p>

            <input
              className="input-containerF"
              type="text"
              value={accountCreation.firstname}
              onChange={(e) => {
                e.preventDefault();
                setAccountCreation({
                  ...accountCreation,
                  firstname: e.target.value,
                });
              }}
            />

            <p>Nom</p>
            <input
              className="input-containerG"
              type="text"
              value={accountCreation.lastname}
              onChange={(e) => {
                e.preventDefault();
                setAccountCreation({
                  ...accountCreation,
                  lastname: e.target.value,
                });
              }}
            />
          </div>
        </div>
      </form>
      <div className="users-container">
        <form>
          <p className="p-describe">
            Vous souhaitez nous en dire plus sur vous ?
          </p>
          <textarea
            className="message-describe"
            name="message"
            style={{ backgroundColor: "rgba(81, 85, 133, .2)" }}
            onChange={(e) => {
              e.preventDefault();
              setAccountCreation({
                ...accountCreation,
                description: e.target.value,
              });
            }}
          />
        </form>
        <button
          className="generic-btn buttonSub"
          type="button"
          onClick={handleSubmitButton}
        >
          Soumettre
        </button>
      </div>
    </div>
  );
}
