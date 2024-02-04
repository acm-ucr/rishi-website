"use client";
import Heading from "@/components/Heading";
import Options from "@/components/gallery/Options";
import { useRouter } from "next/navigation";

const Droute = () => {
  const router = useRouter();
  const getYear = (tripName) => {
    console.log(tripName);
    router.push(`gallery/${tripName}/`);
  };
  return (
    <>
      <Heading text="GALLERY" />
      <Options tripClick={getYear} />
    </>
  );
};

export default Droute;
