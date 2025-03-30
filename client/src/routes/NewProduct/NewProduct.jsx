// TODO: Add functionalaty
import { useRef } from "react";

const NewProduct = () => {

  const formRef = useRef();

  const handleSubmit = (event) => {
    
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

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
      }
    });
  };


  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Namn</label>
          <input type="text" name="productName" />
        </div>
        <div>
          <label>Beskrivning</label>
          <textarea name="productDescription"></textarea>
        </div>
        <div>
          <label>Bild</label>
          <input type="url" name="productImage" />
        </div>
        <div>
          <label>År</label>
          <input type="number" name="releaseYear" />
        </div>
        <div>
          <label>Betyg</label>
          <input type="text" name="rating" />
        </div>
        <button type="submit">Lägg till</button>
      </form>
    </>
  );
};

export default NewProduct;
