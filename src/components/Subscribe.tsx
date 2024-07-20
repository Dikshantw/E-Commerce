import Button from "./Button";

const Subscribe = () => {
  return (
    <section
      className="max-w-[1440px] my-0 mx-auto flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-bold">
        Sign Up from
        <span className="text-[#ff6452]">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-[#6d6d6d] rounded-full">
        <input
          type="text"
          placeholder="Subscribe here.."
          className="sm:flex-1 max-sm:w-full text-base leading-normal text-[#6d6d6d] pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-[#6d6d6d] max-sm:rounded-full"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
