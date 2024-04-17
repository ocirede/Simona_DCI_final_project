import { Outlet } from "react-router-dom";
import NavBarHomepage from "../components/navBarHomepage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBarHome";

export default function HomePageLayout() {
  return (
    <>
      <NavBarHomepage />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}