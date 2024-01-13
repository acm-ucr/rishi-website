import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-56 bg-rishi-green absolute inset-x-0 bottom-0">
      <div className="text-xl text-white absolute bottom-4 left-4 font-bold">
        PRISHI
      </div>
      <div className="flex justify-end items-end h-full pr-4 pb-4 gap-4">
        <div className="text-right text-white">
          <div className="text-xl font-bold">Contact Us</div>
          <div className="text-sm">900 University Ave,</div>
          <div className="text-sm">Riverside, California 92521</div>
        </div>

        <div className="flex flex-col justify-center text-white text-5xl">
          <div className="border-l-8 border-white h-40 pl-4">
            <AiFillInstagram />
            <IoLogoFacebook />
            <FaTiktok />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
