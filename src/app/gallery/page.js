import Heading from "@/components/Heading";
import Options from "@/components/gallery/Options";

const Page = ({ params }) => {
  const handleClick = ({ tripName }) => {
    console.log("redirect to gallery/2014 (or whatever year)");
  };
  return (
    <>
      <Heading text="GALLERY" />
      <Options tripClick={handleClick} />
    </>
  );
};

export default Page;
