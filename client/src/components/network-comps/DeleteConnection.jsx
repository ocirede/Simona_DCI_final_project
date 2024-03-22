import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import ButtonLoading from "./ButtonLoading";

const DeleteConnection = ({ connectionId }) => {
  const { user, deleteConnection, response } = useContext(UserContext);

  return (
    <>
      {response ? (
        <button
          type="button"
          className="inline-block rounded-full bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          onClick={() => {
            deleteConnection(user._id, connectionId);
          }}
        >
          Delete contact
        </button>
      ) : (
        <ButtonLoading />
      )}
    </>
  );
};

export default DeleteConnection;
