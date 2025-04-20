import "./BottomInfo.css";
import Accordion from "../Accordion/Accordion";
import { FaShieldAlt, FaRegSmile, FaPlane, FaGlobeAmericas } from "react-icons/fa";

function BottomInfo() {
  
    return (
      <>
        <div className=" pb-5 pt-10 sm:grid grid-cols-2 lg:grid-cols-4 text-center">
          <div className=" relative py-2">
            <FaGlobeAmericas className=" text-3xl absolute bottom-1"/>
            <span className=" font-bold pl-10">Gratis frakt och retur</span>
          </div>
          <div className=" relative py-2">
            <FaPlane className=" text-3xl absolute bottom-1"/>
            <span className=" font-bold pl-10">Expressfrakt</span>
          </div>
          <div className=" relative py-2">
            <FaShieldAlt className=" text-3xl absolute bottom-1"/>
            <span className=" font-bold pl-10">Säkra betalningar</span>
          </div>
          <div className=" relative py-2">
            <FaRegSmile className=" text-3xl absolute bottom-1"/>
            <span className=" font-bold pl-10">Nyheter varje dag</span>
          </div>
        </div>
        <div className=" bg-gray-300 border border-solid border-black">
          <div className="">
            <div className=" hidden sm:flex space-x-4">
              <div className="">
                <ul>
                  <li className=" font-bold">shopping</li>
                  <li>Vinterjackor</li>
                  <li>Pufferjackor</li>
                  <li>Kappa</li>
                  <li>Trenchcoats</li>
                </ul>
              </div>
              <div className="">
                <ul>
                  <li className=" font-bold">mina sidor</li>
                  <li>Mina Ordrar</li>
                  <li>Mitt konto</li>
                </ul>
              </div>
              <div className="">
                <ul>
                  <li className=" font-bold">kundtjänst</li>
                  <li>Returnpolicy</li>
                  <li>Integritetspolicy</li>
                </ul>
              </div>
            </div>
          </div>
          <small className=" hidden sm:block font-bold text-center">&copy; Freaky Fashion</small>
        </div>
        <div>
          <div className=" sm:hidden">
            <Accordion title="shopping">
              <ul>
                <li>Vinterjackor</li>
                <li>Pufferjackor</li>
                <li>Kappa</li>
                <li>Trenchcoats</li>
              </ul>
            </Accordion>
            <Accordion title="mina sidor">
              <ul>
                <li>Mina Ordrar</li>
                <li>Mitt konto</li>
              </ul>
            </Accordion>
            <Accordion title="kundtjänst">
              <ul>
                <li>Returnpolicy</li>
                <li>Integritetspolicy</li>
              </ul>
            </Accordion>
            <div>
              <small className=" sm:block font-bold text-center">&copy; Freaky Fashion</small>
            </div>
          </div>
        </div>
      </>
    )
  }

export default BottomInfo; 