import ReviewCard from "./ReviewCard";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.svg";
const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

const CustomerReviews = () => {
  return (
    <section className="max-w-[1440px] my-0 mx-auto">
      <h3 className="text-center text-4xl font-bold">
        What Our <span className="text-[#ff6452] ">Customers</span> Say?
      </h3>
      <p className="text-[#6d6d6d] text-lg leading-7 m-auto mt-4 max-w-lg text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        corporis perspiciatis quasi dicta{" "}
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
