import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import ButtonLoading from "./ButtonLoading";

const SendCancelRequest = ({ receiverId }) => {
  const { user, sendOrCancelRequest, response } = useContext(UserContext);
  const [isRequested, setIsRequested] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    setIsRequested(user?.sentRequests?.some((item) => item._id === receiverId));
    setIsConnected(user?.connections?.some((item) => item._id === receiverId));
    setLogged(user?._id === receiverId);
  }, [user, receiverId]);

  const handleSendOrCancelRequest = async () => {
    setIsLoading(true);
    try {
      await sendOrCancelRequest(user._id, receiverId);
    } catch (error) {
      console.error("Error sending/canceling request:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {response ? (
        <>
          {isConnected ? (
            <div className="text-green-600">
              <p>
                <i className="fa-solid fa-circle-check"></i> Connected
              </p>
            </div>
          ) : (
            <div>
              {logged ? (
                <button className=" text-sm uppercase bg-transparent"></button>
              ) : (
                <>
                  {isLoading ? (
                    <ButtonLoading />
                  ) : (
                    <>
                      {isRequested ? (
                        <button
                          type="button"
                          className="text-red-600 text-sm uppercase"
                          onClick={handleSendOrCancelRequest}
                        >
                          Cancel
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="text-sm uppercase"
                          onClick={handleSendOrCancelRequest}
                        >
                          <i className="fa-solid fa-plus"></i> Connect
                        </button>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </>
      ) : (
        <ButtonLoading />
      )}
    </>
  );
};

export default SendCancelRequest;
