import RegisterUserForm from "./pages/RegisterUserForm";
import RegisterUserQuestions from "./pages/RegisterUserQuestions";
import RegisterUserRoleForm from "./pages/RegisterUserRoleForm";
import RegisterUserCategoryForm from "./pages/RegisterUserCategoryForm";

import "@fortawesome/fontawesome-free/css/all.css";

import QA from "./pages/Q&A";
import IntroPage from "./pages/IntroPage";
import ProfilePageLayout from "./layouts/ProfilePageLayout";

import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import ProfileArtistPage from "./pages/ProfileArtistPage";

import ChatBox from "./components/chatBox/chatBox.jsx";
import HomePageEntrepreneur from "./pages/homePageEntrepreneur.jsx";
import HomePageArtist from "./pages/homePageArtist.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import IntroPageLayout from "./layouts/IntroPageLayout.jsx";
import ProfilePageEntrepreneur from "./pages/ProfilePageEntrepreneur.jsx";
//import FilteredUsersPage from "./components/filteredUsersPage/filteredUsersPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<IntroPageLayout />}>
          <Route path="/" element={<IntroPage />} />
          <Route path="/QA" element={<QA />} />
        </Route>

        <Route element={<ProfilePageLayout />}>
          <Route path="/profile-artist" element={<ProfileArtistPage />} />
          <Route path="/homeArtist" element={<HomePageArtist />} />
          <Route path="/E" element={<HomePageEntrepreneur />} />
          <Route path="/chatbox" element={<ChatBox />} />
          <Route
            path="/ProfilePageEntrepreneur"
            element={<ProfilePageEntrepreneur />}
          />
          <Route path="/QA" element={<QA />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/register" element={<RegisterUserForm />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/register-questions" element={<RegisterUserQuestions />}>
            <Route index element={<RegisterUserRoleForm />} />
            <Route path="category" element={<RegisterUserCategoryForm />} />
          </Route>
        </Route>

        {/* <Route path="/category/:categoryName" element={<FilteredUsersPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
