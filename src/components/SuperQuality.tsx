import Button from "./Button";
import shoe8 from "../assets/shoe8.svg";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-w-[1440px] my-0 mx-auto"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-[#ff6452]">Super</span>{" "}
          <span className="text-[#ff6452]">Quality</span> Shoes
        </h2>
        <p className="text-[#6d6d6d] text-lg leading-7 lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat amet
          iure, provident aliquid quibusdam officia sint autem ea optio, id qui
          nemo repellat. Nostrum voluptatibus nemo quia, natus quas consequatur.
        </p>
        <p className="text-[#6d6d6d] mt-6 lg:max-w-lg text-lg leading-7 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe"
          width={570}
          height={5220}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
