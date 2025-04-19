import { Link } from "react-router";
import "./ProductGrid.css";
import { FaHeart } from "react-icons/fa";

function ProductGrid({ products }) {
  if (!Array.isArray(products)) {
    return <p>No products available.</p>; // Handle invalid or empty product list
  }
  
    return (
      <>
        <section className=" sm:grid grid-cols-2 lg:grid-cols-4">
            {products.map(( product ) => (
                <article key={product.id}>
                  <div className=" relative">
                    <Link to={`/products/${product.productName}`} state={product}>
                      <img src={product.productImage} alt="" className=" w-full sm:px-5"/>
                    </Link>
                    {/* lägg till hjärta */}
                    <FaHeart className=" absolute text-3xl border border-solid border-black rounded-full px-1 bottom-5 right-5"/>
                  </div>
                  <div className="">
                    <span>{product.productName}</span>
                    <span>{product.price}</span>
                  </div>
                  <p>{product.brand}</p>
                </article>
            ))}
        </section>
      </>
    );
  }

export default ProductGrid; 