import Image from "next/image";
import placeholder from "@/public/placeholder.webp";
{
  import("tailwindcss").Config;
}
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Member = () => {
  const iconStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "200px",
    height: "300px",
    backgroundColor: "white",
    borderRadius: "15px",
    color: "white",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.3)",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const imageContainerStyle = {
    borderRadius: "15px",
    overflow: "hidden",
    padding: "10px",
    marginTop: "10px",
  };

  const imageWrapperStyle = {
    borderRadius: "15px",
    overflow: "hidden",
  };

  return (
    <div style={containerStyle}>
      <div style={iconStyle}>
        <div style={imageContainerStyle}>
          <div style={imageWrapperStyle}>
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
          <p className="text-2xl font-urbanist font-bold text-orange-500 pr-7 tracking-wide">
            Jennie Kim
          </p>
          <p className="text-lg font-urbanist text-black pr-19">President</p>
          <div className="flex">
            <FaLinkedinIn className="h-6 w-6 text-orange-500" />
            <IoMdMail className="h-6 w-6 text-orange-500 ml-2" />
          </div>
          <p className="italic text-xs font-urbanist text-black mt-1 -ml-1">
            3rd year - Comp Sci
          </p>
          <p className="italic text-xs font-urbanist text-black mt-0.5 -ml-1">
            Pronouns: She/Her/Hers
          </p>
        </div>
      </div>
    </div>
  );
};
export default Member;
