import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../features/products/productApi";
import Loading from "../loadingError/Loading";
import Error from "../loadingError/Error";

const ShopSection = () => {
  // const { search, pagenumber } = props;
  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  // console.log(products?.products);
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
                <Error>{error.data.message}</Error>
              ) : (
                <>
                  {products?.products?.map((product) => (
                    <div
                      className="shop col-lg-4 col-md-6 col-sm-6"
                      key={product?._id}
                    >
                      <div className="border-product">
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
                            new shoe
                          </p>
                          {/* <Rating
                      value={product?.rating}
                      text={`${product?.reviews.length} reviews`}
                    ></Rating> */}
                          <h3>$ 200</h3>
                        </div>
                      </div>
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
