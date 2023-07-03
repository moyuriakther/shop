import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../../features/products/productApi";
import Loading from "../loadingError/Loading";
import Error from "../loadingError/Error";
// import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { addToWishlist } from "../../features/wishlist/wishSlice";
import { addToCart } from "../../features/cart/cartSlice";
import ProductCard from "./ProductCard";

const ShopSection = () => {
  const navigate = useNavigate();
  // const [favoriteProduct, setFavoriteProduct] = useState([]);
  // const { pagenumber } = props;
  // const filters = useSelector((state) => state.filters);
  // const { search } = filters;
  const dispatch = useDispatch();
  // const favorites = useSelector((state) => state.favorites.favorites);
  // const isFavorite = favorites.some((item) => item.id === favoriteProduct.id);

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery();

  // const handleAddToWishlist = (product) => {
  //   dispatch(addToWishlist(product));
  //   navigate("/wishlist");
  // };
  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, qty: 1 }));
    navigate("/cart");
  };
  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col-lg-12 col-md-12 article">
            <div className="shopcontainer row">
              {isLoading ? (
                <div className="mb-5">
                  <Loading />
                </div>
              ) : isError ? (
                <Error>{error?.data?.message}</Error>
              ) : (
                <>
                  {products?.map((product) => (
                    <div
                      className="shop col-lg-3 col-md-6 col-sm-6"
                      key={product?._id}
                    >
                      <ProductCard
                        product={product}
                        handleAddToCart={handleAddToCart}
                      />
                      {/* <div className="border-product">
                        <Link to={`/products/${product._id}`}>
                          <div className="shopBack">
                            <img src={product?.image} alt={product?.name} />
                          </div>
                        </Link>
                        <div className="shoptext">
                          <p>
                            <Link to={`/products/${product?._id}`}>
                              {product?.name}
                            </Link>
                          </p>
                          <Rating
                            value={product?.rating}
                            text={`${product?.reviews.length} reviews`}
                          ></Rating>
                          <div className="column-flex">
                            <h3>$ {product?.price}</h3>
                            <button
                              onClick={() => handleAddToCart(product)}
                              className="round-black-small-btn"
                            >
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  ))}
                </>
              )}
              {/* <Pagination
                page={page}
                pages={pages}
                search={search ? search : ""}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
