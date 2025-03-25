import { Link } from "react-router";

function TopBar() {
  
    return (
      <>
        <div>
            <h1>hello world</h1>
            <div>
              <Link to={"/"}>
                <img src="https://placehold.co/500x100/png/?text=Freaky+Fasion" alt="Logo" />   
              </Link>
            </div>
            <div>
              <form action="">
                <input type="text" name="search" id="search" placeholder="search"/>
              </form>
              <div>
                <i class="bi bi-basket"></i>
                <i class="bi bi-heart-fill"></i>
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