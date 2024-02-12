import Image from "next/image";
import placeholder from "@/public/placeholder.webp";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Member = ({ name, role, image, yearMajor, pronouns, linkedin }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-5 justify-start bg-rishi-white rounded-xl text-rishi-white shadow-2xl ring-0.5 ring-rishi-black w-48 min-h-full">
      <div className="relative w-36 h-36 rounded-lg overflow-hidden mt-2">
        <Image
          src={image || placeholder}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="text-left">
        <p className="text-l font-urbanist font-bold text-rishi-orange tracking-wide">
          {name}
        </p>
        <p className="text-md font-urbanist text-rishi-black mt-[-5]">{role}</p>
        {linkedin && (
          <div className="flex gap-2 justify-start">
            <Link href={linkedin} target="_blank">
              <FaLinkedinIn className="h-6 w-6 text-rishi-orange" />
            </Link>
          </div>
        )}
        <p className="text-xs font-urbanist text-rishi-black mt-1 p-0">
          {yearMajor}
        </p>
        <p className="text-xs font-urbanist text-rishi-black p-0 mt-0.5">
          {pronouns}
        </p>
      </div>
    </div>
  );
};

export default Member;
