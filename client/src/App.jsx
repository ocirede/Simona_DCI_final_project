import { Route, Routes } from "react-router-dom";
import "./index.css";
import RegisterUserForm from "./pages/RegisterUserForm";
import RegisterUserQuestions from "./pages/RegisterUserQuestions";
import RegisterUserRoleForm from "./pages/RegisterUserRoleForm";
import RegisterUserCategoryForm from "./pages/RegisterUserCategoryForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register-questions" element={<RegisterUserQuestions />}>
          <Route path="role" element={<RegisterUserRoleForm />} />
          <Route path="category" element={<RegisterUserCategoryForm />} />
        </Route>
        <Route path="/register" element={<RegisterUserForm />} />
      </Routes>
    </>
  );
}

export default App;
