import React, { useState, useEffect } from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import "./Home.css";

const Home = () => {
  // State to store products
  const [products, setProducts] = useState([]);

  // Fetch products from API when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data); // Set the fetched products in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <>
      <ProductGrid products={products} />
    </>
  );
};

export default Home;

