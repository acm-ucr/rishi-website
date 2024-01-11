import { AiFillInstagram } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
const Socials = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex  justify-center  gap-20">
        <div className="border-2 border-rishi-green  rounded-2xl flex justify-center items-center w-60  h-64 bg-rishi-gray">
          <div className="shadow bg-rishi-white rounded-2xl  w-56   h-60 flex flex-col justify-around items-center">
            <a
              href="https://www.instagram.com/ucrprishi/?hl=en"
              target="_blank"
              className="flex flex-row  justify-center  "
            >
              <AiFillInstagram className=" w-24 h-24 text-rishi-black bg-rishi-white" />
            </a>
            <div className="flex  font-bold   text-2xl w-28 h-8 items-center justify-center text-rishi-black">
              Instagram
            </div>
          </div>
        </div>

        <div className="border-2 border-rishi-orange rounded-2xl flex justify-center items-center w-60  h-64 bg-rishi-gray">
          <div className="shadow bg-rishi-white rounded-2xl w-56 h-60 flex flex-col justify-around items-center">
            <a
              href="/"
              target="_blank"
              className="flex flex-row  justify-center "
            >
              <FaFacebookSquare className=" w-24 h-24 fill-rishi-black" />
            </a>
            <div className="flex  font-bold   text-2xl w-28 h-8 items-center justify-center text-rishi-black">
              Facebook
            </div>
          </div>
        </div>

        <div className="border-2 border-rishi-green rounded-2xl flex justify-center items-center w-60  h-64 bg-rishi-gray">
          <div className="shadow bg-rishi-white rounded-2xl w-56 h-60 flex flex-col justify-around items-center">
            <a
              href="/"
              target="_blank"
              className="flex flex-row  justify-center "
            >
              <FaLink className="w-20 h-20 fill-rishi-black" />
            </a>
            <div className="flex  font-bold   text-xl w-44 h-9 items-center justify-center text-rishi-black">
              Highlander Link
            </div>
          </div>
        </div>

        <div className="border-2 border-rishi-orange rounded-2xl flex justify-center items-center w-60  h-64 bg-rishi-gray">
          <div className="shadow bg-rishi-white rounded-2xl w-56 h-60 flex flex-col justify-around items-center">
            <a
              href="https://www.tiktok.com/@ucrprishi?_t=8bass9dmqp8&_r=1"
              target="_blank"
              className="flex flex-row  justify-center "
            >
              <FaTiktok className="w-20 h-20 fill-rishi-black" />
            </a>
            <div className="flex  w-28 h-8 items-center font-bold   text-2xl justify-center text-rishi-black">
              Tiktok
            </div>
          </div>
        </div>
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
