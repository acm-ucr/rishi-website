import Member from "./Member";
import { boardMembers } from "@/data/staff";

const Board = () => {
  return (
    <div className="px-8 sm:px-12 lg:px-16">
      <div className="lg:grid lg:grid-rows-3 lg:grid-cols-4 lg:gap-y-4 grid grid-rows-6 grid-cols-2 gap-y-4 justify-items-center">
        {boardMembers.map((member, index) => (
          <div key={index}>
            <Member
              name={member.name}
              role={member.role}
              image={member.image}
              yearMajor={member.yearMajor}
              pronouns={member.pronouns}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
