/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-comment-textnodes */
import CTA from "@assets/video/CTA-projet3.mp4";
import { useNavigate } from "react-router-dom";

function Video() {
  const navigate = useNavigate();

  return (
    <div className="CTA-container">
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video src={CTA} width="540" height="300" controls autoPlay loop />
      <button
        type="button"
        className="CTA-btn generic-btn"
        onClick={() => navigate("/account-creation")}
      >
        Rejoignez nous vite !
      </button>
    </div>
  );
}

export default Video;
