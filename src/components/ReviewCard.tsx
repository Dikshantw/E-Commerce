interface ReviewProps {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}
import star from "../assets/star.svg";
const ReviewCard: React.FC<ReviewProps> = ({
  imgURL,
  customerName,
  rating,
  feedback,
}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center text-[#6d6d6d] text-lg leading-7">
        {feedback}
      </p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl text-[#6d6d6d] ">({rating})</p>
      </div>
      <h3 className="mt-1 text-3xl text-center font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
