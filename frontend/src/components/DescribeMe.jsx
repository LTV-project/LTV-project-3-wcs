import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DescribeMe({ accountCreation }) {
  const [description, setDescription] = useState({
    description: "",
  });

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
  const postUserDescription = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/comments`, { description })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      })
      .catch((error) => console.error(error));
  };
  function handleSubmitButton() {
    postUser();
    postUserDescription();
    navigate("/validatedMessageAccount");
  }
  return (
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
            setDescription(e.target.value);
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
  );
}
