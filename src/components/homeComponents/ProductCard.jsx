import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { name, _id, price, image } = props.product || {};
  const { handleAddToCart } = props;
  return (
    <div className="card w-auto bg-white shadow-xl">
      <Link to={`/products/${_id}`}>
        <figure className="px-8 pt-10 product-image">
          <img src={image} alt={name} className="rounded-xl" />
        </figure>
      </Link>
      <div className="card-body items-center text-center">
        <Link to={`/products/${_id}`}>
          {" "}
          <h2 className="card-title shoeName">{name}</h2>
        </Link>
        <p>$ {price}</p>
        <div className="card-actions">
          <button
            className="btn btn-outline btn-wide addCartBtn"
            onClick={() => handleAddToCart(props?.product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
