import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Students from "../pages/Students";
import Teachers from "../pages/Teachers";
import Admin from "../pages/Admin";
import Files from "../pages/Files";
import FileUpload from "../pages/FileUpload";

function App() {
  return (
    <Router>
      <nav style={{padding: 10, borderBottom: "1px solid #ccc"}}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/students">Students</Link> |{" "}
        <Link to="/teachers">Teachers</Link> |{" "}
        <Link to="/admins">Admins</Link> |{" "}
        <Link to="/files">Files</Link> |{" "}
        <Link to="/login">Login</Link>
        <Link to="/upload">Upload File</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/admins" element={<Admin />} />
        <Route path="/files" element={<Files />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<FileUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
