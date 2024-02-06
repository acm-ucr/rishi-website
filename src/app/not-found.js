import Button from "@/components/Button.jsx";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex-1 justify-center items-center flex flex-col">
      <div className="flex text-rishi-green text-9xl font-bold py-2">404</div>
      <div className="flex text-rishi-black font-bold text-4xl py-2">
        Page Not Found
      </div>

      <Link href="/">
        <div className="flex py-4">
          <Button buttonText={"Back to Home"} />
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
