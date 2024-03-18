


import RegisterUserForm from "./pages/RegisterUserForm";
import RegisterUserQuestions from "./pages/RegisterUserQuestions";
import RegisterUserRoleForm from "./pages/RegisterUserRoleForm";
import RegisterUserCategoryForm from "./pages/RegisterUserCategoryForm";

import '@fortawesome/fontawesome-free/css/all.css';

import QA from "./pages/Q&A";
import IntroPage from "./pages/IntroPage";
import ProfilePageLayout from "./layouts/ProfilePageLayout"

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
          
  <Route path="/register-questions" element={<RegisterUserQuestions />}>
          <Route index element={<RegisterUserRoleForm />} />
          <Route path="category" element={<RegisterUserCategoryForm />} />
        </Route>
        <Route path="/register" element={<RegisterUserForm />} />

      <Route path="/QA" element={<QA />} />
        <Route path="/ProfilePageEntrepreneur" element={<ProfilePageLayout />} />
        <Route path="/IntroPage" element={<IntroPage />} />
      
        <Route path="/" element={<HomePageArtist />} />
        <Route path="/E" element={<HomePageEntrepreneur />} />
        <Route path="/chatbox" element={<ChatBox />} />
        //<Route path="/category/:categoryName" element={<FilteredUsersPage />} />



      </Routes>
    </>
  );
}

export default App;
