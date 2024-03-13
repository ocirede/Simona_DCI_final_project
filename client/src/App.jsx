import { Route, Routes } from "react-router-dom";
import "./index.css";
import NavBarHomepage from "./components/navBarHomepage";
import ChatBox from "./components/chatBox/chatBox.jsx";
import HomePageArtist from "./pages/homePageArtist/homePageArtist.jsx";
import HomePageEntrepreneur from "./pages/homePageEnterpeneur/homePageEntrepreneur.jsx";

function App() {
  return (
    <>
      <NavBarHomepage />
      <Routes>
        
        <Route path="/" element={<HomePageArtist />} />
        <Route path="/E" element={<HomePageEntrepreneur/>} />
        <Route path="/chatbox" element={<ChatBox />} />
      </Routes>
    </>
  );
}

export default App;
