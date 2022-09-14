import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "@pages/Contact";
import AccountCreation from "@pages/AccountCreation";
import SignIn from "@pages/SignIn";
import LobbiesCreation from "@pages/LobbiesCreation";
import UserHome from "@pages/UserHome";
import UserProfile from "@pages/UserProfile";
import VisitorHome from "@pages/VisitorHome";
import JoinLobbies from "@pages/JoinLobbies";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<VisitorHome />} />
          <Route path="/userHome" element={<UserHome />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/joinLobbies" element={<JoinLobbies />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/accountCreation" element={<AccountCreation />} />
          <Route path="/lobbiesCreation" element={<LobbiesCreation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
