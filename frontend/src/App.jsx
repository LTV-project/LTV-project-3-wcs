import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "@pages/Contact";
import AccountCreation from "@pages/AccountCreation";
import SignIn from "@pages/SignIn";
import LobbiesGameCreation from "@pages/LobbiesGameCreation";
import LobbiesTalkCreation from "@pages/LobbiesTalkCreation";
import UserHome from "@pages/UserHome";
import UserProfile from "@pages/UserProfile";
import EditAccount from "@components/EditAccount";
import VisitorHome from "@pages/VisitorHome";
import JoinLobbies from "@pages/JoinLobbies";
import AdminPage from "@pages/AdminPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<VisitorHome />} />
          <Route path="/userHome" element={<UserHome />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/joinLobbies" element={<JoinLobbies />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/userProfile/:id" element={<EditAccount />} />
          <Route path="/accountCreation" element={<AccountCreation />} />
          <Route
            path="/lobbiesGameCreation"
            element={<LobbiesGameCreation />}
          />
          <Route
            path="/lobbiesTalkCreation"
            element={<LobbiesTalkCreation />}
          />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
