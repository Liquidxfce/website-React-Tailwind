import { Link } from "react-router";
import "./ProductGrid.css";

function ProductGrid({ products }) {
  
    return (
      <>
        <section>
            {products.map(( product ) => (
                <article>
                  <div>
                    <Link to={`/movies/${product.id}`} state={product}>
                      <img src={product.imageUrl} alt="" />
                    </Link>
                    <i class="bi bi-heart"></i>
                  </div>
                  <div>
                    <span>{product.productName}</span>
                    <span>{product.price}</span>
                  </div>
                  <p>{product.brand}</p>
                </article>
            ))}
        </section>
      </>
    )
  }

export default ProductGrid; 