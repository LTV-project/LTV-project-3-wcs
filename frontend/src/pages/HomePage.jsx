import Banner from "@components/Banner";
import Navbar from "@components/Navbar";
import UserDashboard from "@components/UserDashboard";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <UserDashboard />
    </div>
  );
}

export default HomePage;
