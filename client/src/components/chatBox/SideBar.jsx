import React, { useEffect, useState } from "react";

function Sidebar({ connection, notification }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (notification && notification.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [notification]);

  return (
    <>
      {isOpen && (
        <div
          className={`fixed top-1/2 right-0 z-50 w-1/4 bg-retroRed text-white rounded-lg p-4 transition-transform duration-300 ease-in-out ${
            isOpen ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          {notification.map((notif, index) => (
            <div key={index}>
              {connection.map((conn) => {
                if (conn._id === notif.senderId) {
                  return (
                    <div key={conn._id} className="relative flex items-center justify-center ">
                     
                      <p>
                        {notif.message} from {conn.address.firstname}{" "}
                        {conn.address.lastname}
                      </p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Sidebar;
