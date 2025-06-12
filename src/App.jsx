import reactLogo from "./assets/logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import ViewTask from "./pages/ViewTask.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alltask" element={<ViewTask />} />
      </Routes>
    </Router>
  );
}

export default App;
