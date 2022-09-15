import AdminNav from "@components/AdminNavbar";
import DashboardAdmin from "@components/DashboardAdmin";
import UsersAdminTable from "@components/UsersAdminTable";
import LobbiesAdminTable from "@components/LobbiesAdminTable";
import GamesAdminTable from "@components/GamesAdminTable";

export default function Admin() {
  return (
    <div>
      <AdminNav />
      <div className="admin-workflow">
        <DashboardAdmin />
        <UsersAdminTable />
        <LobbiesAdminTable />
        <GamesAdminTable />
      </div>
    </div>
  );
}
