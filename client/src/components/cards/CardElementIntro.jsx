import PlayfulTag from "../cards/PlayfulTag"

export default function CardElementIntro({ address, role, categories, profileImage ,_id }) {

  if (!address || !categories) {
    return null; 
}

const { firstname, lastname } = address;

  return (
    <div
      className="lg:w-[220px] lg:h-[390px] w-[150px] h-[210px] rounded-lg overflow-hidden shadow-lg bg-white border-1 border-black border">
      <div className="bg-gray-300 lg:h-[100px] h-[70px] flex items-center justify-center relative bg-retroBlue">
        <div className="w-[120px] h-[120px] relative">
          <img
            className="lg:w-full lg:h-full w-20 h-20 rounded-full bg-gray-700 border-2 border-gray-800 bg-center absolute top-14 left-5"
            style={{
              backgroundImage: `url('${profileImage}')`,
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
      <div className="px-4 py-4 text-center">
        <div className="font-bold text-[12px] lg:text-xl uppercase lg:mb-2 lg:mt-16 mt-8">{address?.firstname} {address?.lastname}</div>
        <p className="text-[11px] text-gray-700 text-base lg:mb-2">{role}</p>
      </div>
      <div className="pl-6 pr-6 pb-4 flex flex-wrap gap-2 justify-center text-center">
        {categories?.map((category, index) => (
          <PlayfulTag
            key={index}
            text={category}
          />
        ))}
      </div>
    </div>
  );
}