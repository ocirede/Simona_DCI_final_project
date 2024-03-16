import { Route, Routes } from "react-router-dom";
import "./index.css";
import NavBarHomepage from "./components/navBarHomepage";
import ChatBox from "./components/chatBox/chatBox.jsx";
import HomePageEntrepreneur from "./pages/homePageEntrepreneur.jsx";
import HomePageArtist from "./pages/homePageArtist.jsx";
import FilteredUsersPage from "./components/filteredUsersPage/filteredUsersPage.jsx";

function App() {
  return (
    <>
      <NavBarHomepage />
      <Routes>
        <Route path="/" element={<HomePageArtist />} />
        <Route path="/E" element={<HomePageEntrepreneur />} />
        <Route path="/chatbox" element={<ChatBox />} />
        <Route path="/category/:categoryName" element={<FilteredUsersPage />} />
      </Routes>
    </>
  );
}

export default App;
