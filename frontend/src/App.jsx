/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "@components/Footer";
import Contact from "@pages/Contact";
import AccountCreation from "@pages/UserAccountCreation";
import Sign from "@pages/Sign";
import HomePage from "@pages/HomePage";
import LobbyByUserDetails from "@components/LobbyByUserDetails";
import LobbyGameCreation from "@pages/LobbyGameCreation";
import LobbyTalkCreation from "@pages/LobbyTalkCreation";
import EditUserProfile from "@pages/EditUserProfile";
import UserProfilePage from "@pages/UserProfilePage";
import FullCard from "@components/FullCard";
import JoinLobbies from "@pages/JoinLobbies";
import AdminPage from "@pages/AdminPage";
import ValidatedMessage from "@components/ValidatedMessage";
import ValidateMessageAccountCreation from "@components/ValidateMessageAccountCreation";
import AdminRoute from "@components/AdminRoute";

import { useState } from "react";
import UnauthorizedPage from "@pages/UnauthorizedPage";
import AuthApi from "@services/AuthApi";
import AuthContext from "./contexts/AuthContext";
import CurrentUserContext from "./contexts/CurrentUserContext";

import "./fonts/Avenir-Book.ttf";
import "./fonts/Avenir-Medium.ttf";
import "./fonts/Avenir-Black.ttf";
import "./App.css";

AuthApi.setup();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthApi.isAuthenticated
  );

  const [currentUser, setCurrentUser] = useState(AuthApi.isCurrentUser);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Router>
          <div className="app-wrap">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join-lobbies" element={<JoinLobbies />} />
              <Route path="/lobbies/:id" element={<FullCard />} />
              <Route path="/sign" element={<Sign />} />
              <Route path="/user-profile/:id" element={<UserProfilePage />} />
              <Route
                path="/user-profile/:id/edit"
                element={<EditUserProfile />}
              />
              <Route
                path="/users/:id/lobbies"
                element={<LobbyByUserDetails />}
              />
              <Route path="/account-creation" element={<AccountCreation />} />
              <Route
                path="/validate-message-account-creation"
                element={<ValidateMessageAccountCreation />}
              />
              <Route path="/unauthorized" element={<UnauthorizedPage />} />
              <Route
                path="/create-lobby-game"
                element={<LobbyGameCreation />}
              />
              <Route
                path="/create-lobby-talk"
                element={<LobbyTalkCreation />}
              />
              <Route path="/validated-message" element={<ValidatedMessage />} />
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <AdminPage />
                  </AdminRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CurrentUserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
