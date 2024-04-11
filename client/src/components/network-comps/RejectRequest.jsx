import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import ButtonLoading from "./ButtonLoading";

const RejectRequest = ({ senderId }) => {
  const { user, rejectRequest, response } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleRejectRequest = async () => {
    setIsLoading(true);
    try {
      await rejectRequest(user._id, senderId);
    } catch (error) {
      console.error("Error rejecting request:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {response ? (
        <>
          {isLoading ? (
            <ButtonLoading />
          ) : (
            <button
              type="button"
              className=" text-red-500 font-bold text-xl cursor-pointer"
              onClick={handleRejectRequest}
            >
              -
            </button>
          )}
        </>
      ) : (
        <ButtonLoading />
      )}
    </>
  );
};

export default RejectRequest;
