import SendCancelRequest from "../network-comps/SendCancelRequest";
import PlayfulTag from "../cards/PlayfulTag";
export default function CardElement({
  address,
  role,
  categories,
  profileImage,
  _id,
}) {
  if (!address || !categories) {
    return null;
  }
  const { firstname, lastname } = address;
  return (
    <div
      className="w-[220px] h-[390px] rounded-lg overflow-hidden shadow-lg bg-white "
      style={{ minWidth: "240px" }}
    >
      <div className="bg-retroBlue h-[100px] flex items-center justify-center relative">
        <div className="w-[120px] h-[120px] relative">
          <img
            className="w-full h-full rounded-full bg-gray-700 border-4 border-gray-800 bg-center absolute top-12"
            style={{
              backgroundImage: `url('${profileImage}')`,
              backgroundPosition: "center",
            }}
            alt="Profile"
          />
        </div>
      </div>
      <div className="px-4 py-4 text-center">
        <div className="font-bold text-xl uppercase mb-2 mt-16">
          {firstname} {lastname}
        </div>
        <p className="text-gray-700 text-base mb-2">{role}</p>
        <SendCancelRequest receiverId={_id} />
      </div>
      <div className="pl-6 pr-6 pb-4 flex flex-wrap gap-2 justify-center text-center">
        {categories?.map((category, index) => (
          <PlayfulTag
            key={index}
            className="bg-retroBlue rounded-full px-3 py-1 text-sm text-white"
          >
            {category}
          </PlayfulTag>
        ))}
      </div>
    </div>
  );
}
