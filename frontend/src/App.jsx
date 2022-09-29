/* eslint-disable import/no-unresolved */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "@pages/Contact";
import AccountCreation from "@pages/AccountCreation";
import SignIn from "@pages/SignIn";
import LobbiesCreation from "@pages/LobbiesCreation";
import UserHome from "@pages/UserHome";
import UserProfile from "@pages/UserProfile";
import EditAccount from "@components/EditAccount";
import JoinLobbies from "@pages/JoinLobbies";
import AdminPage from "@pages/AdminPage";
import AuthApi from "@services/AuthApi";
import { useState } from "react";
import AuthContext from "./contexts/AuthContext";

import "./fonts/Avenir-Book.ttf";
import "./fonts/Avenir-Medium.ttf";
import "./fonts/Avenir-Black.ttf";
import "./App.css";

AuthApi.setup();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthApi.isAuthenticated
  );

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <Routes>
          <Route path="/userHome" element={<UserHome />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/joinLobbies" element={<JoinLobbies />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/userProfile/:id" element={<EditAccount />} />
          <Route path="/accountCreation" element={<AccountCreation />} />
          <Route path="/lobbiesCreation" element={<LobbiesCreation />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
