import Image from "next/image";
import profile from "@/public/prishi-logo.webp";

const Divider = () => {
  return (
    <div className="flex items-center h-auto w-full">
      <div className="flex flex-col items-end gap-4 w-3/5">
        <hr className="w-1/2 border-rishi-orange" />
        <hr className="w-1/5 border-rishi-green" />
      </div>

      <div className="flex flex-col w-auto items-center px-11">
        <Image src={profile} alt="rishi-logo" className="w-24 h-auto" />
      </div>

      <div className="flex flex-col items-start gap-4 w-3/5">
        <hr className="w-1/2 border-rishi-orange" />
        <hr className="w-1/5 border-rishi-green" />
      </div>
    </div>
  );
};

export default Divider;
