import React from "react";
import "../Css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h4>Contact</h4>
        <ul>
          <li>Support</li>
          <li>Email</li>
          <li>Chat</li>
        </ul>
      </div>
      <div>
        <h4>Community</h4>
        <ul>
          <li>Forum</li>
          <li>Discord</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div>
        <h4>Resources</h4>
        <ul>
          <li>Docs</li>
          <li>Downloads</li>
          <li>Primus Boards</li>
        </ul>
      </div>
    </footer>
  );
}
