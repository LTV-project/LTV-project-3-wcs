import BannerProfile from "@components/BannerProfile";
import Navbar from "@components/Navbar";
import ValidatedMessage from "@components/ValidatedMessage";

function ValidatedMessageConfirmation() {
  return (
    <div>
      <Navbar />
      <BannerProfile />
      <ValidatedMessage />
    </div>
  );
}

export default ValidatedMessageConfirmation;
