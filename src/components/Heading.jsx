const Heading = ({ text }) => {
  return (
    <div className="flex items-center text-2xl font-medium flex-col">
      <div className="text-rishi-black">{text}</div>
      <div className="flex justify-center gap-1">
        <div className="rounded-full bg-rishi-green p-1"></div>
        <div className="rounded-full bg-rishi-orange p-1"></div>
        <div className="rounded-full bg-rishi-green p-1"></div>
      </div>
    </div>
  );
};

export default Heading;
