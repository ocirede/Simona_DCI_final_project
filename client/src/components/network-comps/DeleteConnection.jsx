import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import ButtonLoading from "./ButtonLoading";

const DeleteConnection = ({ connectionId }) => {
  const { user, deleteConnection } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteConnection = async () => {
    setIsLoading(true);
    try {
      await deleteConnection(user._id, connectionId);
    } catch (error) {
      console.error("Error deleting connection:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <ButtonLoading />
      ) : (
        <button
          type="button"
          className=" text-red-500 font-bold text-xl cursor-pointer"
          onClick={handleDeleteConnection}
        >
          -
        </button>
      )}
    </>
  );
};

export default DeleteConnection;
