import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <section className="xl:px-8 sm:px-16">
        <HeroSection />
      </section>
    </>
  );
}

export default App;
