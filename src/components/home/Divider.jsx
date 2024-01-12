import Image from "next/image";
import profile from "@/public/prishi-logo.webp";

const Divider = () => {
  return (
    <div className="flex items-center h-auto w-full">
      <div className="flex flex-col items-end h-24 w-3/5 mt-10">
        <div className="absolute flex-auto w-1/6 border-b border-rishi-orange mt-2"></div>
        <div className="flex-auto absolute w-1/12 border-b border-rishi-green mt-6"></div>
      </div>

      <div className="flex flex-col h-24 w-auto items-center px-10 mt-6">
        <Image src={profile} alt="rishi-logo" className="w-24 h-auto" />
      </div>

      <div className="flex flex-col items-start h-24 w-3/5 mt-10">
        <div className="absolute flex-auto w-1/6 border-b border-rishi-orange mt-2"></div>
        <div className="flex-auto absolute w-1/12 border-b border-rishi-green mt-6"></div>
      </div>
    </div>
  );
};

export default Divider;
