import PlayfulTagIntro from "./PlayfulTagIntro";


export default function CardElementIntro({ address, role, categories, profileImage ,_id, profileBackground }) {

  if (!address || !categories) {
    return null; 
}

const { firstname, lastname } = address;

  return (
    <div
      className="lg:w-[220px] lg:h-[390px] w-[150px] h-[260px] rounded-[25px] overflow-hidden shadow-lg bg-white border-1 border-black border border-b-8 border-r-8">
      <div className="bg-gray-300 lg:h-[100px] h-[70px] flex items-center justify-center relative bg-retroBlue">
        <div className={`bg-${profileBackground ? 'cover' : 'gray-400'} w-full lg:h-[100px] h-[70px] relative`} style={{ backgroundImage: `url('${profileBackground}')` }}>
        <div className="w-[120px] h-[120px] relative">
          <img
            className="lg:w-full lg:h-full w-20 h-20 rounded-full bg-gray-700 border-2 border-white bg-center absolute top-7 lg:top-10 left-[26%] lg:left-[40%]"
            style={{
              backgroundImage: `url('${profileImage}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
          </div>
        </div>
      </div>
      <div className="px-4 py-4 text-center">
        <div className="font-bold text-[12px] lg:text-xl uppercase lg:mb-2 lg:mt-16 mt-8">{address?.firstname} {address?.lastname}</div>
      </div>
      <div className="pr-4 pl-4 lg:pl-6 lg:pr-6 pb-4 flex flex-wrap gap-2 justify-center text-center">
        {categories?.map((category, index) => (
          <PlayfulTagIntro
            key={index}
            text={category}
          />
        ))}
      </div>
    </div>
  );
}