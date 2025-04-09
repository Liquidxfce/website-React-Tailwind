import React, { useState, useEffect } from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import TopBar from "../../components/topBar/topBar"; 
import "./Home.css";

const Home = () => {
  // State to store products, search term, and filtered products
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

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

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive search
  );

  // Update the search term from the TopBar component
  const handleSearchChange = (term) => {
    setSearchTerm(term); // Update the search term
  };

  return (
    <>
      <TopBar onSearchChange={handleSearchChange} /> {/* Pass the search change handler to TopBar */}
      <ProductGrid products={filteredProducts} /> {/* Pass filtered products */}
    </>
  );
};

export default Home;
