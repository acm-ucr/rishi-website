import Heading from "@/components/Heading";
import Carousel from "@/components/home/Carousel";
import Divider from "@/components/home/Divider";
import Landing from "@/components/home/Landing";
import Mission from "@/components/home/Mission";
import Socials from "@/components/home/Socials";

const Home = () => {
  return (
    <>
      <Landing />
      <Heading text="ABOUT US" />
      <div className="py-3" />
      <Mission />
      <div className="py-5" />
      <Carousel />
      <div className="py-5" />
      <Divider />
      <div className="py-5" />
      <Heading text="JOIN US" />
      <div className="py-3" />
      <Socials />
    </>
  );
};

export default Home;
