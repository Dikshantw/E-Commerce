import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import PopularProduct from "./components/PopularProduct";
import Services from "./components/Services";
import SpecialOffer from "./components/SpecialOffer";
import Subscribe from "./components/Subscribe";
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
      <section className="bg-[#f5f6ff] sm:px-16 px-8 sm:py-24 py-12">
        <CustomerReviews />
      </section>
      <section className="sm:px-16 px-8 sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black sm:px-16 px-8 sm:pt-24 pt-12 pb-8">
        <Footer />
      </section>
    </>
  );
}

export default App;
