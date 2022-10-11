import Banner from "@components/Banner";
import Navbar from "@components/Navbar";
import UserDashboard from "@components/UserDashboard";
import UsersComments from "@components/UsersComments";
import Video from "@components/Video";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function HomePage() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      {
        // préparation d'un contexte d'affichage si utilisateur connecté
      }
      {isAuthenticated && (
        <div>
          <Banner />
          <UserDashboard />
        </div>
      )}
      <Video />
      <UsersComments />
    </div>
  );
}

export default HomePage;
