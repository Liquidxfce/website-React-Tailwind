import { Link, Outlet } from "react-router";
import BottomInfo from "../components/bottomInfo/bottomInfo";

const DefaultLayout = () => {
    return (
      <>
        <header>
            <Link to="/">
            
            </Link>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <BottomInfo />
        </footer>
      </>
    );
  };
  
  export default DefaultLayout;