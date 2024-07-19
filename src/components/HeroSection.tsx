import Button from "./Button";
import arrowRight from "../assets/arrow-right.svg";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full max-w-[1440px] min-h-screen my-0 mx-auto gap-10 flex xl:flex-row flex-col justify-center"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-8 sm:px-16 pt-28">
        <p className="text-xl text-[#ff6452]">Our Summer Collection</p>
        <h1 className="mt-10 text-8xl max-sm:text-[72px] max-sm: leading-[82px] font-bold">
          <span className="xl: bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arraival
          </span>
          <br />
          <span className="text-[#ff6452] inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-[#6d6d6d]  text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid
          debitis excepturi.
        </p>
        <Button label="Shop Now" icon={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          <div>
            <p className="text-4xl font-bold ">1k+</p>
            <p className="leading-7 text-[#6d6d6d]">Brands</p>
          </div>
          <div>
            <p>500+</p>
            <p>Shops</p>
          </div>
          <div>
            <p>250k+</p>
            <p>customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
