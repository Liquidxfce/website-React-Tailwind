import { Outlet } from "react-router";
import BottomInfo from "../components/bottomInfo/bottomInfo";


const DefaultLayout = () => {
    return (
      <>
        <header>
          
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