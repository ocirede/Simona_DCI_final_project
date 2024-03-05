import { Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Here will be the routes, this message can be deleted
      </h1>
      <Routes>
        <Route path="/examplepath" element={"<ExamplePage/>"} />
      </Routes>
    </>
  );
}

export default App;
