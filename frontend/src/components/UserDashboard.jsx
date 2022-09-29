// eslint-disable-next-line import/no-relative-packages
import { Link } from "react-router-dom";
import backgroundDashGame from "@assets/images/game_illu.jpg";
import backgroundDashJoin from "@assets/images/join_illu.jpg";
import backgroundDashTalk from "@assets/images/talk_illu.jpg";
import userProfileIcon from "@assets/images/user-profile-icon.png";

function UserDashboard() {
  return (
    <div>
      <div className="user-dashboard-container">
        {/* <Link to="/create-lobby-game"> */}
        <div
          className="dash dash1"
          style={{
            backgroundImage: `url(${backgroundDashGame})`,
            backgroundSize: "cover",
            opacity: "0.8",
          }}
        >
          <h2>Jouer</h2>
        </div>
        {/* </Link> */}
        <Link to="/create-lobby-talk">
          <div
            className="dash dash2"
            style={{
              backgroundImage: `url(${backgroundDashTalk})`,
              backgroundSize: "cover",
              opacity: "0.8",
            }}
          >
            <h2>Échanger</h2>
          </div>
        </Link>
        <Link to="/join-lobbies">
          <div
            className="dash dash3"
            style={{
              backgroundImage: `url(${backgroundDashJoin})`,
              backgroundSize: "cover",
              opacity: "0.8",
            }}
          >
            <h2>Rejoindre</h2>
          </div>
        </Link>
        <div className="dash dash4">
          <img src={userProfileIcon} alt="" />
          <h2>Mon compte</h2>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
