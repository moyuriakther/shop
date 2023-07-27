import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromWishlist } from "../features/wishlist/wishSlice";

const Wishlist = (props) => {
  const { _id, image, title, price, category } = props.wishlist || {};

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // remove wish item
  const handleRemoveWishlist = (wishlist) => {
    dispatch(removeFromWishlist(wishlist));
  };

  // add to cart in wish page
  const handleAddToCart = () => {
    // dispatch(addCart({ product, qty: Number(1) }));
    navigate("/carts");
  };

  return (
    <div className="shop col-lg-4 col-md-6 col-sm-6">
      <div className="card w-96 bg-white-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Link to={`/products/${_id}`}>
            <img src={image} alt="Shoes" className="rounded-xl" />
          </Link>
        </figure>
        <div className="card-body items-center text-center">
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(props.wishlist)}
              className="text-white bg-rose-600 hover:bg-rose-800 rounded-lg mx-2 px-2 md:whitespace-pre"
            >
              Add To Cart
            </button>
            <button
              onClick={() => handleRemoveWishlist(props.wishlist)}
              className="dark:text-rose-600"
            >
              <i className="fa-solid fa-trash text-red-600"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
