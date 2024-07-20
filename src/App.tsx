import CustomerReviews from "./components/CustomerReviews";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import PopularProduct from "./components/PopularProduct";
import Services from "./components/Services";
import SpecialOffer from "./components/SpecialOffer";
import SuperQuality from "./components/SuperQuality";

function App() {
  return (
    <>
      <Nav />
      <section className="xl:px-8 sm:px-16">
        <HeroSection />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <PopularProduct />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <SuperQuality />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <Services />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <SpecialOffer />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <CustomerReviews />
      </section>
    </>
  );
}

export default App;
