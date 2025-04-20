import { Link } from "react-router";
import "./TopBar.css";
import { FaHeart, FaShoppingBasket } from "react-icons/fa";

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
        <div className=" sm:flex gap-10">
            <div className=" grow sm:w-1/3">
              <Link to="/">
                <img src="https://placehold.co/500x100/png/?text=Freaky+Fasion" alt="Logo" className=" w-full p-5"/>   
              </Link>
            </div>
            <div className=" flex w-1/3 pt-5 my-5">
              <div className=" w-80 h-8 border-2 border-solid border-black rounded-full">
                <form action="/search">
                  <input type="text" name="search" id="search" placeholder="search"/>
                </form>
              </div>
              <div className=" flex sm:pl-[35%]">
                <FaHeart className=" px-2 text-4xl"/>
                <FaShoppingBasket className=" px-2 text-4xl"/>
              </div>
            </div>
            <div className=" sm:hidden">
              <ul>
                <li>Nyheter</li>
                <li>Topplistan</li>
                <li>Rea</li>
                <li>Kampanjer</li>
              </ul>
            </div>
        </div>
        <div className=" hidden sm:flex pb-2">
            <span className=" px-2 font-bold">Nyheter</span>
            <span className=" px-2 font-bold">Topplistan</span>
            <span className=" px-2 font-bold">Rea</span>
            <span className=" px-2 font-bold">Kampanjer</span>
        </div>
      </>
    )
  }

export default TopBar; 

