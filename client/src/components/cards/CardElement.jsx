import SendCancelRequest from "../network-comps/SendCancelRequest";
import PlayfulTag from "../cards/PlayfulTag";
import { Link } from 'react-router-dom';

export default function CardElement({ address, role, categories, profileImage, profileBackground, userId, _id }) {

  if (!address || !categories) {
    return null;
  }

  const { firstname, lastname } = address;

  const profilePageUrl = role === "artist" ? `/profile-artist/${_id}` : `/ProfilePageEntrepreneur/${_id}`;

  return (
    <div
      className="w-[220px] h-[390px] rounded-lg overflow-hidden shadow-lg bg-white "
      style={{ minWidth: "240px" }}
    > 
      <Link to={profilePageUrl}>
        <div className={`bg-${profileBackground ? 'cover' : 'gray-400'} h-[100px] flex items-center justify-center relative`} style={{ backgroundImage: `url('${profileBackground}')` }}>
          <div className="w-[120px] h-[120px] relative">
            <img
              className="w-full h-full rounded-full contain bg-gray-700 border-4 border-gray-800 bg-center absolute top-12"
              style={{
                backgroundImage: `url('${profileImage}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            />
          </div>
        </div>
      </Link>
      <div className="px-4 py-4 text-center">
        <div className="font-bold text-xl uppercase mb-2 mt-16">{firstname} {lastname}</div>
        <p className="text-gray-700 text-base mb-2">{role}</p>
        <SendCancelRequest receiverId={userId} />
      </div>
      <div className="pl-6 pr-6 pb-4 flex flex-wrap gap-2 justify-center text-center">
        {categories.map((category, index) => (
          <PlayfulTag
            key={index}
            text={category}
          />
        ))}
      </div>
    </div>
  );
}






