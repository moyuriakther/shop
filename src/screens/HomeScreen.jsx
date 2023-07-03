import Header from "../components/Header";
import CallToActionSection from "../components/homeComponents/CallToActionSection";
import ContactInfo from "../components/homeComponents/ContactInfo";
import ShopSection from "../components/homeComponents/ShopSection";
import Footer from "../components/Footer";
import SimpleSlider from "../components/homeComponents/SimpleSlider";

const HomeScreen = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <Header />
      <SimpleSlider />
      <ShopSection />
      <CallToActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
