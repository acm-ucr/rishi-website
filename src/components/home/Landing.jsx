import Image from "next/image";
import logo from "@/public/prishi-logo.webp";
import landing from "@/public/landing.webp";
import Button from "@/components/Button";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex h-screen w-screen ">
      <div className="flex flex-col w-7/12 justify-center gap-3 pl-12">
        <div className="flex justify-center">
          <Image src={logo} alt="rishi-logo" className="w-24 h-auto" />
        </div>

        <div className="flex justify-center">
          <div className="font-urbanist font-extrabold text-rishi-black text-5xl">
            Project RISHI at UCR
          </div>
        </div>

        <div className="flex justify-center">
          <div className="font-normal text-2xl text-rishi-green text-center">
            Dedicated to promoting sustainable
            <p className="break-before-column">
              growth in the small village Ghangar, India
            </p>
          </div>
        </div>

        <div className="flex justify-center py-3">
          <Link
            href="https://www.instagram.com/ucrprishi/?hl=en"
            target="_blank"
          >
            <Button buttonText={"Join Us"} />
          </Link>
        </div>
      </div>

      <div className="flex relative w-screen -top-24 -right-24">
        <div className="flex absolute outline outline-rishi-orange outline-3 rounded-full">
          <Image
            src={landing}
            alt="landing-page-photo"
            className=" outline outline-3 rounded-full p-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
