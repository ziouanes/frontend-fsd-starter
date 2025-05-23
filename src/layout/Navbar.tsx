import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : undefined;

  return (
    <nav>
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/student" className={linkClass}>
        Student
      </NavLink>
      <NavLink to="/teacher" className={linkClass}>
        Teacher
      </NavLink>
      <NavLink to="/admin" className={linkClass}>
        Admin
      </NavLink>
      <NavLink to="/files" className={linkClass}>
        Files
      </NavLink>
      <NavLink to="/upload" className={linkClass}>
        Upload
      </NavLink>
    </nav>
  );
}
