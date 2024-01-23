const Mission = () => {
  return (
    <div>
      Mission
      <div className="flex">
        <div className="bg-rishi-orange w-1/2 flex flex-col gap-6 p-10">
          <div className="text-left font-bold text-rishi-white text-4xl">
            Objective
          </div>

          <div className="text-rishi-white text-2xl leading-loose">
            {" "}
            Through our fundraising events like Holi and Garba, we have had the
            opportunity to support this amazing village in Ghangar, India. The
            locals living there are strong, hardworking, and high-spirited.
            Together, we will continue to put efforts towards strengthening this
            community & we thank you all for participating in our events thus
            far!{" "}
          </div>
        </div>

        <div className="bg-rishi-green w-1/2 flex flex-col gap-6 p-10">
          <div className="text-left font-bold text-rishi-white text-4xl">
            UCR Chapter
          </div>
          <div className="text-rishi-white text-2xl leading-loose">
            {" "}
            At the University of California, Riverside, we are committed to
            supporting the village of Ghangar in Uttarakhand, India. We take a
            holistic approach to supporting our village by focusing on improving
            sustainability, quality of life, & women’s empowerment.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
