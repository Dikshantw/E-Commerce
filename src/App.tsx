import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import PopularProduct from "./components/PopularProduct";

function App() {
  return (
    <>
      <Nav />
      <section className="xl:px-8 sm:px-16">
        <HeroSection />
      </section>
      <section>
        <PopularProduct />
      </section>
    </>
  );
}

export default App;
