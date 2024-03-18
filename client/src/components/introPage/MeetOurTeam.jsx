const TeamMember = ({ name, linkedinUrl }) => {
  return (
    <div className="rounded-l-full bg-gray-400 w-full p-6 flex flex-col items-center lg:mb-10">
      {/* image will be added */}
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p>Something about the member</p>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 mb-2">
        <i className="fa-brands fa-linkedin inline-block mr-2"></i>
      </a>
    </div>
  );
};

const TeamMemberTwo = ({ name, linkedinUrl }) => {
    return (
      <div className="rounded-r-full bg-gray-400 w-full p-6 flex flex-col items-center lg:mb-10">
        {/* image will be added */}
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p>Something about the member</p>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 mb-2">
          <i className="fa-brands fa-linkedin inline-block mr-2"></i>
        </a>
      </div>
    );
  };

export default function MeetOurTeam() {
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:block ">
        <TeamMember
          name="Issa Georges"
          imageUrl="issa.jpg"
          linkedinUrl="https://www.linkedin.com/in/john-doe"
        />
        <TeamMemberTwo
          name="Federico Diaferia"
          imageUrl="fede.jpg"
          linkedinUrl="https://www.linkedin.com/in/jane-smith"
        />
        <TeamMember
          name="Kostas Bouzianis"
          imageUrl="kostas.jpg"
          linkedinUrl="https://www.linkedin.com/in/jane-smith"
        />
        <TeamMemberTwo
          name="Tyhe Ferenc"
          imageUrl="tyhe.jpg"
          linkedinUrl="https://www.linkedin.com/in/jane-smith"
        />
      </div>
    </div>
  );
}

