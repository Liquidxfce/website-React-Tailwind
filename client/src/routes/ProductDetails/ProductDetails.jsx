import { useLocation } from "react-router";

// TODO: Edit to work with freakyfasion

const ProductDetails = () => {

    const location = useLocation();

    const movie = location.state;

    return (
        <>
            <div>
                <h1>{movie.title}</h1>
                <div>
                    {movie.genre}, {movie.releaseYear}
                    {movie.rating}
                </div>
                <div>
                    {movie.plot}
                </div>
            </div>
            <img src={movie.imageUrl} alt="" />
        </>
    )
}

export default ProductDetails;