import { useLocation } from "react-router";
import "./ProductDetails.css";

// TODO: Edit to work with freakyfasion

const ProductDetails = () => {

    const location = useLocation();

    const product = location.state;

    return (
        <>
            <article className="">
                <h1>{product.productName}</h1>
                <div>
                    <img src={product.productImage} alt="" />
                </div>
                <div>
                    <span>{product.productName}</span>
                    <span>{product.price}</span>
                </div>
                <p>{product.brand}</p>
            </article>
        </>
    )
}

export default ProductDetails;