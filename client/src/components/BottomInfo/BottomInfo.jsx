import "./BottomInfo.css";

function BottomInfo() {
  
    return (
      <>
        <div className=" bg-gray-300 border border-solid border-black pt-50">
          <div className=" hidden sm:flex space-x-4">
            <div>
              <div>
                <ul>
                  <li className=" font-bold">shopping</li>
                  <li>Vinterjackor</li>
                  <li>Pufferjackor</li>
                  <li>Kappa</li>
                  <li>Trenchcoats</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className=" font-bold">mina sidor</li>
                  <li>Mina Ordrar</li>
                  <li>Mitt konto</li>
                </ul>
              </div>
              <div>
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
      </>
    )
  }

export default BottomInfo; 