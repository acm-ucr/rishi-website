import Image from "next/image";
import placeholder from "@/public/placeholder.webp";
{
  import("tailwindcss").Config;
}
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Member = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-start w-48 h-72 bg-rishi-white rounded-xl text-rishi-white shadow-2xl ring-0.5 ring-rishi-black">
        <div className="rounded-lg overflow-hidden p-2 mt-2">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={placeholder}
              alt="Member"
              width={150}
              height={150}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-start -mt-2">
          <p className="text-2xl font-urbanist font-bold text-rishi-orange pr-7 tracking-wide">
            Jennie Kim
          </p>
          <p className="text-lg font-urbanist text-rishi-black pr-19 mt-[-5px]">
            President
          </p>
          <div className="flex">
            <FaLinkedinIn className="h-6 w-6 text-rishi-orange" />
            <IoMdMail className="h-6 w-6 text-rishi-orange ml-2" />
          </div>
          <p className="text-xs font-urbanist text-rishi-black mt-1 -ml-1">
            3rd year - Comp Sci
          </p>
          <p className="text-xs font-urbanist text-rishi-black mt-0.5 -ml-1">
            Pronouns: She/Her/Hers
          </p>
        </div>
      </div>
    </div>
  );
};
export default Member;
