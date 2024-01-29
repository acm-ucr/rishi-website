import Member from "./Member";

const Board = () => {
  const boardMembers = [
    { name: 'John Doe', role: 'President', image: 'path/to/image1.jpg', yearMajor: 'Senior / Computer Science', pronouns: 'he/him' },
    { name: 'Jane Doe', role: 'Vice President', image: 'path/to/image2.jpg', yearMajor: 'Junior / Business', pronouns: 'she/her' },
    { name: 'Bob Smith', role: 'Secretary', image: 'path/to/image3.jpg', yearMajor: 'Sophomore / Biology', pronouns: 'he/him' },
    { name: 'Alice Johnson', role: 'Treasurer', image: 'path/to/image4.jpg', yearMajor: 'Senior / Chemistry', pronouns: 'she/her' },
    { name: 'Charlie Brown', role: 'Member', image: 'path/to/image5.jpg', yearMajor: 'Freshman / Physics', pronouns: 'he/him' },
    { name: 'Emily Davis', role: 'Member', image: 'path/to/image6.jpg', yearMajor: 'Sophomore / Math', pronouns: 'she/her' },
    { name: 'Frank Miller', role: 'Member', image: 'path/to/image7.jpg', yearMajor: 'Junior / English', pronouns: 'he/him' },
    { name: 'Grace Lee', role: 'Member', image: 'path/to/image8.jpg', yearMajor: 'Senior / History', pronouns: 'she/her' },
    { name: 'Henry Wilson', role: 'Member', image: 'path/to/image9.jpg', yearMajor: 'Freshman / Philosophy', pronouns: 'he/him' },
    { name: 'Ivy Moore', role: 'Member', image: 'path/to/image10.jpg', yearMajor: 'Sophomore / Psychology', pronouns: 'she/her' },
    { name: 'Jack Taylor', role: 'Member', image: 'path/to/image11.jpg', yearMajor: 'Junior / Sociology', pronouns: 'he/him' },
    { name: 'Kathy Anderson', role: 'Member', image: 'path/to/image12.jpg', yearMajor: 'Senior / Political Science', pronouns: 'she/her' },
  ];

  return (
    <div className="px-8 sm:px-12 lg:px-16">
      <div className="w-full max-w-screen-xl mx-auto flex flex-wrap">
        {boardMembers.map((member, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 2xl:w-1/8 mb-6">
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