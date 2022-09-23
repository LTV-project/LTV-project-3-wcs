import { useState } from "react";
import axios from "axios";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${import.meta.env.VITE_BACKEND_URL}/login`,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.data.error) {
          emailError.innerHtml = res.data.errors.email;
          passwordError.innerHtml = res.data.errors.password;
        } else {
          // eslint-disable-next-line no-restricted-syntax
          console.log(res.data.token);
          // window.location = "/";
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log(err);
      });
  };
  return (
    <div>
      <form action="" onSubmit={handleLogin} id="sign-up-form">
        <label htmlFor="email">Courriel</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="email error" />
        <br />
        <label htmlFor="password">Mot de passe</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="password error" />
        <br />
        <input type="submit" value="Je me connecte" />
      </form>
    </div>
  );
}

export default SignInForm;
