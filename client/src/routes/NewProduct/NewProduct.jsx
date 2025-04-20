import { useRef } from "react";
import "./NewProduct.css";

const NewProduct = () => {

  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
  
    fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      if (resp.ok) {
        alert("Produkten har lagts till");
        formRef.current.reset();
      } else {
        alert("Något gick fel!");
      }
    }).catch((err) => {
      console.error("Fetch error:", err);
    });
  };
  


  return (
    <>
    <div className=" flex">
      <div className=" bg-gray-400 min-h-screen">
          <h2 className=" m-5">Produkts</h2>
        </div>
        <div className=" m-5">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <label className=" text-2xl">Namn</label>
              <input type="text" name="productName" id="productName" className=" border-black border-solid"/>
            </div>
            <div className="">
              <label className=" text-2xl">Beskrivning</label>
              <textarea name="productDescription" id="productDescription" className=" border-black border-solid"></textarea>
            </div>
            <div>
              <label className=" text-2xl">Bild</label>
              <input type="url" name="productImage" id="productImage" className=" border-black border-solid"/>
            </div>
            <div>
              <label className=" text-2xl">Märke</label>
              <input type="text" name="brand" id="brand" className=" border-black border-solid"/>
            </div>
            <div>
              <label className=" text-2xl">Sku</label>
              <input type="text" name="sku" id="sku" className=" border-black border-solid"/>
            </div>
            <div>
              <label className=" text-2xl">Pris</label>
              <input type="text" name="price" id="price" className=" border-black border-solid"/>
            </div>
            <button type="submit" className=" border-solid border-black">Lägg till</button>
          </form>
      </div>
    </div>
    </>
  );
};

export default NewProduct;
