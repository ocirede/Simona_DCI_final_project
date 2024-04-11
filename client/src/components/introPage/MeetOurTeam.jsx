const TeamMember = ({ name, linkedinUrl, profileImg, about }) => {
  return (
    <div className="items-center flex w-full justify-between lg:block lg:w-[260px]">
      <div className="p-2 lg:w-[260px]">
        <h3 className="text-lg font-semibold mb-2 md:text-[32px]">{name}</h3>
        <p className="md:text-[20px]">{about}</p>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 mb-2">
          <i className="fa-brands fa-linkedin inline-block text-[32px] mt-2"></i>
        </a>
      </div> 
      <div style={{ backgroundImage: `url(${profileImg})` }} className="w-56 h-56 md:w-64 md:h-64 lg:w-[260px] bg-cover bg-center rounded-[30px]">
      </div>
    </div>
  );
};

const TeamMemberTwo = ({ name, linkedinUrl, profileImg, about }) => {
    return (
      <div className="items-center flex w-full lg:block lg:w-[260px]">
        <div style={{ backgroundImage: `url(${profileImg})` }} className="w-56 h-56 bg-cover bg-center rounded-[30px] md:w-64 md:h-64 lg:w-[260px]">
        </div>
        <div className="p-2 lg:w-[260px]">
          <h3 className="text-lg md:text-[32px] font-semibold mb-2">{name}</h3>
          <p className="md:text-[20px]">{about}</p>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 mb-2">
            <i className="fa-brands fa-linkedin inline-block text-[32px] mt-2"></i>
          </a>
        </div>
      </div>
    );
  };

export default function MeetOurTeam() {
  return (
      <div className="w-full lg:flex lg:justify-between">
        <TeamMember
          name="Issa Georges"
          profileImg="/issa.jpg"
          linkedinUrl="https://www.linkedin.com/in/john-doe"
          about="Issa radiates warmth and hospitality, always ensuring everyone feels welcome, and he will always surprise you with a delicious dish of food!"
        />
        <TeamMemberTwo
          name="Federico Diaferia"
          profileImg="/federico.jpg"
          linkedinUrl="https://www.linkedin.com/in/jane-smith"
          about="Fede is the life of the party, full of energy and wit. He is not only a skilled coder and but a very good storyteller!"
        />
        <TeamMember
          name="Kostas Bouzianis"
          profileImg="/kostas.jpg"
          linkedinUrl="https://www.linkedin.com/in/jane-smith"
          about="Kostas and coding is going together, vs-code feels like his home. His love for technology in combination with the outdoors inspires him to find balance and harmony."
        />
        <TeamMemberTwo
          name="Tyhe Ferenc"
          profileImg="/tyhe.jpeg"
          linkedinUrl="https://www.linkedin.com/in/jane-smith"
          about="Tyhe's our alien coming out of this world, constantly surprising us with her alien-like creativity, whether its her coding solutions, her writing skills or even her poems."
        />
      </div>
  );
}

