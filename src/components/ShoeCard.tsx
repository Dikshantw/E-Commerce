interface ShoecardProps {
  index: number;
  imgURL: {
    thumbnail: string;
    bigShoe: string;
  };
  changeBigShoeImage: (shoe: string) => void;
  bigShoeImg: string;
}
const ShoeCard: React.FC<ShoecardProps> = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImg,
}) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-[#ff6452]"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-[url('assets/thumbnail-background.svg')] bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe colletion"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;