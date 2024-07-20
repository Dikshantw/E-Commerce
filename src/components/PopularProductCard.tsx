import star from "../assets/star.svg";
interface CardProps {
  img: string;
  name: string;
  price: string;
}

const PopularProductCard: React.FC<CardProps> = ({ img, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={img} alt={name} className="w-[282px] h-[282px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl leading-normal text-[#6d6d6d]">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold">{name}</h3>
      <p className="mt-2 font-semibold text-[#ff6452] text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
