import Heading from "@/components/Heading";
import Carousel from "@/components/home/Carousel";
import Divider from "@/components/home/Divider";
import Landing from "@/components/home/Landing";
import Mission from "@/components/home/Mission";
import Socials from "@/components/home/Socials";
import Options from "@/components/gallery/Options";

const Home = () => {
  return (
    <>
      <Landing />
      <Heading />
      <Mission />
      <Carousel />
      <Divider />
      <Heading />
      <Socials />
      <Options />
    </>
  );
};

export default Home;
