import { useEffect, useState } from "react";
import axios from "axios";

function UsersComments() {
  // Un state et un useEffect pour récupérer les données des utilisateurs

  const [userComment, setUserComment] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((response) => response.data)
      .then((data) => setUserComment(data));
  }, []);

  return (
    // Map pour afficher automatiquement tous les utilisateurs, sauf les admins exclus avec le filter.

    <div className="users-comments-flex-container">
      {userComment &&
        userComment
          .filter(
            (comment) => comment.isAdmin !== 1 && comment.description !== null
          )
          .map((comment) => (
            <div className="user-comment" key={comment.id}>
              <img src={comment.image} alt="avatar" />
              <p>{comment.pseudo}</p>
              <p>{comment.description ? comment.description : "Lorem ipsum"}</p>
            </div>
          ))}
    </div>
  );
}

export default UsersComments;
