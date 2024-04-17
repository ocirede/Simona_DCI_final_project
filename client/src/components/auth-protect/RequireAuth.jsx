import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/sign-in", { replace: true });
    }
  }, []);

  return children;
};

export default RequireAuth;

/* Example how to protect an element 

if this is the original route:
<Route path="/profile-artist" element={<ProfileArtistPage />} /> 

you have to import first the component and then wrap yout element:

import RequireAuth from "./components/auth-protect/RequireAuth.jsx";

<Route
    path="/profile-artist"
    element={<RequireAuth><ProfileArtistPage /></RequireAuth>}
  />

This will prevent the user to access this element if he is not logged in, or if he clicks
any link that directs to that page, he will be redirected to the sign in page.

*/
