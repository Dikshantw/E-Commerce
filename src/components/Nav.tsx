import Logo from "../assets/header-logo.svg";
import hamBurger from "../assets/hamburger.svg";
const Nav = () => {
  return (
    <header className="absolute z-10 sm:px-16 px-8 py-8 w-full">
      <nav className="flex justify-between items-center max-w-[1440px] my-0 mx-auto">
        <a href="/">
          <img src={Logo} alt="logo" height={29} />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          <li>
            <a href="#home" className="leading-normal text-lg text-[#6d6d6d]">
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              className="leading-normal text-lg text-[#6d6d6d]"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="leading-normal text-lg text-[#6d6d6d]"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#Contact-us"
              className="leading-normal text-lg text-[#6d6d6d]"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamBurger} alt="menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
