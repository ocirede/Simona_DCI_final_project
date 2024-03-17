import "./index.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignInPage from "./pages/SignInPage";
import ProfileArtistPage from "./pages/ProfileArtistPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        {/* :userId to be added*/}
        <Route path="/profile-artist" element={<ProfileArtistPage />} />

      </Routes>
    </>
  );
}

export default App;
