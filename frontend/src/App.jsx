import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "@pages/Contact";
import AccountCreation from "@pages/AccountCreation";
import SignIn from "@pages/SignIn";
import HomePage from "@pages/HomePage";
import UserProfile from "@pages/UserProfile";
import LobbyGameCreation from "@pages/LobbyGameCreation";
import LobbyTalkCreation from "@pages/LobbyTalkCreation";
import EditAccount from "@components/EditAccount";
import JoinLobbies from "@pages/JoinLobbies";
import AdminPage from "@pages/AdminPage";

import "./fonts/Avenir-Book.ttf";
import "./fonts/Avenir-Medium.ttf";
import "./fonts/Avenir-Black.ttf";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join-lobbies" element={<JoinLobbies />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user-profile/:id" element={<UserProfile />} />
          <Route path="/user-profile/:id/edit" element={<EditAccount />} />
          <Route path="/account-creation" element={<AccountCreation />} />
          <Route path="/create-lobby-game" element={<LobbyGameCreation />} />
          <Route path="/create-lobby-talk" element={<LobbyTalkCreation />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
