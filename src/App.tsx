import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import PopularProduct from "./components/PopularProduct";
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
    </>
  );
}

export default App;
