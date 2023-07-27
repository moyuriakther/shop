import { useSelector } from "react-redux";
import Wishlist from "../components/Wishlist";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WishlistScreen = () => {
  const { wishlistItems } = useSelector((state) => state?.wishlists);

  // console.log(wishlistItems);

  return (
    <>
      <Header />
      <div className="container">
        <div className="section">
          <h1 className="text-4xl text-center py-5 dark:text-black-200">
            ❤️ My Wishlists ❤️
          </h1>
          {wishlistItems?.length <= 0 && (
            <h3 className="text-center text-2xl">Your Wishlist is empty</h3>
          )}
          <div className="shopcontainer row ">
            {wishlistItems?.map((wishlist) => {
              return <Wishlist key={wishlist?._id} wishlist={wishlist} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishlistScreen;
