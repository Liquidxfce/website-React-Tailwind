import { useLocation } from "react-router";
import "./ProductDetails.css";
import { Link } from "react-router";

// TODO: Edit to work with freakyfasion

const ProductDetails = () => {

    const location = useLocation();

    const product = location.state;

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
                        <button className=" w-full m-3 text-2xl border border-solid border-black font-bold rounded-md sm:w-10">
                            Lägg i varukorgen
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;