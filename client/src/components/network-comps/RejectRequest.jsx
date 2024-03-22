import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import ButtonLoading from "./ButtonLoading";

const RejectRquest = ({ senderId }) => {
  const { user, rejectRequest, response } = useContext(UserContext);

  return (
    <>
      {response ? (
        <button
          type="button"
          className="inline-block rounded-full bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-danger-3 transition duration-150 ease-in-out hover:bg-danger-accent-300 hover:shadow-danger-2 focus:bg-danger-accent-300 focus:shadow-danger-2 focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-danger-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          onClick={()=>{rejectRequest(user._id, senderId)}}
        >
          Reject
        </button>
      ) : (
        <ButtonLoading />
      )}
    </>
  );
};

export default RejectRquest;
