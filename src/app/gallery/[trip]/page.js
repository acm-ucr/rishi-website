import Heading from "@/components/Heading";
import { india2014, india2016, india2019, pad2022 } from "@/data/gallery";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allTrips = ["2014", "2016", "2019", "2022"];

  return allTrips.map((hello) => ({ trip: hello }));
}

const Page = ({ params }) => {
  const trips = {
    2014: india2014,
    2016: india2016,
    2019: india2019,
    2022: pad2022,
  };

  if (trips.hasOwnProperty(params.trip)) {
    return (
      <div className="">
        <div className=" pt-12">
          <Heading text={`INDIA TRIP ${params.trip}`} />
        </div>
        <div className="grid grid-cols-3 grid-rows-6 gap-10 justify-center  p-28 ">
          {trips[params.trip].map((trip, index) => {
            return (
              <div key={index}>
                <Image alt="gallery" src={trip} />
                <p>{params.trips}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return notFound();
  }
};

export default Page;
