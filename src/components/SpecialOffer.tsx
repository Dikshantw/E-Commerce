import offer from "../assets/offer.svg";
import Button from "./Button";
import arrowRight from "../assets/arrow-right.svg";
const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-w-[1440px] my-0 mx-auto">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full "
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-[#ff6452]">Special</span> Offer
        </h2>
        <p className="text-[#6d6d6d] text-lg leading-7 lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat amet
          iure, provident aliquid quibusdam officia sint autem ea optio, id qui
          nemo repellat. Nostrum voluptatibus nemo quia, natus quas consequatur.
        </p>
        <p className="text-[#6d6d6d] mt-6 lg:max-w-lg text-lg leading-7 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" icon={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-[#6d6d6d]"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
