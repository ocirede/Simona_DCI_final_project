const TeamMember = ({ name, linkedinUrl, profileImg }) => {
  return (
    <div className="items-center lg:mb-10 flex w-full justify-between">
      <div className="p-2">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p>Something about the member</p>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 mb-2">
          <i className="fa-brands fa-linkedin inline-block text-[32px] mt-2"></i>
        </a>
      </div> 
      <div style={{ backgroundImage: `url(${profileImg})` }} className="w-56 h-56 bg-cover bg-center rounded-[30px]">
      </div>
    </div>
  );
};

const TeamMemberTwo = ({ name, linkedinUrl, profileImg }) => {
    return (
      <div className="items-center lg:mb-10 flex w-full">
        <div style={{ backgroundImage: `url(${profileImg})` }} className="w-56 h-56 bg-cover bg-center rounded-[30px]">
        </div>
        <div className="p-2">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p>Something about the member</p>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 mb-2">
            <i className="fa-brands fa-linkedin inline-block text-[32px] mt-2"></i>
          </a>
        </div>
      </div>
    );
  };

export default function MeetOurTeam() {
  return (
      <div className="w-full">
        <TeamMember
          name="Issa Georges"
          profileImg="/issa.jpg"
          linkedinUrl="https://www.linkedin.com/in/john-doe"
        />
        <TeamMemberTwo
          name="Federico Diaferia"
          profileImg="/federico.jpg"
          linkedinUrl="https://www.linkedin.com/in/jane-smith"
        />
        <TeamMember
          name="Kostas Bouzianis"
          profileImg="/kostas.jpg"
          linkedinUrl="https://www.linkedin.com/in/jane-smith"
        />
        <TeamMemberTwo
          name="Tyhe Ferenc"
          profileImg="/tyhe.jpeg"
          linkedinUrl="https://www.linkedin.com/in/jane-smith"
        />
      </div>
  );
}

