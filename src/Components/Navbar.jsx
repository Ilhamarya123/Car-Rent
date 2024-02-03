import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-screen left-0 top-0 fixed z-10 ease-in duration-300 ">
      <div className="max-w-[1440px] bg-white m-auto flex justify-between items-center py-[25px] shadow-sm ">
        <h1 className="logo text-[25px] text-blueColor cursor-pointer">
          <strong>Car</strong>Hub
        </h1>
        <ul className="hidden sm:flex text-[18px]">
          <li className="p-4  hover:text-blueColor">
            <a href="Home">Home</a>
          </li>
          <li className="p-4 hover:text-blueColor">
            <a href="#Rent">Rent</a>
          </li>
          <li className="p-4 hover:text-blueColor">
            <a href="#Program">Program</a>
          </li>
          <li className="p-4 hover:text-blueColor">
            <a href="#Service">Service</a>
          </li>
          <li className="p-4 hover:text-blueColor">
            <a href="#About">About</a>
          </li>
        </ul>
        <div className="hidden sm:flex">
          <button className="p-4 w-[100px] h-auto border-blueColor ">
            Sign In
          </button>
          <button className="p-4 w-[100px] h-auto bg-blueColor text-white hover:ease-in duration-300">
            Sign In
          </button>
          {/*MObile BUtton */}
        </div>
        <div onClick={handleNav} className="block sm:hidden z-10">
          {!nav ? <IoMdClose /> : <IoMdMenu />}
        </div>
      </div>
      {/*MObile Menu */}
      <div
        className={
          !nav
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 h-screen flex justify-center items-center w-full bg-white text-center ease-in duration-300"
            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 h-screen flex justify-center items-center w-full bg-white text-center ease-in duration-300"
        }
      >
        <ul>
          <li className="p-4 text-4xl  hover:text-blueColor">
            <a href="Home">Home</a>
          </li>
          <li className="p-4 text-4xl hover:text-blueColor">
            <a href="#Rent">Rent</a>
          </li>
          <li className="p-4 text-4xl hover:text-blueColor">
            <a href="#Program">Program</a>
          </li>
          <li className="p-4 text-4xl hover:text-blueColor">
            <a href="#Service">Service</a>
          </li>
          <li className="p-4 text-4xl hover:text-blueColor">
            <a href="#About">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
