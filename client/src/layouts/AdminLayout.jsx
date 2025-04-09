import { Outlet } from "react-router";

// TODO: Add sidebar and topbar

const AdminLayout = () => {
    return (
      <>
        <header>
          <h1>Administration</h1>
        </header>
        <main>
          <Outlet />
        </main>
      </>
    );
  };
  
  export default AdminLayout;