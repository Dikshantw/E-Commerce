import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import PopularProduct from "./components/PopularProduct";
import Services from "./components/Services";
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
    </>
  );
}

export default App;
