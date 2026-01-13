import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Launch from "./pages/Launch.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Forgot from "./pages/Forgot.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ActivityLogs from "./pages/ActivityLogs.jsx";
import Analytics from "./pages/Analytics.jsx";
import Goals from "./pages/Goals.jsx";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/Profile.jsx";
import Demo from "./pages/Demo/Demo.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logs" element={<ActivityLogs />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;
