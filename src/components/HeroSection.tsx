import Button from "./Button";
import arrowRight from "../assets/arrow-right.svg";
import bigShoe1 from "../assets/big-shoe1.png";
import bigShoe2 from "../assets/big-shoe2.png";
import bigShoe3 from "../assets/big-shoe3.png";
import thumbnailShoe1 from "../assets/thumbnail-shoe1.svg";
import thumbnailShoe2 from "../assets/thumbnail-shoe2.svg";
import thumbnailShoe3 from "../assets/thumbnail-shoe3.svg";
import ShoeCard from "./ShoeCard";
import { useState } from "react";
interface Shoe {
  thumbnail: string;
  bigShoe: string;
}
const shoes: Shoe[] = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

const HeroSection = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full max-w-[1440px] min-h-screen my-0 mx-auto gap-10 flex xl:flex-row flex-col justify-center"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-8 max-xl:sm:px-16 pt-28">
        <p className="text-xl text-[#ff6452]">Our Summer Collection</p>
        <h1 className="mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
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
            <p className="text-4xl font-bold ">500+</p>
            <p className="leading-7 text-[#6d6d6d]">Shops</p>
          </div>
          <div>
            <p className="text-4xl font-bold ">250k+</p>
            <p className="leading-7 text-[#6d6d6d]">customers</p>
          </div>
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-[#eceeff] bg-[url('assets/collection-background.svg')] bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe: string) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
