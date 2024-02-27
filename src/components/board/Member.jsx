import Image from "next/image";
import placeholder from "@/public/placeholder.webp";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Member = ({ name, role, image, yearMajor, pronouns }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-5 pb-0 justify-start bg-rishi-white rounded-xl text-rishi-white shadow-2xl ring-0.5 ring-rishi-black min-h-full w-72">
      <div className="relative w-48 h-48 rounded-lg overflow-hidden mt-2">
        <Image
          src={image || placeholder}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="text-center">
        <p className="text-2xl font-urbanist font-bold text-rishi-orange tracking-wide m-1">
          {name}
        </p>
        <p className="text-xl font-urbanist text-rishi-black m-1">{role}</p>
        <div className="flex gap-2 justify-center">
          <FaLinkedinIn className="h-6 w-6 text-rishi-orange" />
          <IoMdMail className="h-6 w-6 text-rishi-orange" />
        </div>
        <p className="text-s font-urbanist text-rishi-black mt-1 p-0 m-1">
          {yearMajor}
        </p>
        <p className="text-s font-urbanist text-rishi-black p-0 mt-0.5 m-1">
          {pronouns}
        </p>
      </div>
    </div>
  );
};

export default Member;
