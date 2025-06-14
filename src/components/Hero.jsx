import React from "react";
import "../Css/Hero.css"; 

export default function Hero() {
  return (
    <section className="hero">
      <h1>Code. Connect. Fly.</h1>
      <p>Your hub for drone development docs.</p>

      <img
        src='../../public/drone image.jpg'
        alt="Drone Hero"
        className="hero-img"
      />
      <button className="cta-btn">Get Started</button>
<div className="hero-options">
  <div className="option">
    <h3>Drone Programming</h3>
    <p>Write firmware, control flight logic, and integrate with Primus boards.</p>
    <button className="option-btn">Explore Drone Programming</button>
  </div>
  <div className="option">
    <h3>Remote Programming</h3>
    <p>Send commands, connect wirelessly, and remotely monitor your drone.</p>
    <button className="option-btn">Explore Remote Programming</button>
  </div>
</div>
    </section>
  );
}
