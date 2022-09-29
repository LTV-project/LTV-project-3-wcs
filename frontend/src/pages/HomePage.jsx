import Navbar from "@components/Navbar";
import UserDashboard from "@components/UserDashboard";
import UsersComments from "@components/UsersComments";

function HomePage() {
  return (
    <div>
      <Navbar />
      <UserDashboard />
      <UsersComments />
    </div>
  );
}

export default HomePage;
