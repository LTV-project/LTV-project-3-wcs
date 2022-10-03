import { useEffect, useState } from "react";
import axios from "axios";

function UsersComments() {
  const [userComment, setUserComment] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((response) => response.data)
      .then((data) => setUserComment(data));
  }, []);

  return (
    <div className="users-comments-flex-container">
      {userComment &&
        userComment.map((comment) => (
          <div className="user-comment" key={comment.id}>
            <img src={comment.image} alt="" />
            <p>{comment.pseudo}</p>
            <p>{comment.description ? comment.description : "Lorem ipsum"}</p>
          </div>
        ))}
    </div>
  );
}

export default UsersComments;
