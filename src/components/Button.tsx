interface ButtonProps {
  label: string;
  icon?: string;
}
const Button: React.FC<ButtonProps> = ({ label, icon }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-[#ff6452] rounded-full text-white border-[#ff6452]">
      {label}
      {icon && (
        <img src={icon} alt="label" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
