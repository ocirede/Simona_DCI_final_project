import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import ButtonLoading from "./ButtonLoading";

const AcceptRequest = ({ senderId }) => {
  const { user, acceptRequest, response } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleAcceptRequest = async () => {
    setIsLoading(true);
    try {
      await acceptRequest(user._id, senderId);
    } catch (error) {
      console.error("Error accepting request:", error);
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
          onClick={handleAcceptRequest}
        >
          +
        </button>
      )}
    </>
  );
};

export default AcceptRequest;
