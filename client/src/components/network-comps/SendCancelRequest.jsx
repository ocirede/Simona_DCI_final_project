import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import ButtonLoading from "./ButtonLoading";

const SendCancelRequest = ({ receiverId }) => {
  const { user, sendOrCancelRequest, response } = useContext(UserContext);
  const [isRequested, setIsRequested] = useState(false);

  useEffect(() => {
    setIsRequested(user?.sentRequests.some((item) => item._id === receiverId));
  }, [user, receiverId]);

  return (
    <>
      {response ? (
        <div>
          {isRequested ? (
            <button
              type="button"
              className="inline-block rounded-full bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              onClick={() => sendOrCancelRequest(user._id, receiverId)}
            >
              Cancel
            </button>
          ) : (
            <button
              type="button"
              className="inline-block rounded-full bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              onClick={() => sendOrCancelRequest(user._id, receiverId)}
            >
              Send Request
            </button>
          )}
        </div>
      ) : (
        <ButtonLoading />
      )}
    </>
  );
};

export default SendCancelRequest;
