import { Link } from "react-router";
import "./TopBar.css";

function TopBar() {

  // TODO
  // 1 - Skapa sökresultatsida (t.ex. SearchResult) /search?q=t-shirt
  //   På sökresultatsidan behöver du plocka värdet av q (query-strängen)
  //   se följande sidan https://reactrouter.com/start/declarative/url-values (URL Search Params)
  //   Du behöver en API-endpointy på backend som låter dig hämta produkter , t.ex. 
  //   GET /api/products?name=t-shirt
  //    alternativt - hämta alla produkter från backend och filtrera sedan på namn
  //   GET /api/products  (detta ger dig en array)
  //    Använd filter() hos array för att filtrera ut de produkter som har ett namn som innehåller söktermen

  // 2 - Fixa formuläret i topBar - se https://reactrouter.com/start/declarative/navigating - där kan du se hur
  // du programmatiskt kan skcika anbvändaren till en specifik url, i detta fallet till  /search?q=t-shirt
  // där du behöver ange ett värde för q, som i detta fallet är satt till"t-shirt" som exampel

  
    return (
      <>
        <div>
            <div>
              <Link to="/">
                <img src="https://placehold.co/500x100/png/?text=Freaky+Fasion" alt="Logo" />   
              </Link>
            </div>
            <div>
              <form action="/search">
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

