import { Outlet } from "react-router-dom";
import NavBarHomepage from "../components/navBarHomepage";
import Footer from "./components/Footer";

export default function HomePageLayout() {
  return (
    <>
      <NavBarHomepage />
      <Outlet />
      <Footer />
    </>
  );
}