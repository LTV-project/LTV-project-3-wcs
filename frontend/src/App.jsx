import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "@pages/Contact";
import AccountCreation from "@pages/UserAccountCreation";
import SignIn from "@pages/SignIn";
import LobbiesCreation from "@pages/LobbiesCreation";
import UserHome from "@pages/UserHome";
import UserProfile from "@pages/UserProfile";
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
      </div>
    </Router>
  );
}

export default App;
