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
      <div className="flex gap-3 p-5 flex-col items-start justify-start  bg-rishi-white rounded-xl text-rishi-white shadow-2xl ring-0.5 ring-rishi-black">
        <div className="rounded-lg overflow-hidden mt-2">
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
        <div className="flex flex-col -mt-2">
          <p className="text-2xl font-urbanist font-bold text-rishi-orange  tracking-wide">
            Jennie Kim
          </p>
          <p className="text-lg font-urbanist text-rishi-black mt-[-5]">
            President
          </p>
          <div className="flex">
            <FaLinkedinIn className="h-6 w-6 text-rishi-orange" />
            <IoMdMail className="h-6 w-6 text-rishi-orange ml-2" />
          </div>
          <p className="text-xs font-urbanist text-rishi-black mt-1 p-0">
            3rd year - Comp Sci
          </p>
          <p className="text-xs font-urbanist text-rishi-black p-0 mt-0.5">
            Pronouns: She/Her/Hers
          </p>
        </div>
      </div>
    </div>
  );
};
export default Member;
