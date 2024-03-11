import { Route, Routes } from "react-router-dom";
import "./index.css";
import RegisterUserForm from "./pages/RegisterUserForm";
import RegisterUserRole from "./pages/RegisterUserRole";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register-role" element={<RegisterUserRole />} />
        <Route path="/register" element={<RegisterUserForm />} />
      </Routes>
    </>
  );
}

export default App;
