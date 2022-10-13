/* eslint-disable import/no-unresolved */
import { useState } from "react";
import eye from "@assets/images/eye.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import BannerSignUp from "./BannerSignUp";

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
      .then((res) =>
        navigate("/validate-message-account-creation", {
          state: { id: res.data },
        })
      )
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar />
      <BannerSignUp />
      <div className="account-form-page">
        <form className="contain-form3">
          <div className="input-contain1">
            <p className="p-account">Pseudonyme*</p>
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

            <p className="p-account">Courriel*</p>
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

            <p className="p-account">Mot de passe*</p>

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

            <p className="p-account">Confirmation du mot de passe*</p>
            <div>
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

            {/* <div className="input-contain2"> */}
            <p className="p-account">Âge</p>

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

            <p className="p-account">Prénom</p>

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

            <p className="p-account">Nom</p>
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
            {/* </div> */}
          </div>
          <div className="img-profile-container">
            <img
              className="img-profile"
              src={accountCreation.image}
              alt={accountCreation.pseudo}
            />
            <label htmlFor="files">Ajoutez une photo</label>
            <input
              id="files"
              className="profile"
              type="file"
              alt="avatar"
              accept="image/*"
              onChange={(e) => uploadImage(e)}
            />
          </div>
        </form>

        <div className="contain-form4">
          <div className="users-container">
            <form>
              <p className="p-describe">
                Vous souhaitez nous en dire plus sur vous ?
              </p>
              <textarea
                className="message-describe"
                name="message"
                style={{ backgroundColor: "#151965" }}
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
              onClick={postUser}
            >
              Soumettre
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
/* function handleSubmitButton() {
  axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/travel_info`, {
      ...travelInfo,
      date: travelInfo.date,
    })
    .then((response) => {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/lobbies`, {
          ...lobby,
          travel_infos_id: response.data,
          game_id: id,
          user_id: id,
        })
        .then((res) =>
          navigate("/validated-message", {
            state: { id: res.data },
          })
        );
    })
    .catch((error) => console.error(error));
// } */
