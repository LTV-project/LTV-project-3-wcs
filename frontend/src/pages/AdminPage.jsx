import AdminNav from "@components/AdminNavbar";
import DashboardAdmin from "@components/DashboardAdmin";

export default function Admin() {
  return (
    <div>
      <AdminNav />
      <div className="admin-workflow">
        <DashboardAdmin />
      </div>
    </div>
  );
}
