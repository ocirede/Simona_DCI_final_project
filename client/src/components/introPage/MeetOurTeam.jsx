import { useTranslation } from "react-i18next";


const TeamMember = ({ name, linkedinUrl, profileImg, about }) => {
  const { t } = useTranslation()
  return (
    <div className="items-center flex w-full justify-between xl:block xl:w-[260px]">
      <div className="p-2 xl:w-[260px] w-[250px] md:w-[600px]">
        <h3 className="text-lg font-semibold mb-2 md:text-[32px]">{name}</h3>
        <p className="md:text-[20px]">{t(about)}</p>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 mb-2">
          <i className="fa-brands fa-linkedin inline-block text-[32px] mt-2"></i>
        </a>
      </div> 
      <div style={{ backgroundImage: `url(${profileImg})` }} className="w-56 h-56 md:w-64 md:h-64 xl:w-[260px] bg-cover bg-center rounded-[30px]">
      </div>
    </div>
  );
};

const TeamMemberTwo = ({ name, linkedinUrl, profileImg, about }) => {
  const { t } = useTranslation()
    return (
      <div className="items-center flex w-full xl:block xl:w-[260px]">
        <div style={{ backgroundImage: `url(${profileImg})` }} className="w-56 h-56 bg-cover bg-center rounded-[30px] md:w-64 md:h-64 xl:w-[260px]">
        </div>
        <div className="p-2 xl:w-[260px] w-[250px]  md:w-[600px]">
          <h3 className="text-lg md:text-[32px] font-semibold mb-2">{name}</h3>
          <p className="md:text-[20px]">{t(about)}</p>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 mb-2">
            <i className="fa-brands fa-linkedin inline-block text-[32px] mt-2"></i>
          </a>
        </div>
      </div>
    );
  };

export default function MeetOurTeam() {
  return (
      <div className="w-full xl:flex lg:justify-between p-4">
        <TeamMember
          name="Issa Georges"
          profileImg="/issa.jpg"
          linkedinUrl="https://www.linkedin.com/in/issa-georges-64070199/"
          about="textNine"
        />
        <TeamMemberTwo
          name="Federico Diaferia"
          profileImg="/federico.jpg"
          linkedinUrl="https://www.linkedin.com/in/federico-diaferia-902876225/"
          about="textTen"
        />
        <TeamMember
          name="Kostas Bouzianis"
          profileImg="/kostas.jpg"
          linkedinUrl="https://www.linkedin.com/in/kostas-bouzianis/"
          about="textEleven"
        />
        <TeamMemberTwo
          name="Tyhe Ferenc"
          profileImg="/tyhe.jpeg"
          linkedinUrl="https://www.linkedin.com/in/tyhe-ferenc-1382842a0/"
          about="textTwelve"
        />
      </div>
  );
}

