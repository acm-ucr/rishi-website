import { AiFillInstagram } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
const Socials = () => {
  return (
    <div className=" flex justify-center mb-[120px] flex-col items-center h-full w-full ">
      <div className="md:flex grid grid-cols-1 gap-5 justify-around w-11/12 h-2/5 ">
        <Link
          href="https://www.instagram.com/ucrprishi/?hl=en"
          target="_blank"
          className="border-2 border-rishi-green  rounded-2xl flex justify-center items-center sm:w-1/2 lg:w-1/4 xl:w-1/5 h-full py-2  no-underline transform transition duration-500 ease-in-out hover:scale-105"
        >
          <div className="shadow-none bg-rishi-white rounded-2xl w-full h-full sm:w-11/12 sm:h-5/6 flex flex-col justify-around items-center  py-14">
            <div className="flex flex-row  justify-center items-center  w-1/2 h-2/3 pb-4 ">
              <AiFillInstagram className="  text-rishi-black bg-rishi-white w-full h-full " />
            </div>
            <div className="flex  font-bold h-full w-full lg:text-2xl  md:text-sm sm:text-xs items-center justify-center text-rishi-black pt-2">
              Instagram
            </div>
          </div>
        </Link>

        <Link
          href="https://www.facebook.com/ucrprishi/"
          target="_blank"
          className="border-2 border-rishi-orange rounded-2xl flex justify-center items-center sm:w-1/2 lg:w-1/4 xl:w-1/5 h-full py-2 no-underline transform transition duration-500 ease-in-out hover:scale-105"
        >
          <div className="shadow-none bg-rishi-white rounded-2xl  flex flex-col justify-around items-center w-full h-full sm:w-11/12 sm:h-5/6   py-14">
            <div className="flex flex-row  justify-center items-center  w-1/2 h-2/3 pb-4  ">
              <FaFacebookSquare className="  fill-rishi-black w-full h-full" />
            </div>
            <div className="  flex  font-bold   lg:text-2xl  md:text-sm sm:text-xs  items-center justify-center text-rishi-black h-full w-full pt-2 ">
              Facebook
            </div>
          </div>
        </Link>

        <Link
          href="https://ucr.campuslabs.com/engage/organization/projectrishi"
          target="_blank"
          className="border-2 border-rishi-green rounded-2xl flex justify-center items-center sm:w-1/2 lg:w-1/4 xl:w-1/5 h-full py-2 no-underline transform transition duration-500 ease-in-out hover:scale-105"
        >
          <div className="shadow-none bg-rishi-white rounded-2xl  flex flex-col justify-around   items-center w-full h-full sm:w-11/12 sm:h-5/6  py-14">
            <div className="flex flex-row  justify-center items-center  w-1/2 h-2/3 pb-4 ">
              <FaLink className=" fill-rishi-black w-full h-full" />
            </div>
            <div className="flex  font-bold   lg:text-2xl  md:text-sm sm:text-xs items-center justify-center text-rishi-black h-full w-full pt-2 ">
              Highlander Link
            </div>
          </div>
        </Link>

        <Link
          href="https://www.tiktok.com/@ucrprishi?_t=8bass9dmqp8&_r=1"
          target="_blank"
          className="border-2 border-rishi-orange rounded-2xl flex justify-center items-center sm:w-1/2 lg:w-1/4 xl:w-1/5 h-full py-2  no-underline transform transition duration-500 ease-in-out hover:scale-105 "
        >
          <div className="shadow-none bg-rishi-white rounded-2xl   flex flex-col justify-around items-center w-full h-full sm:w-11/12 sm:h-5/6 py-14">
            <div className="flex flex-row  justify-center  w-1/2 h-2/3   pb-4">
              <FaTiktok className=" fill-rishi-black  w-full h-full" />
            </div>
            <div className="flex  items-center font-bold   lg:text-2xl  md:text-sm sm:text-xs justify-center text-rishi-black h-full w-full pt-2 ">
              Tiktok
            </div>
          </div>
        </Link>
      </div>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSeFIXoOH9AaAT4KrjpJJAajZ-8rP4sDbhGCNkcDbcZ0uXer5Q/viewform"
        target="_blank"
        className="flex flex-row justify-center text-rishi-orange   items-center   font-bold  text-2xl gap-2 w-full h-1/4 pt-7 "
      >
        <div className="w-full h-full flex flex-row items-center justify-center">
          <MdMail className="text-rishi-orange bg-rishi-white " />
          JOIN OUR MAILING LIST!
        </div>
      </Link>
    </div>
  );
};

export default Socials;
