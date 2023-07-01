import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { RiContactsBookLine } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";
import { FaJoint } from "react-icons/fa";


const Navbar = () => {
  const data = [
    {
      icon: AiOutlineHome,
      text: "Home",
      link: "/",
    },
    {
      icon: FcAbout,
      text: "About",
      link: "/about",
    },
    {
      icon: RiContactsBookLine,
      text: "Contact us",
      link: "/contact",
    },
    {
      icon: IoMdLogIn,
      text: "Login",
      link: "/",
    },
    {
      icon: FaJoint,
      text: "join us",
      link: "/",
    },
  ];
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((click) => !clicked);
  };

  return (
    <nav className={clicked?"bg-slate-900 text-white w-full flex flex-col shadow-md shadow-slate-300 sticky top-0 py-2 min-h-screen":"bg-slate-900 text-white w-full  shadow-md shadow-slate-300 sticky top-0 z-50 py-2"}>
      <div className="w-full md:w-[80%] mx-auto flex justify-between items-center p-2 px-3">
        <div className="flex items-center order-2 md:order-1">
          <Image
            src={"/logo.svg"}
            width={150}
            height={80}
            className=" md:w-[120px]  w-[100px] lg:w-[130px]"
          ></Image>
        </div>
        <div className=" order-2 justify-between hidden md:flex items-center gap-10 text-white font-serif text-2xl ">
          <Link href="/">
            <span className=" cursor-pointer hover:text-amber-100 font-extralight">
              Home
            </span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer hover:text-amber-100 ">
              Contact us
            </span>
          </Link>
          <Link href="/about">
            <span className="cursor-pointer hover:text-amber-100">About</span>
          </Link>
        </div>
        <div className="flex justify-center items-center order-3">
          <button className="bg-white text-purple-700  shadow-md rounded-md w-fit md:px-3 px-2  py-1 hover:bg-purple-700 hover:text-white transition-all duration-75 font-Roboto font-semibold first-letter:capitalize shadow-purple-50 text-xl  md:text-2xl">
            join us
          </button>
        </div>
        <button
          className="flex md:hidden text-white text-3xl"
          onClick={handleClick}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      
     <div className={clicked?"flex duration-1000  gap-6 transition-all w-[60%]  flex-col px-3 py-4 bg-white h-screen "
     : " -translate-x-[100%] hidden"
     }>
        <Link href="/" className="flex  gap-2 justify-evenly text-white font-Roboto text-xl items-center bg-gray-700 py-2 px-3 rounded-md shadow-md  hover:bg-slate-600 w-full "> <AiOutlineHome className="text-2xl"/> {clicked?<span>Home</span> :""}</Link>
        <Link href="/about" className="flex  gap-2 justify-evenly text-white font-Roboto text-xl items-center bg-gray-700 py-2 px-3 rounded-md shadow-md  hover:bg-slate-600 w-full "> <FcAbout/> {clicked?<span>About</span> :""}</Link>
        <Link href="/contact" className="flex  gap-2 justify-evenly text-white font-Roboto text-xl items-center bg-gray-700 py-2 px-3 rounded-md shadow-md  hover:bg-slate-600 w-full "> <RiContactsBookLine/> {clicked?<span>contact us</span> :""}</Link>
        <Link href="/" className="flex  gap-2 justify-evenly text-white font-Roboto text-xl items-center bg-gray-700 py-2 px-3 rounded-md shadow-md  hover:bg-slate-600 w-full "> <IoMdLogIn/> {clicked?<span>login</span> :""}</Link>
        <Link href="/" className="flex  gap-2 justify-evenly text-white font-Roboto text-xl items-center bg-purple-700  py-2 px-3 rounded-md shadow-md  hover:bg-slate-600 w-full "> <FaJoint/> {clicked?<span>join us</span> :""}</Link>
     </div>
    
      
    </nav>
  );
};

export default Navbar;
