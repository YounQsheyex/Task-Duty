import reactLogo from "./assets/logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import ViewTask from "./pages/ViewTask.jsx";
import NewTask from "./components/NewTask.jsx";
import EditTask from "./components/EditTask.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allTask" element={<ViewTask />} />
        <Route path="/newTask" element={<NewTask />} />
        <Route path="/editTask/:id" element={<EditTask />} />
      </Routes>
    </Router>
  );
}

export default App;
