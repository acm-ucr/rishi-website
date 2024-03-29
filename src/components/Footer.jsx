import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex">
      <div className="flex justify-between pt-10 flex-1 bg-rishi-green">
        <div className="text-xl self-end text-white font-bold p-4">PRISHI</div>
        <div className="flex justify-end items-end pr-4 pb-4 gap-4">
          <div className="text-right text-white">
            <div className="text-xl font-bold">Contact Us</div>
            <div className="text-sm">900 University Ave,</div>
            <div className="text-sm">Riverside, California 92521</div>
          </div>

          <div className="flex items-center flex-col justify-center  text-white text-5xl border-l-8 border-white pl-4 ">
            <Link
              href="https://www.instagram.com/ucrprishi/?hl=en"
              target="_blank"
            >
              <AiFillInstagram className="text-white duration-300 ease-in-out hover:scale-110" />
            </Link>

            <Link href="https://www.facebook.com/ucrprishi/" target="_blank">
              <IoLogoFacebook className="text-white duration-500 ease-in-out hover:scale-110" />
            </Link>

            <div className="pb-1 " />

            <Link
              href="https://www.tiktok.com/@ucrprishi?_t=8bass9dmqp8&_r=1"
              target="_blank"
            >
              <FaTiktok className="w-10 text-white duration-500 ease-in-out hover:scale-110" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
