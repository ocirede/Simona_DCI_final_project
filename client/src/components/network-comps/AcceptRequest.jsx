import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import ButtonLoading from "./ButtonLoading";

const AcceptRequest = ({ senderId }) => {
  const { user, acceptRequest, response } = useContext(UserContext);

  return (
    <>
      {response ? (
        <button
          type="button"
          className="inline-block rounded-full bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
          onClick={() => acceptRequest(user._id, senderId)}
        >
          Accept
        </button>
      ) : (
        <ButtonLoading />
      )}
    </>
  );
};

export default AcceptRequest;
