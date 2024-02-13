import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const ToolBar = ({ label, handleDate }) => {
  return (
    <div>
      <span className="flex flex-row h-full sm:w-1/6 w-full justify-around">
        <button className="w-auto">
          <GoArrowLeft
            className="rishi-black w-6 h-6 sm:w-full sm:h-full"
            onClick={() => handleDate("PREV")}
          />
        </button>
        <div className="items-center flex flex-row justify-center h-full text-2xl font-bold text-rishi-orange">
          {label}
        </div>
        <button className="w-auto">
          <GoArrowRight
            className="rishi-black w-6 h-6 sm:w-full sm:h-full"
            onClick={() => handleDate("NEXT")}
          />
        </button>
      </span>
    </div>
  );
};

export default ToolBar;
