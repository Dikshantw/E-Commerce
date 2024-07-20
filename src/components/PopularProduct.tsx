import PopularProductCard from "./PopularProductCard";
import shoe4 from "../assets/shoe4.svg";
import shoe5 from "../assets/shoe5.svg";
import shoe6 from "../assets/shoe6.svg";
import shoe7 from "../assets/shoe7.svg";
const products = [
  {
    img: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    img: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    img: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    img: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];
const PopularProduct = () => {
  return (
    <section id="products" className="max-w-[1440px] my-0 mx-auto max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold">
          Our <span className="text-[#ff6452]">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 text-[#6d6d6d]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          sit enim perferendis quod saepe recusandae dolor veritatis!
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
