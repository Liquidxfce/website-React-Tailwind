import { Outlet } from "react-router";
import AdminHeader from "../components/AdminHeader/AdminHeader";

// TODO: Add sidebar and topbar

const AdminLayout = () => {
    return (
      <>
        <header>
          <AdminHeader />
        </header>
        <main>
          <Outlet />
        </main>
      </>
    );
  };
  
  export default AdminLayout;