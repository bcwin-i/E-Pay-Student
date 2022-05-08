import "./App.css";
import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/homepage/:page" element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
