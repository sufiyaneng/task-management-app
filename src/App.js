import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Task from "./pages/Task";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
