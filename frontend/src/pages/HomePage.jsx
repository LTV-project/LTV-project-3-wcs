import Banner from "@components/Banner";
import NavbarHome from "@components/NavbarHome";
import UserDashboard from "@components/UserDashboard";
import UsersComments from "@components/UsersComments";
import Video from "@components/Video";
import Burger from "@components/Burger";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function HomePage() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <NavbarHome />
      {
        // préparation d'un contexte d'affichage si utilisateur connecté
      }
      {isAuthenticated && (
        <div>
          <Banner />
          <UserDashboard />
        </div>
      )}
      {!isAuthenticated && (
        <>
          <div className="burger">
            <Burger />
          </div>
          <Video />
        </>
      )}
      <UsersComments />
    </div>
  );
}

export default HomePage;
