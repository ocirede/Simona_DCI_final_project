import SendCancelRequest from "../network-comps/SendCancelRequest";
import PlayfulTag from "../cards/PlayfulTag";

import { Link } from 'react-router-dom';

export default function CardElement({ address, role, categories, profileImage,profileBackground, userId, _id }) {
  if (!address || !categories) {
    return null;
  }

  const { firstname, lastname } = address;
  const profilePageUrl = role === "artist" ? `/profile-artist/${_id}` : `/ProfilePageEntrepreneur/${_id}`;

  return (
    <div
      className="lg:w-[220px] w-[150px] h-[370px] rounded-[25px] overflow-hidden shadow-lg bg-white border-1 border-black border border-b-8 border-r-8"
      style={{ minWidth: "240px" }}

    > 
      <Link to={profilePageUrl}>
        <div className={`bg-${profileBackground ? 'cover' : 'gray-400'} h-[100px] flex items-center justify-center relative`} style={{ backgroundImage: `url('${profileBackground}')` }}>
          <div className="w-[120px] h-[120px] relative">
            <img
              className="w-full h-full rounded-full contain bg-gray-700 border-4 border-white bg-center absolute top-12"
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
        <SendCancelRequest receiverId={_id} />
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
