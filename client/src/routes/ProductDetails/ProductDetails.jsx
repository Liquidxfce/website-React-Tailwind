import { useLocation } from "react-router";
import "./ProductDetails.css";
import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";


const ProductDetails = () => {

    const location = useLocation();

    const product = location.state;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from backend
        const fetchProducts = async () => {
        try {
            const response = await fetch("/api/products");
            const data = await response.json();
            const filtered = data.filter((item) => item.id !== product.id); // avoid showing the current product
            setProducts(filtered.slice(0, 3)); // show only 3
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
        };

        fetchProducts();
    }, [product.id]);

    return (
        <>
            <div className=" m-5">
                <div className=" p-20 border border-solid border-black sm:flex sm:flex-row">
                    <div className=" sm:flex-1 border border-solid border-black m-5">
                        <img src={product.productImage} alt="" className=" w-full sm:scale-100"/>
                    </div>
                    <div className=" sm:flex-1 m-5">
                        <h2 className=" uppercase">{product.productName}</h2>
                        <p className=" font-bold">{product.brand}</p>
                        <p className=" text-2xl">{product.productDescription}</p>
                        <p className=" font-bold text-2xl">{product.price}</p>
                        <button className=" w-full m-3 text-2xl border border-solid border-black font-bold rounded-md sm:w-auto">
                            Lägg i varukorgen
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <section className="sm:grid grid-cols-2 lg:grid-cols-4">
                    {products.map((item) => (
                        <article key={item.id}>
                        <div className="relative">
                            <Link to={`/products/${item.productName}`} state={item}>
                            <img
                                src={item.productImage}
                                alt=""
                                className="w-full sm:px-5"
                            />
                            </Link>
                            <FaHeart className="absolute text-3xl border border-solid border-black rounded-full px-1 bottom-5 right-5" />
                        </div>
                        <div>
                            <span>{item.productName}</span>
                            <span>{item.price}</span>
                        </div>
                        <p>{item.brand}</p>
                        </article>
                    ))}
                </section>
            </div>
        </>
    )
}

export default ProductDetails;