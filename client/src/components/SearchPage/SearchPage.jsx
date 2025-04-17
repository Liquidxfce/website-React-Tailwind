import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Link } from "react-router";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const query = searchParams.get("search");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/products?search=${encodeURIComponent(query)}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    if (query) {
      fetchProducts();
    }
  }, [query]);

  return (
    <>
      <header>
        
      </header>
      <main>
        <section>
          <h2>Hittade produkter för: "{query}"</h2>
          <p>{products.length} produkter hittades.</p>
        </section>
        <section>
          {products.length > 0 ? (
            products.map((product) => (
              <article key={product.id}>
                <div>
                  <Link to={`/products/${product.productName}`} state={product}>
                    <img src={product.productImage} alt={product.productName} />
                  </Link>
                  {/* Lägg till hjärta */}
                </div>
                <div>
                  <span>{product.productName}</span>
                  <span>{product.price} kr</span>
                </div>
                <p>{product.brand}</p>
              </article>
            ))
          ) : (
            <p>Inga produkter matchade din sökning.</p>
          )}
        </section>
      </main>
    </>
  );
}

export default SearchPage;
