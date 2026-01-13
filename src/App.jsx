import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Launch from "../src/pages/Launch.jsx";
import Login from "../src/pages/Login.jsx";
import Signup from "../src/pages/Signup.jsx";
import Forgot from "../src/pages/Forgot.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </Router>
  );
}

export default App;
