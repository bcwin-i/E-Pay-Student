import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import { useAuthState } from "./firebase";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthState();

  useEffect(() => {
    try {
      console.info("Registered user is : ", isAuthenticated?.email);
      isAuthenticated
        ? navigate("/homepage/:dashboard", {
            replace: true,
          })
        : navigate("/");
    } catch (e) {
      console.error(e);
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      <Route index element={<Welcome />} />
      <Route path="/homepage" replace={true} element={<Dashboard />}>
        <Route index path=":dashboard" element={<Dashboard />} />
        <Route path=":payment" element={<Dashboard />} />
        <Route path=":history" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
