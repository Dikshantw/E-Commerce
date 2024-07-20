import ServiceCard from "./ServiceCard";
import truckFast from "../assets/truck-fast.svg";
import shieldTick from "../assets/shield-tick.svg";
import support from "../assets/support.svg";
const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];
const Services = () => {
  return (
    <section className="max-w-[1440px] my-0 mx-auto flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
