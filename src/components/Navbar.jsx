import React from "react";
import "../Css/Navbar.css" // Assuming you have a CSS file for styling

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
  <img src="../../public/pluto logo.png" alt="Pluto Logo" className="logo-img" />
</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Docs</li>
        <li>Drone Programming</li>
        <li>Remote Programming</li>
      </ul>
    </nav>
  );
}