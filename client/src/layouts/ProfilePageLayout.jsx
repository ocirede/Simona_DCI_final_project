import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBarProfile from "./components/NavBarProfile";

export default function ProfilePageLayout() {
  return (
    <>
      <NavBarProfile />
      <Outlet />
      <Footer />
    </>
  );
}
