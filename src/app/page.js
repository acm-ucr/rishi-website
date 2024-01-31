import Heading from "@/components/Heading";
import Carousel from "@/components/home/Carousel";
import Divider from "@/components/home/Divider";
import Landing from "@/components/home/Landing";
import Mission from "@/components/home/Mission";
import Socials from "@/components/home/Socials";
import Button from "@/components/Button";
import About from "@/components/about/About";

const Home = () => {
  return (
    <>
      <Landing />
      <Heading text="ABOUT US" />
      <Mission />
      <div className="py-4" />
      <Carousel />
      <Divider />
      <Heading text="JOIN US" />
      <Socials />
      <Button />
      <About />
    </>
  );
};

export default Home;
