import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="justify-between flex items-end flex-1 ">
      <div className="h-1/2 flex justify-between pt-10 flex-1 bg-rishi-green">
        <div className="text-xl self-end text-white font-bold p-4">PRISHI</div>
        <div className="flex justify-end items-end pr-4 pb-4 gap-4">
          <div className="text-right text-white">
            <div className="text-xl font-bold">Contact Us</div>
            <div className="text-sm">900 University Ave,</div>
            <div className="text-sm">Riverside, California 92521</div>
          </div>

          <div className="flex flex-col justify-center text-white text-5xl border-l-8 border-white pl-4">
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
