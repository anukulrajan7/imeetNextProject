import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900   font-Mullish w-full">
      <div className="w-full md:w-[80%] flex-wrap flex justify-between items-start  gap-5 mx-auto py-8 px-4">
        <div className="flex text-white gap-4 flex-col justify-start items-start px-2 py-1">
          {" "}
          <h2 className="text-[18px]">Information</h2>
          <div className="flex justify-center flex-col items-start capitalize gap-1 text-sm">
            <Link href="/">Home</Link>
            <Link href="/">about</Link>
            <Link href="/">contact</Link>
            <Link href="/">sign in</Link>
            <Link href="/">join us</Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 capitalize justify-center items-center px-2 py-1  text-white text-sm">
          {" "}
          <h2>legal</h2>
          <div className="flex flex-col justify-center gap-4 items-start">
            <Link href="/">Terms& condition</Link>
            <Link href="/">Privacy</Link>
          
          </div>
        </div>
        <div className="flex flex-col gap-3 capitalize justify-center items-center  text-white text-sm px-2 py-1">
          {" "}
          <h2>suppourt</h2>
          <div className="flex flex-col justify-center items-start">
            <Link href="/">faq</Link>
            <Link href="/">continue</Link>
          
          </div>
        </div>
  
        <div className="flex flex-col gap-3 rounded-md shadow-md text-white bg-purple-700 px-3 py-3 justify-center items-center">
          <h2>Social link</h2>
          <div className="flex justify-between gap-4">
            <Link href="#" className="text-white mx-2">
              <FaTwitter size={24} />
            </Link>
            <Link href="#" className="text-white mx-2">
              <FaInstagram size={24} />
            </Link>
            <Link href="#" className="text-white mx-2">
              <FaFacebook size={24} />
            </Link>
          </div>
        </div>
      </div>
        <p className="text-center text-white py-2 ">© 2023 iMeet.| All rights reserved.</p>
    </footer>
  );
};

export default Footer;
