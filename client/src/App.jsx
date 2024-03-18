import "./index.css";

import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignInPage from "./pages/SignInPage";
import ProfileArtistPage from "./pages/ProfileArtistPage";

import NavBarHomepage from "./components/navBarHomepage";
import ChatBox from "./components/chatBox/chatBox.jsx";
import HomePageEntrepreneur from "./pages/homePageEntrepreneur.jsx";
import HomePageArtist from "./pages/homePageArtist.jsx";
//import FilteredUsersPage from "./components/filteredUsersPage/filteredUsersPage.jsx";


function App() {
  return (
    <>
 <NavBarHomepage />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        {/* :userId to be added*/}
        <Route path="/profile-artist" element={<ProfileArtistPage />} />


     
      
        <Route path="/" element={<HomePageArtist />} />
        <Route path="/E" element={<HomePageEntrepreneur />} />
        <Route path="/chatbox" element={<ChatBox />} />
        //<Route path="/category/:categoryName" element={<FilteredUsersPage />} />

      </Routes>
    </>
  );
}

export default App;
