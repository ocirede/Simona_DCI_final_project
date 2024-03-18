import { Outlet } from "react-router-dom";
import NavBarHomepage from "../components/navBarHomepage";
import ProfilePageEntrepreneur from "../pages/ProfilePageEntrepreneur";
import Footer from "./components/Footer";

export default function ProfilePageLayout() {
  return (
    <div>
      <NavBarHomepage />
      <Outlet />
      <Footer />
    </div>
  );
}
