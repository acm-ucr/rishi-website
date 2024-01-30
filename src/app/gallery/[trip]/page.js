import { india2014, india2016 } from "@/data/gallery";
import Image from "next/image";
import { redirect } from "next/navigation";

const Page = ({ params }) => {
  const trips = {
    2014: india2014,
    2016: india2016,
  };

  if (!trips.hasOwnProperty(params.trip)) {
    return (
      <div className="grid grid-cols-3 grid-rows-6">
        {trips[params.trip].map((trip, index) => {
          return (
            <div key={index}>
              <Image alt="gallery" src={trip} />
            </div>
          );
        })}
      </div>
    );
  } else {
    redirect("/404");
  }
};

export default Page;
