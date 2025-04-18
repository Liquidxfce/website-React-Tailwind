import { Link } from "react-router";
import "./ProductGrid.css";
import { FaHeart } from "react-icons/fa";

function ProductGrid({ products }) {
  if (!Array.isArray(products)) {
    return <p>No products available.</p>; // Handle invalid or empty product list
  }
  
    return (
      <>
        <section>
            {products.map(( product ) => (
                <article key={product.id}>
                  <div className="">
                    <Link to={`/products/${product.productName}`} state={product}>
                      <img src={product.productImage} alt="" className=""/>
                    </Link>
                    {/* lägg till hjärta */}
                    <FaHeart className=""/>
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