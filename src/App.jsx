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
        <Route path="/alltask" element={<ViewTask />} />
        <Route path="/newtask" element={<NewTask />} />
        <Route path="/edit" element={<EditTask />} />
      </Routes>
    </Router>
  );
}

export default App;
