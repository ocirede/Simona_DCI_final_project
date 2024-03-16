import { Route, Routes } from "react-router-dom";

import "./index.css";
import '@fortawesome/fontawesome-free/css/all.css';

import QA from "./pages/Q&A";
import IntroPage from "./pages/IntroPage";
import ProfilePageLayout from "./layouts/ProfilePageLayout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/QA" element={<QA />} />
        <Route path="/ProfilePageEntrepreneur" element={<ProfilePageLayout />} />
        <Route path="/IntroPage" element={<IntroPage />} />
      </Routes>
    </>
  );
}

export default App;
