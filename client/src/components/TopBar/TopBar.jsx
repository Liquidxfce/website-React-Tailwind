import { Link } from "react-router";
import "./TopBar.css";

function TopBar() {
  
    return (
      <>
        <div>
            <div>
              <Link to="/">
                <img src="https://placehold.co/500x100/png/?text=Freaky+Fasion" alt="Logo" />   
              </Link>
            </div>
            <div>
              <form action="">
                <input type="text" name="search" id="search" placeholder="search"/>
              </form>
              <div>
                {/* Lägg till hjärta och varukorje */}
              </div>
            </div>
            <div>
              <ul>
                <li>Nyheter</li>
                <li>Topplistan</li>
                <li>Rea</li>
                <li>Kampanjer</li>
              </ul>
            </div>
            <div className="hidden">
              <span>Nyheter</span>
              <span>Topplistan</span>
              <span>Rea</span>
              <span>Kampanjer</span>
            </div>
        </div>
      </>
    )
  }

export default TopBar; 