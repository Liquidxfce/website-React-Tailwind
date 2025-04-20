import { Outlet } from "react-router";
import BottomInfo from "../components/BottomInfo/BottomInfo";
import TopBar from "../components/topBar/topBar";

const DefaultLayout = () => {
    return (
      <>
        <header>
          <TopBar />
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