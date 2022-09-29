// eslint-disable-next-line import/no-relative-packages
import { Link } from "react-router-dom";
import backgroundDash from "@assets/images/old_cartes.jpg";

function UserDashboard() {
  return (
    <div>
      <div className="user-dashboard-container">
        <Link to="/create-lobby-game">
          <div
            className="dash dash1"
            style={{ backgroundImage: `url(${backgroundDash})` }}
          >
            <h2>Lorem.</h2>
          </div>
        </Link>
        <Link to="/create-lobby-talk">
          <div
            className="dash dash2"
            style={{ backgroundImage: `url(${backgroundDash})` }}
          >
            <h2>Non?</h2>
          </div>
        </Link>
        <Link to="/join-lobbies">
          <div
            className="dash dash3"
            style={{ backgroundImage: `url(${backgroundDash})` }}
          >
            <h2>Omnis.</h2>
          </div>
        </Link>
        <div className="dash dash4">
          <h2>Maiores?</h2>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
