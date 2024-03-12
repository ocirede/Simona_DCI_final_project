import { Route, Routes } from "react-router-dom";

import "./index.css";
import '@fortawesome/fontawesome-free/css/all.css';

import QA from "./pages/Q&A";
import ProfilePageEntrepreneur from "./pages/ProfilePageEntrepreneur";
import ProfilePageLayout from "./layouts/ProfilePageLayout";


function App() {
  return (
    <>
      <ProfilePageLayout />
      <Routes>
        <Route path="/QA" element={<QA />} />
        <Route path="/ProfilePageEntrepreneur" element={<ProfilePageEntrepreneur />} />
      </Routes>
    </>
  );
}

export default App;
