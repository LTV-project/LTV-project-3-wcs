import axios from "axios";
import { useState } from "react";

export default function DescribeMe() {
  const [description, setDescription] = useState({
    comments: "",
  });

  const postDescription = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users`, { ...description })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };
  return (
    <div className="users-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postDescription();
        }}
      >
        <p>Vous souhaitez nous en dire plus sur vous ?</p>
        <textarea
          name="message"
          value={description}
          onChange={(e) => {
            e.preventDefault();
            setDescription(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
