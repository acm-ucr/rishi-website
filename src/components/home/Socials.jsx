import { AiFillInstagram } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
const Socials = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex  justify-center  gap-20">
        <Link
          href="https://www.instagram.com/ucrprishi/?hl=en"
          target="_blank"
          className="border-2 border-rishi-green  rounded-2xl flex justify-center items-center w-60  h-64 "
        >
          <div className="shadow bg-rishi-white rounded-2xl  w-56 py-3  h-60 flex flex-col justify-around items-center">
            <div className="flex flex-row  justify-center  ">
              <AiFillInstagram className=" w-24 h-24 text-rishi-black bg-rishi-white" />
            </div>
            <div className="flex  font-bold   text-2xl w-28 h-8 items-center justify-center text-rishi-black">
              Instagram
            </div>
          </div>
        </Link>

        <Link
          href="https://www.facebook.com/ucrprishi/"
          target="_blank"
          className="border-2 border-rishi-orange rounded-2xl flex justify-center items-center w-60  h-64 "
        >
          <div className="shadow bg-rishi-white rounded-2xl py-3 w-56 h-60 flex flex-col justify-around items-center">
            <div className="flex flex-row  justify-center ">
              <FaFacebookSquare className=" w-24 h-24 fill-rishi-black" />
            </div>
            <div className="  flex  font-bold   text-2xl w-28 h-8 items-center justify-center text-rishi-black">
              Facebook
            </div>
          </div>
        </Link>

        <Link
          href="https://ucr.campuslabs.com/engage/organization/projectrishi"
          target="_blank"
          className="border-2 border-rishi-green rounded-2xl flex justify-center items-center w-60  h-64 "
        >
          <div className="shadow bg-rishi-white rounded-2xl w-56 h-60 py-3 flex flex-col justify-around items-center">
            <div className="flex flex-row  justify-center ">
              <FaLink className="w-24 h-24 fill-rishi-black" />
            </div>
            <div className="flex  font-bold   text-2xl  w-48 h-9 items-center justify-center text-rishi-black">
              Highlander Link
            </div>
          </div>
        </Link>

        <Link
          href="https://www.tiktok.com/@ucrprishi?_t=8bass9dmqp8&_r=1"
          target="_blank"
          className="border-2 border-rishi-orange rounded-2xl flex justify-center items-center w-60  h-64 "
        >
          <div className="shadow bg-rishi-white rounded-2xl py-3 w-56 h-60 flex flex-col justify-around items-center">
            <div className="flex flex-row  justify-center ">
              <FaTiktok className="w-24 h-24 fill-rishi-black" />
            </div>
            <div className="flex  w-28 h-8 items-center font-bold   text-2xl justify-center text-rishi-black">
              Tiktok
            </div>
          </div>
        </Link>
      </div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeFIXoOH9AaAT4KrjpJJAajZ-8rP4sDbhGCNkcDbcZ0uXer5Q/viewform"
        target="_blank"
        className="flex flex-row justify-center text-rishi-orange w-96 h-12  items-center  mt-14 font-bold  text-2xl gap-2"
      >
        <div className=" w-10 h-10 ">
          <MdMail className="text-rishi-orange bg-rishi-white w-full h-full" />
        </div>
        JOIN OUR MAILING LIST!
      </a>
    </div>
  );
};

export default Socials;
