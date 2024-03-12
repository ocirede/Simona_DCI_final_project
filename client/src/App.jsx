import "./index.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import ProfileArtist from "./pages/ProfileArtist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile-artist" element={<ProfileArtist />} />

      </Routes>
    </>
  );
}

export default App;
