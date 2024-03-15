import { motion } from "framer-motion";

const Options = ({ tripClick }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center py-10 gap-y-2 w-1/2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => tripClick("2014")}
          className="bg-rishi-orange text-rishi-white text-3xl font-medium w-full py-8 no-underline"
        >
          INDIA TRIP 2014
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => tripClick("2016")}
          className="bg-rishi-green text-rishi-white text-3xl font-medium w-full py-8 no-underline"
        >
          INDIA TRIP 2016
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => tripClick("2019")}
          className="bg-rishi-orange text-rishi-white text-3xl font-medium w-full py-8 no-underline"
        >
          INDIA TRIP 2019
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => tripClick("2022")}
          className="bg-rishi-green text-rishi-white text-3xl font-medium w-full py-8 no-underline"
        >
          PAD SHIPMENT 2022
        </motion.button>
      </div>
    </div>
  );
};

export default Options;
