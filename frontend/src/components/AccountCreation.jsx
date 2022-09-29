import { useState } from "react";
import DescribeMe from "@components/DescribeMe";

export default function AccountCreation() {
  const [accountCreation, setAccountCreation] = useState({
    pseudo: "",
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    password: "",
  });

  // const postAccountCreation = () => {
  //   axios
  //     .post(`${import.meta.env.VITE_BACKEND_URL}/users`, { ...accountCreation })
  //     .then((response) => {
  //       console.error(response);
  //       console.error(response.data);
  //     });
  // };
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
            />

            <p>Courriel*</p>
            <input
              className="input-containerB"
              type="text"
              value={accountCreation.email}
              onChange={(e) => {
                e.preventDefault();
                setAccountCreation({
                  ...accountCreation,
                  email: e.target.value,
                });
              }}
            />

            <p>Mot de passe*</p>

            <input
              className="input-containerC"
              type="text"
              value={accountCreation.password}
              onChange={(e) => {
                e.preventDefault();
                setAccountCreation({
                  ...accountCreation,
                  password: e.target.value,
                });
              }}
            />

            <p>Confirmation du mot de passe*</p>

            <input
              className="input-containerD"
              type="text"
              value={accountCreation.confirmPassword}
              onChange={(e) => {
                e.preventDefault();
                setAccountCreation({
                  ...accountCreation,
                  confirmPassword: e.target.value,
                });
              }}
            />
          </div>
          <span className="empty-space" />

          <div className="input-contain2">
            <img
              className="img-kitten"
              src="https://placekitten.com/g/50/50"
              alt="avatar"
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
      <DescribeMe accountCreation={accountCreation} />
    </div>
  );
}
