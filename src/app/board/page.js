import Heading from "@/components/Heading";
import Board from "@/components/board/Board";

const Page = () => {
  return (
    <div>
      <div className="pt-20"></div>
      <Heading text="BOARD MEMBERS" />
      <Board />
    </div>
  );
};

export default Page;
