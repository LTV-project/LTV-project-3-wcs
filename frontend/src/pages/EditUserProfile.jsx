import BannerProfileEdit from "@components/BannerProfileEdit";
import EditAccount from "@components/EditAccount";
import Navbar from "@components/Navbar";

function EditUserProfile() {
  return (
    <div>
      <Navbar />
      <BannerProfileEdit />
      <EditAccount />
    </div>
  );
}

export default EditUserProfile;
